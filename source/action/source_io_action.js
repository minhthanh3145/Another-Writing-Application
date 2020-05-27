import { Http } from "hyperapp-fx";
import nlp from "compromise";
import nlpSentences from "compromise-sentences";
import nlpParagraphs from "compromise-paragraphs";
import PouchDB from "pouchdb-browser";
import pouchdbFind from "pouchdb-find";
PouchDB.plugin(pouchdbFind);

nlp.extend(nlpParagraphs);
nlp.extend(nlpSentences);

let db = new PouchDB("awa-db-1");
let backend_url = "https://another-writing-application.eu.openode.io";

var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

// Add Source

const addSourceAction = (state, e) => [
  { ...state, shouldShowSource: true },
  Http({
    url: backend_url + "/get_content?url=" + encodeURIComponent(e.target.value),
    options: {
      method: "GET",
    },
    action: (state, result) => [
      state,
      AddSourceEffect({
        data: result,
        action: (state, source) => ({
          ...state,
          sources: doAddSource(state.sources, source),
        }),
      }),
    ],
  }),
];
const AddSourceEffect = (props) => [
  function (dispatch, props) {
    let data = props.data;
    let obj = data;
    obj._id = data.url;
    obj.type = "source";
    db.put(obj).then(function (_) {
      dispatch(props.action, {
        id: data.url,
        link: data.url,
        title: data.title,
      });
    });
  },
  props,
];

const doAddSource = (sources, source) => {
  let currentSources = sources;
  if (currentSources && source) {
    currentSources.push(source);
  }
  console.log(currentSources);
  return currentSources;
};

// Load Source

const loadSourceEffect = (props) => [
  function (dispatch, props) {
    db.allDocs({ include_docs: true, attachments: true }).then(function (res) {
      let rows = res.rows;
      if (rows.length > 0) {
        let result = rows
          .filter((row) => row.doc.type == "source")
          .map((row) => ({
            id: row.id,
            link: row.doc.url,
            title: row.doc.title,
          }));
        dispatch(props.action, result);
      } else {
        dispatch(props.action, []);
      }
    });
  },
  props,
];

// Delete Source

const deleteSourceAction = (state, item) => [
  state,
  DeleteSourceEffect({
    id: item.id,
    action: (state) => ({
      ...state,
      sources: doDeleteSource(state.sources, item.id),
    }),
    error: (state) => state,
  }),
];

const DeleteSourceEffect = (props) => [
  function (dispatch, props) {
    db.get(props.id)
      .then(function (doc) {
        db.remove(doc);
      })
      .then((res) => dispatch(props.action))
      .catch((err) => console.log(err), dispatch(props.error));
  },
  props,
];

const doDeleteSource = (sources, id) =>
  sources.filter((source) => source.id !== id);

module.exports.SourceIOActions = {
  AddSource: addSourceAction,
  LoadSourceEffect: loadSourceEffect,
  DeleteSource: deleteSourceAction,
};

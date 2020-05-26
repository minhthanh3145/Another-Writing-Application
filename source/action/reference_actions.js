import PouchDB from "pouchdb-browser";
import pouchdbQuickSearch from "pouchdb-quick-search";
PouchDB.plugin(pouchdbQuickSearch);

let db = new PouchDB("awa-db-1");
let searchTimeoutId;

// Add Reference
const SearchForTermEffect = (props) => [
  function (dispatch, props) {
    if (searchTimeoutId) {
      clearTimeout(searchTimeoutId);
    }
    searchTimeoutId = setTimeout(function () {
      db.search({
        query: props.term.toLowerCase(),
        fields: ["title", "content"],
        include_docs: true,
      }).then(function (res) {
        let references = props.references;
        let result = res.rows
          .filter((row) => row.doc.type == "source")
          .reduce(function (obj, item) {
            if (!obj[item.id]) {
              obj[item.id] = {
                content: item.doc.content,
                title: item.doc.title,
              };
            }
            return obj;
          }, references);
        dispatch(props.action, result);
      });
    }, 1000);
  },
  props,
];

const searchForTerm = (state, term) => [
  state,
  (term.trim() != "" &&
    SearchForTermEffect({
      references: state.references,
      term: term,
      action: (state, result) =>
        (result && { ...state, references: result, filter: term }) || state,
    })) ||
    state,
];

// Remove Reference
const doRemoveKey = (obj, prop) => {
  let { [prop]: omit, ...res } = obj;
  return res;
};

const removeReference = (state, referenceKey) => ({
  ...state,
  references: doRemoveKey(state.references, referenceKey),
});

module.exports.ReferenceActions = {
  SearchForTerm: searchForTerm,
  RemoveReference: removeReference,
};

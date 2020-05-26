import PouchDB from "pouchdb-browser";
let db = new PouchDB("awa-db-1");

let saveNoteContentId;

const saveNoteContentEffect = (props) => [
  function (dispatch, props) {
    if (saveNoteContentId) {
      clearTimeout(saveNoteContentId);
    }
    saveNoteContentId = setTimeout(function () {
      db.get("current_note")
        .catch(function (err) {
          if (err.name === "not_found") {
            return {
              _id: "current_note",
              content: "",
            };
          } else {
            // hm, some other error
            throw err;
          }
        })
        .then(function (configDoc) {
          configDoc.content = props.content;
          db.put(configDoc).then((_) => dispatch(props.action, props.content));
        });
    }, 1000);
  },
  props,
];

const getNoteContentEffect = (props) => [
  function (dispatch, props) {
    db.get("current_note")
      .catch(function (err) {
        if (err.name === "not_found") {
          return {
            _id: "current_note",
            content: "",
          };
        } else {
          // hm, some other error
          throw err;
        }
      })
      .then(function (configDoc) {
        dispatch(props.action, configDoc.content);
      });
  },
  props,
];

const ExportDataEffect = (props) => [
  function (dispatch, props) {
    db.allDocs({
      include_docs: true,
    }).then((res) => {
      let storageObj = res;
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(storageObj, null, 2));
      var dlAnchorElem = document.createElement("a");
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute(
        "download",
        "another-writing-application-" +
          new Date().getTime().toString() +
          ".json"
      );
      document.body.appendChild(dlAnchorElem);
      dlAnchorElem.click();
      document.body.removeChild(dlAnchorElem);
    });
  },
  props,
];

const exportDataAction = (state) => [
  state,
  ExportDataEffect({
    action: (state) => state,
  }),
];

module.exports.NoteActions = {
  GetNoteContentEffect: getNoteContentEffect,
  SaveNoteContentEffect: saveNoteContentEffect,
  ExportDataAction: exportDataAction,
};

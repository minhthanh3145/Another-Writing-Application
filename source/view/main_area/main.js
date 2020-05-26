import { h, app } from "hyperapp";
import { StateInit } from "./state_init";
import RemoveMarkdown from "remove-markdown";
import nlp from "compromise";
import nlpSentences from "compromise-sentences";
import nlpParagraphs from "compromise-paragraphs";
import nlpNgrams from "compromise-ngrams";
import { SourceIOActions } from "../../action/source_io_action";
import { ReferenceActions } from "../../action/reference_actions";
import { NoteActions } from "../../action/note_action";

nlp.extend(nlpParagraphs);
nlp.extend(nlpSentences);
nlp.extend(nlpNgrams);

const ReferenceContent = function (word, string) {
  return nlp(string)
    .paragraphs()
    .json()
    .map(function (paragraph, index) {
      return (
        <ul class="list-group col-12">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a
              class="collapsable-reference-content-link"
              data-toggle="collapse"
              href={"#collapsable-reference-content" + "-" + index}
            >
              {index}
            </a>
          </li>
          <div
            class={
              "collapse " +
              (paragraph.text.toLowerCase().includes(word.toLowerCase())
                ? "show"
                : "")
            }
            id={"collapsable-reference-content" + "-" + index}
          >
            <div class="card card-body">
              <p>{emphasize(word, paragraph.text)}</p>
            </div>
          </div>
        </ul>
      );
    });
};

const emphasize = function (word, string) {
  if (!string || !word) {
    return "";
  }
  let splited = string.split(RegExp(word, "i"));
  return splited.map(function (x, index) {
    if (index == splited.length - 1) {
      return x;
    }
    return h("em", { class: "unfiltered-word" }, [
      x + " ",
      h("em", { class: "filtered-word" }, word + " "),
    ]);
  });
};

const OnTypeAction = function (state, e) {
  try {
    let text = e.target.value;
    var doc = nlp(text);
    let subjects = doc.sentences().nouns().json();
    return [
      {
        ...state,
        topics: subjects.map((subject) => subject.text),
        isSavingNoteContent: true,
      },
      NoteActions.SaveNoteContentEffect({
        content: e.target.value,
        action: (state, result) => ({
          ...state,
          noteContent: result,
          isSavingNoteContent: false,
        }),
      }),
    ];
  } catch (ex) {
    console.log(ex);
  }
  return state;
};

const SourceToggle = (state) => (
  <button class="source-toggle btn btn-outline-primary btn-sm">Sources</button>
);

const SourceInput = (state) => (
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Add your writing sources here "
      aria-describedby="basic-addon1"
      onChange={SourceIOActions.AddSource}
    />
  </div>
);

const SearchInput = (state) => (
  <div class="input-group mb-3 search-input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Search for relevant references"
      aria-describedby="basic-addon1"
      onInput={(state, e) =>
        ReferenceActions.SearchForTerm(state, e.target.value)
      }
    />
  </div>
);

const SourceList = (state) => (
  <div class="sources-list">
    <ul class="list-group">
      {state.sources &&
        state.sources.map((source) => (
          <li class="list-group-item d-flex justify-content-between align-items-center source-list-item">
            <a href={source.link} target="_blank">
              {source.title}
            </a>
            <button
              onClick={SourceIOActions.DeleteSource(state, source)}
              type="button"
              class="btn btn-outline-secondary btn-sm borderless-button"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
    </ul>
  </div>
);

const ReferenceList = (state) => (
  <div class="reference-list">
    <div class="fluid-container">
      <div class="row">
        {Object.entries(state.references).map(([key, value], index) => (
          <ul class="list-group col-12">
            <li class="list-group-item d-flex justify-content-between align-items-center reference-list-item">
              <a
                class="collapsable-reference-link"
                data-toggle="collapse"
                href={"#collapsable-reference" + "-" + index}
              >
                {emphasize(state.filter, RemoveMarkdown(value.title))}
              </a>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm borderless-button"
                onClick={ReferenceActions.RemoveReference(state, key)}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </li>
            <div
              class="collapse show reference-content"
              id={"collapsable-reference" + "-" + index}
            >
              <div class="card card-body">
                {ReferenceContent(state.filter, RemoveMarkdown(value.content))}
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  </div>
);

const SideBar = (state) => (
  <div class="fluid-container side-bar-container">
    <div class="row main-row side-bar">
      <div class="container source-container">
        <div class="row">
          {CollapsableView(state, {
            viewClassName: "source-collapsable",
            header: SourceToggle(state),
            content: [SourceInput(state), SourceList(state)],
          })}
        </div>
        <hr />
        <div class="row">
          {SearchInput(state)}
          {ReferenceList(state)}
        </div>
      </div>
    </div>
  </div>
);

const TopMenu = (state) => (
  <div class="top-menu">
    <a data-toggle="collapse" href="#collapsable-top-menu">
      <h2>Another Writing Application</h2>
    </a>
    <div class="control-menu">
      <div class="container">
        <div class="row">
          <div class="col-4">{SideBarToggle(state)}</div>
          <div class="col-3">{SaveStatus(state)}</div>
          <div class="col">{ExportDataButton(state)}</div>
        </div>
      </div>
    </div>
    <div class="collapse show" id="collapsable-top-menu">
      <p>
        Gather your writing references into one place and search for relevant
        content.
      </p>
      <p>
        <ul>
          <li>Your writing and references are saved locally.</li>
          <li>
            Backend is used to only return content of the references. There's no
            database.
          </li>
          <li>
            You can run a local backend if you want. It's{" "}
            <a href="https://github.com/minhthanh3145/another-writing-application" target="_blank">
              open-sourced
            </a>
            .
          </li>
          <li>No markdown or styling. Just focus on getting the idea right.</li>
        </ul>
      </p>
    </div>
  </div>
);

const getCurrentNoteContent = function () {
  let textarea = document.getElementById("main-textarea");
  if (textarea) {
    return textarea.value;
  }
  return "";
};

const SaveStatus = (state) => (
  <div>
    <button
      class="btn btn-link"
      onClick={(state, e) => [
        { ...state, isSavingNoteContent: true },
        NoteActions.SaveNoteContentEffect({
          content: getCurrentNoteContent(),
          action: (state, result) => ({
            ...state,
            noteContent: result,
            isSavingNoteContent: false,
          }),
        }),
      ]}
    >
      <i
        class={
          "fas fa-circle " +
          (state.isSavingNoteContent ? "saving-circle" : "saved-circle")
        }
      ></i>
      <span class="side-bar-label">
        {state.isSavingNoteContent ? "Saving ..." : "Saved"}
      </span>
    </button>
  </div>
);

const ExportDataButton = (state) => (
  <div>
    <button class="btn btn-link" onClick={NoteActions.ExportDataAction}>
      <i class="far fa-save"></i>
      <span class="side-bar-label">Export your data</span>
    </button>
  </div>
);

const CollapsableView = (state, props) => (
  <div class={props.viewClassName}>
    <a data-toggle="collapse" href={"#collapsable-" + props.viewClassName}>
      {props.header}
    </a>
    <div class="collapse" id={"collapsable-" + props.viewClassName}>
      {props.content}
    </div>
  </div>
);

const TextArea = (state) => (
  <textarea
    id="main-textarea"
    onInput={OnTypeAction}
    placeholder="Start writing !"
    spellcheck={false}
  >
    {state.noteContent}
  </textarea>
);

const WritingArea = (state) => (
  <div class="col-8">
    {TopMenu(state)}
    <hr />
    {TextArea(state)}
  </div>
);

const SideBarToggle = (state) => (
  <div>
    <button
      class="btn btn-link"
      onClick={(state) => ({
        ...state,
        sideBarToggled: !state.sideBarToggled,
      })}
    >
      <i
        data-toggle="tooltip"
        data-placement="bottom"
        trigger="hover focus manual"
        class={state.sideBarToggled ? "fas fa-toggle-off" : "fas fa-toggle-on"}
      ></i>
      <span class="side-bar-label">
        {"Show sidebar on the " + (state.sideBarToggled ? "right" : "left")}
      </span>
    </button>
  </div>
);

const MainArea = (state) => (
  <div class="fluid-container main-container">
    {(state.sideBarToggled && (
      <div class="row main-row">
        <div class="col-4">{SideBar(state)}</div>
        <div class="col">{WritingArea(state)}</div>
      </div>
    )) || (
      <div class="row main-row">
        {WritingArea(state)}
        <div class="col">{SideBar(state)}</div>
      </div>
    )}
  </div>
);

const InitializeEffect = (props) => [
  function (dispatch, props) {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    dispatch(props.action);
  },
  props,
];

module.exports.DocumentTranslateView = {
  init: [
    StateInit,
    InitializeEffect({
      action: (state) => state,
    }),
    SourceIOActions.LoadSourceEffect({
      action: (state, result) => ({ ...state, sources: result }),
    }),
    NoteActions.GetNoteContentEffect({
      action: (state, content) => ({ ...state, noteContent: content }),
    }),
  ],
  view: (state) => MainArea(state),
};

import { h, app } from "hyperapp";
let AnotherWritingAppMainArea = require("./view/main_area/main")
  .DocumentTranslateView;

app({
  init: AnotherWritingAppMainArea.init,
  view: (state) => AnotherWritingAppMainArea.view(state),
  node: document.getElementById("hyperapp"),
});

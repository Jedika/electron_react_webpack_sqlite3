import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./redux/containers/welcomeCtn";
import { Provider } from "react-redux";
import store from "./redux/store";

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

ReactDOM.render(
  <Provider store={store}>
    <Welcome />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();

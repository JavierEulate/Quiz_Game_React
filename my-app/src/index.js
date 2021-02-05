import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReduxProvider from "./redux/ReduxProvider";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

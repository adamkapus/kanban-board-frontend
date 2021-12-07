import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  {
    id: 0,
    name: "foo",
    description: null,
    dueDate: null,
    category: null,
    categoryPos: 0,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

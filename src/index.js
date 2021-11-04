import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const DATA = [
  {
    id: "1",
    name: "MI zh",
    description: "Előadások átnézése",
    dueDate: "datum1",
    category: "Függőben",
    categoryPos: 0,
  },
  {
    id: "2",
    name: "MI HF 2",
    description: "HF 2 elkészítése",
    dueDate: "datum2",
    category: "Folyamatban",
    categoryPos: 0,
  },
  {
    id: "3",
    name: "MobWeb labor",
    description: "Labor jegyzőkönyv elkészítése",
    dueDate: "datum3",
    category: "Folyamatban",
    categoryPos: 1,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

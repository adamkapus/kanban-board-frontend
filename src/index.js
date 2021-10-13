import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "1", name: "Eat", description: "leiras1", dueDate: "datum", category: "Függőben" },
  { id: "2", name: "Sleep", description: "leiras2", dueDate: "datum", category: "Folyamatban" },
  { id: "3", name: "Repeat", description: "leiras3", dueDate: "datum", category: "Folyamatban" }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


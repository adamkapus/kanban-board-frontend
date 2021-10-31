import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "1", name: "első", description: "leiras1", dueDate: "datum", category: "Függőben" },
  { id: "2", name: "második", description: "leiras2", dueDate: "datum", category: "Folyamatban" },
  { id: "3", name: "harmadik", description: "leiras3", dueDate: "datum", category: "Folyamatban" }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


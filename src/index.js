import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const DATA = [
  { id: "1", name: "első", description: "leiras1", dueDate: "datum", category: "Függőben", categoryPos: 0 },
  { id: "2", name: "második", description: "leiras2", dueDate: "datum", category: "Folyamatban", categoryPos: 0 },
  { id: "3", name: "harmadik", description: "leiras3", dueDate: "datum", category: "Folyamatban", categoryPos: 1 }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


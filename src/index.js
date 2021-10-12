import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat", description: "leiras1", dueDate: "datum", category: "fuggoben" },
  { id: "todo-1", name: "Sleep", description: "leiras2", dueDate: "datum", category: "folyamatban" },
  { id: "todo-2", name: "Repeat", description: "leiras3", dueDate: "datum", category: "folyamatban" }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


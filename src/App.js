import './App.css';
import React, { useState } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  return (
    <div className="todoapp stack-large">
      <h1>Teendo kezelo</h1>
      <ActivityAdder />
      <CategoryManager tasks={tasks}/>
    </div>
  );
}

export default App;

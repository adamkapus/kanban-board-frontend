import './App.css';
import React, { useState } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";
import { nanoid } from "nanoid";


function App(props) {
  const jobb = props.tasks.map(task =>{ return {...task, id: "tezt" + nanoid()}});

  const [tasks, setTasks] = useState(jobb);
  const [allapot, setAll] = useState("kezdeti");



  function editTask(taskid, newName ){
    const editedTaskList = tasks.map(task => {
        if (taskid === task.id) {
          console.log(taskid);
          console.log(newName);
          return {...task, name: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
      console.log(tasks);

  }

  function deleteTask(taskid){
    setAll(taskid);
    console.log("torolve");
    console.log(taskid);
}
  return (
    <div >
      <h1>Teendő kezelő {tasks.length}</h1>
      <ActivityAdder kiir={allapot} />
      <CategoryManager tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";
import { nanoid } from "nanoid";


function App(props) {
  //const jobb = props.tasks.map(task =>{ return {...task, id: "teszt" + nanoid()}});


  let maxId = 0;

  //const preparedData = props.tasks.map(function(task){ maxId++; return {...task, id: maxId}})

  const [tasks, setTasks] = useState(props.tasks);
  const [maxID, setMaxID] = useState(3); 


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
    const remainingTasks = tasks.filter(task => taskid !== task.id);
    setTasks(remainingTasks);
  }

  /*function pls(){
    maxId++;
    return maxId;
  }*/

  function addTask(name, description, dueDate, category){
    /*console.log("elotte" + maxId);
      maxId = pls();
      console.log("utana" + maxId);*/
      const newID = maxID + 1;
      setMaxID(newID);
      const newTask = {id: newID, name: name, description: description, dueDate: dueDate, category: category };
      setTasks([...tasks, newTask]);

  }
  return (
    <div >
      <h1>Teendő kezelő {tasks.length}</h1>
      <ActivityAdder addTask={addTask} />
      <CategoryManager tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

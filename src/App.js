import "./App.css";
import React, { useState } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";
import { nanoid } from "nanoid";

function App(props) {
  //const jobb = props.tasks.map(task =>{ return {...task, id: "teszt" + nanoid()}});

  //const preparedData = props.tasks.map(function(task){ maxId++; return {...task, id: maxId}})

  const [tasks, setTasks] = useState(props.tasks);
  const [maxID, setMaxID] = useState(3);

  /*let adat = {
    id: 3,
    name: "ujnve",
  };*/
  /*async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }*/

  /*let response =  postData(
    " http://localhost:3100/customers",
    adat
  );
  console.log(response);*/

  /*function initializeData(){
      fetch(
        "http://localhost:3100/tasks"
      ).then(res => res.json())
      .then( res => {setTasks(res)});
      //const tasksData =  request.json();
      //console.log(tasksData);
      
    }
    initializeData();*/

  function findMaxCategoryPositionInCategory(category) {
    let maxCategoryPosition = 0;
    tasks.map((task) => {
      if (
        task.category === category &&
        task.categoryPos > maxCategoryPosition
      ) {
        maxCategoryPosition = task.categoryPos;
      }
      return task;
    });
    return maxCategoryPosition;
  }

  function editTask(taskid, newName, newDescription, newDueDate, newCategory) {
    const editedTaskList = tasks.map((task) => {
      if (taskid === task.id) {
        const currentMaxIDInCategory =
          findMaxCategoryPositionInCategory(newCategory);
        let categoryPos = currentMaxIDInCategory + 1;
        return {
          ...task,
          name: newName,
          description: newDescription,
          dueDate: newDueDate,
          category: newCategory,
          categoryPos: categoryPos,
        };
      }
      return task;
    });
    setTasks(editedTaskList);
    console.log(tasks);
  }

  function deleteTask(taskid) {
    const remainingTasks = tasks.filter((task) => taskid !== task.id);
    setTasks(remainingTasks);
  }

  function addTask(name, description, dueDate, category) {
    /*console.log("elotte" + maxId);
      maxId = pls();
      console.log("utana" + maxId);*/
    const newID = maxID + 1;
    setMaxID(newID);
    const currentMaxIDInCategory = findMaxCategoryPositionInCategory(category);
    let categoryPos = currentMaxIDInCategory + 1;
    const newTask = {
      id: newID,
      name: name,
      description: description,
      dueDate: dueDate,
      category: category,
      categoryPos: categoryPos,
    };

    setTasks([...tasks, newTask]);
  }
  return (
    <div className="container-fluid ">
      <h1 className="mb-4">Teendő kezelő </h1>
      <ActivityAdder addTask={addTask} />
      <CategoryManager
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

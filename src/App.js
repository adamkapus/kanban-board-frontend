import "./App.css";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";


function App(props) {
  const backEndUrl = "http://localhost:5000/api/todoitems";
  const [tasks, setTasks] = useState(props.tasks);
  

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async function putData(url = "", data = {}) {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  function convertDueDate(task) {
    task.dueDate = task.dueDate.slice(0, 10);
    return task;
  }

  useEffect(() => {
   fetchAllTasks();
  }, []);

  function fetchAllTasks(){
    fetch(backEndUrl)
      .then((res) => res.json())
      .then((res) =>
        res.map((task) => {
          return convertDueDate(task);
        })
      )
      .then((res) => {
        setTasks(res);
      });
  }

  async function editTask(
    taskid,
    newName,
    newDescription,
    newDueDate,
    newCategory
  ) {

    const edited = {
      id :taskid,
      name: newName,
      description: newDescription,
      dueDate: newDueDate,
      category: newCategory,
    };
    await putData(backEndUrl + "/" + taskid, edited);
    await fetchAllTasks();
  }

  async function deleteTask(taskid) {
    await fetch(backEndUrl + "/" + taskid, {
      method: "DELETE",
    });

    const remainingTasks = tasks.filter((task) => taskid !== task.id);
    setTasks(remainingTasks);
  }

  async function addTask(name, description, dueDate, category) {
    let newTask = {
      name: name,
      description: description,
      dueDate: dueDate,
      category: category,
      
    };

    let createdTask = await postData(backEndUrl, newTask);
    createdTask = convertDueDate(createdTask);

    setTasks([...tasks, createdTask]);
  }



  async function moveTask(toBeMovedHigherTaskId, toBeMovedLowerTaskId) {
    const url = backEndUrl + "/" + "?" + "firstId=" + toBeMovedHigherTaskId + "&" + "secondId=" + toBeMovedLowerTaskId;
    await fetch(url, {
      method: "PUT"
    });
    await fetchAllTasks();

  }


  return (
    <div className="container-fluid ">
      <h1 className="mb-4">Teendő kezelő </h1>
      <ActivityAdder addTask={addTask} />
      <CategoryManager
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />
    </div>
  );
}

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number, name: PropTypes.string,
  description: PropTypes.string,
  dueDate: PropTypes.string,
  category: PropTypes.string,
  categoryPos: PropTypes.number}))
};


export default App;

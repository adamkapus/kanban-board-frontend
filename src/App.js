import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import ActivityAdder from "./components/ActivityAdder.js";
import CategoryManager from "./components/CategoryManager";

function App(props) {
  const backEndUrl = "http://localhost:5000/api/todoitems";
  //const [backEndUrl, setBackEndUrl] = useState("http://localhost:5000/api/todoitems");
  const [tasks, setTasks] = useState(props.tasks);
  //const [maxID, setMaxID] = useState(3);

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
    fetch("http://localhost:5000/api/todoitems")
      .then((res) => res.json())
      .then((res) =>
        res.map((task) => {
          return convertDueDate(task);
        })
      )
      .then((res) => {
        console.log("lekérés");
        console.log(res);
        setTasks(res);
      });
  }, []);

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

  async function editTask(
    taskid,
    newName,
    newDescription,
    newDueDate,
    newCategory
  ) {
    const editedTaskList = await tasks.map((task) => {
      if (taskid === task.id) {
        let categoryPos = task.categoryPos;
        if (newCategory !== task.category) {
          const currentMaxIDInCategory =
            findMaxCategoryPositionInCategory(newCategory);
          categoryPos = currentMaxIDInCategory + 1;
        }
        const edited = {
          ...task,
          name: newName,
          description: newDescription,
          dueDate: newDueDate,
          category: newCategory,
          categoryPos: categoryPos,
        };
        putData(backEndUrl + "/" + task.id, edited);

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
    ///console.log(tasks);
  }

  async function deleteTask(taskid) {
    await fetch(backEndUrl + "/" + taskid, {
      method: "DELETE",
    });

    const remainingTasks = tasks.filter((task) => taskid !== task.id);
    setTasks(remainingTasks);
  }

  async function addTask(name, description, dueDate, category) {
    const currentMaxIDInCategory = findMaxCategoryPositionInCategory(category);
    let categoryPos = currentMaxIDInCategory + 1;
    let newTask = {
      name: name,
      description: description,
      dueDate: dueDate,
      category: category,
      categoryPos: categoryPos,
    };

    let createdTask = await postData(backEndUrl, newTask);
    createdTask = convertDueDate(createdTask);

    setTasks([...tasks, createdTask]);
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

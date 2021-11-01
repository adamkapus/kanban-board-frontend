import React, { useState } from "react";
import Item from "./Item";

function Category(props) {

//const [categoryTasks, setCategoryTasks] = useState(props.tasks);

//const itemek = categoryTasks.map(categoryTask => (<Item data={categoryTask}/>));//id={task.id} name={task.name} description={task.description} dueDate= {task.dueDate}  category={task.category} />);
  
  return (
      <div >
      <h1 className="text-center mb-3"> 
          {props.name}
      </h1>
      <div className=" d-flex flex-column  justify-content-center ">
      {
          props.tasks.map((categoryTask) => (<Item key={categoryTask.id} data={categoryTask} editTask={props.editTask} deleteTask={props.deleteTask}/>))
      }
      </div>
  </div>

  );
}

export default Category;
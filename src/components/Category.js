import React, { useState } from "react";
import Item from "./Item";

function Category(props) {

const [categoryTasks, setCategoryTasks] = useState(props.tasks);

//const itemek = categoryTasks.map(categoryTask => (<Item data={categoryTask}/>));//id={task.id} name={task.name} description={task.description} dueDate= {task.dueDate}  category={task.category} />);
  
  return (
  <div>
      <h1> 
          {props.name}
      </h1>

      {
          categoryTasks.map((categoryTask) => (<Item data={categoryTask}/>))
      }
  </div>
  );
}

export default Category;
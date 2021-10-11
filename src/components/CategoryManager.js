import React, { useState } from "react";
import Category from "./Category";

function CategoryManager(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const fuggobenLevoTaskok = tasks.filter(task => task.category === "fuggoben");//.map(task => <Category name="Függőben" tasks={fuggoben}  />);
  const folyamatbanLevoTaskok = tasks.filter(task => task.category === "folyamatban");

  return (
    <div class="row">
        <div class="column" >
            <Category name="Függőben" tasks={fuggobenLevoTaskok}/>
        </div>
        <div class="column" >
        <Category name="Folyamatban" tasks={folyamatbanLevoTaskok}/>
        </div>
    </div>
  );
}

export default CategoryManager;
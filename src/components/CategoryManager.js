import React, { useState } from "react";
import Category from "./Category";

function CategoryManager(props) {


  const fuggobenLevoTaskok = props.tasks.filter(task => task.category === "fuggoben");//.map(task => <Category name="Függőben" tasks={fuggoben}  />);
  const folyamatbanLevoTaskok = props.tasks.filter(task => task.category === "folyamatban");

  return (
    <div >
        <div className="column" >
            <Category name="Függőben" tasks={fuggobenLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
        <div className="column" >
        <Category name="Folyamatban" tasks={folyamatbanLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
    </div>
  );
}

export default CategoryManager;
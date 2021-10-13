import React, { useState } from "react";
import Category from "./Category";
import {CATEGORIES_MAP as CATEGORIES_MAP} from "../utils/CategoryHandle.js";

function CategoryManager(props) {


  const fuggobenLevoTaskok = props.tasks.filter(CATEGORIES_MAP["Függőben"]);//.map(task => <Category name="Függőben" tasks={fuggoben}  />);
  const folyamatbanLevoTaskok = props.tasks.filter(CATEGORIES_MAP["Folyamatban"]);
  const keszLevoTaskok = props.tasks.filter(CATEGORIES_MAP["Kész"]);
  const elhalasztvaLevoTaskok = props.tasks.filter(CATEGORIES_MAP["Elhalasztva"]);

  return (
    <div >
        <div className="column" >
          <Category name="Függőben" tasks={fuggobenLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
        <div className="column" >
          <Category name="Folyamatban" tasks={folyamatbanLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
        <div className="column" >
         <Category name="Kész" tasks={keszLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
        <div className="column" >
          <Category name="Elhalasztva" tasks={elhalasztvaLevoTaskok} editTask={props.editTask} deleteTask={props.deleteTask}/>
        </div>
    </div>
  );
}

export default CategoryManager;
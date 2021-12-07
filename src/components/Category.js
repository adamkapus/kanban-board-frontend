import React from "react";
import Item from "./Item";


function Category(props) {


  function MoveHigherTask(taskid){
    console.log(taskid);
    console.log(props.tasks);
    let indexOfTask = props.tasks.findIndex((task) => {return task.id === taskid});
   if(indexOfTask === 0){
    //this task is already on the top
    console.log("kileptem ehello")
    return;
   }
   
    let indexOfAboveTask = indexOfTask -1;
    let taskIdOfCurrentlyAbove = props.tasks[indexOfAboveTask].id;

    console.log("currentindex"+indexOfTask);
    console.log("above"+taskIdOfCurrentlyAbove);

    props.moveTask(taskid, taskIdOfCurrentlyAbove);
   

}

function MoveLowerTask(taskid){

  let indexOfTask = props.tasks.findIndex((task) => {return task.id === taskid});

  if( (indexOfTask === props.tasks.length-1)){
    //this task is already on the bottom
    console.log("kileptem ehello")
    return;
   }

   let indexOfBelowTask = indexOfTask +1;
    let taskIdOfCurrentlyBelow = props.tasks[indexOfBelowTask].id;

    console.log("currentindex"+indexOfTask);
    console.log("below"+taskIdOfCurrentlyBelow);

    props.moveTask(taskIdOfCurrentlyBelow, taskid);

}
  return (
    <div>
      <h1 className="text-center mb-3">
        {props.name}
        <span className="text-muted fs-4">({props.tasks.length}) </span>
      </h1>

      <div className=" d-flex flex-column  justify-content-center ">
        {props.tasks.map((categoryTask) => (
          <Item
            key={categoryTask.id}
            data={categoryTask}
            editTask={props.editTask}
            deleteTask={props.deleteTask}
            moveHigherTask={MoveHigherTask}
            moveLowerTask={MoveLowerTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;

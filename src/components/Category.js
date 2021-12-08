import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";


function Category(props) {


  function MoveHigherTask(taskid){
    let indexOfTask = props.tasks.findIndex((task) => {return task.id === taskid});
   if(indexOfTask === 0){
    //this task is already at the top
    return;
   }
   
    let indexOfAboveTask = indexOfTask -1;
    let taskIdOfCurrentlyAbove = props.tasks[indexOfAboveTask].id;


    props.moveTask(taskid, taskIdOfCurrentlyAbove);
   

}

function MoveLowerTask(taskid){

  let indexOfTask = props.tasks.findIndex((task) => {return task.id === taskid});

  if( (indexOfTask === props.tasks.length-1)){
    //this task is already on the bottom
    return;
   }

   let indexOfBelowTask = indexOfTask +1;
    let taskIdOfCurrentlyBelow = props.tasks[indexOfBelowTask].id;


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

Category.propTypes = {
  name : PropTypes.string,
  tasks: PropTypes.arrayOf({id : PropTypes.number, name: PropTypes.string,
  description: PropTypes.string,
  dueDate: PropTypes.string,
  category: PropTypes.string,
  categoryPos: PropTypes.number}),
  editTask : PropTypes.func,
  deleteTask : PropTypes.func,
  moveTask: PropTypes.func
};

export default Category;

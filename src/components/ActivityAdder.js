import React, { useState } from "react";

function ActivityAdder(props) {
  const[isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setnewDueDate] = useState('');
  const [newCategory, setnewCategory] = useState('');


  function onNameChanged(e) {
    setNewName(e.target.value);
    //console.log(e.target.value);
  }
  function onDescriptionChanged(e) {
    setNewDescription(e.target.value);
    //setNewName(e.target.value);
    //console.log(e.target.value);
  }
  function onDueDateChanged(e) {
    setnewDueDate(e.target.value);
    //console.log(e.target.value);
  }
  function onCategoryChanged(e) {
    setnewCategory(e.target.value);
    //console.log(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    //props.editTask(props.data.id, newName);
    props.addTask(newName,newDescription,newDueDate, newCategory);
    setEditing(false);
    //console.log(newName);
   // setNewName("");

  }

    const editingTemplate = (
  <form  onSubmit={handleSubmit}>
    <p>

      <label  htmlFor="name">
        Név 
      </label>
      <input
        id="name"
        type="text"
        value={newName}
        onChange={onNameChanged}
      />
      </p>

      <p>
      <label htmlFor="description">
        Leírás
      </label>
      <input
        id="description"
        type="text"
        value={newDescription}
        onChange={onDescriptionChanged}
      />
      </p>

      <p>
      <label htmlFor="dueDate">
        Határidő
      </label>
      <input
        id="dueDate"
        type="text"
        value={newDueDate}
        onChange={onDueDateChanged}
      />
      </p>

      <p>
      <label htmlFor="category">
        Kategória
      </label>
      <input
        id="category"
        type="text"
        value={newCategory}
        onChange={onCategoryChanged}
      />
      </p>

    

    


    <div >
    <button
      type="button"
      onClick={() => setEditing(false)}
    >
      Cancel
    </button>
      <button type="submit" >
        Save
      </button>
    </div>
  </form>
  
);
const viewTemplate = (
  <div> 
      
      <button type="button" onClick={() => setEditing(true)}>
          Új feladat felvétele
      </button>
  
</div>
      

);

  return ( <div  >{isEditing ? editingTemplate : viewTemplate}</div>);





}


export default ActivityAdder;
import React, { useState } from "react";

function Item(props) {

    //const [data, setData] = useState(props.data);
    const[isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.data.name);
    const [newDescription, setNewDescription] = useState(props.data.description);
  const [newDueDate, setnewDueDate] = useState(props.data.dueDate);
  const [newCategory, setnewCategory] = useState(props.data.category);


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

    function handleChange(e) {
      setNewName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.editTask(props.data.id, newName, newDescription, newDueDate, newCategory);
      //console.log(newName);
      //setNewName('');
      ////setnewDueDate('');
      setEditing(false);

    }

      const editingTemplate = (
        <form  onSubmit={handleSubmit}>
  
    
        <div class="mb-3 mx-3">
          <label  htmlFor="name" className="form-label">
            Név 
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={newName}
            onChange={onNameChanged}
          />
          </div>
          
          <div class="mb-3 mx-3">
          <label  htmlFor="description" className="form-label">
            Leírás
          </label>
          <textarea
            id="description"
            type="text"
            className="form-control"
            value={newDescription}
            onChange={onDescriptionChanged}
          />
          </div>
    
        
          
    
          <div class="mb-3 mx-3">
          <label htmlFor="dueDate" className="form-label">
            Határidő
          </label>
          <input
            id="dueDate"
            type="text"
            className="form-control"
            value={newDueDate}
            onChange={onDueDateChanged}
          />
          </div>
    
          <div class="mb-3 mx-3">
          <label htmlFor="category" className="form-label">
            Kategória
          </label>
          <select class="form-select" id="category" value={newCategory} onChange={onCategoryChanged}>
            <option value="Függőben">Függőben</option>
            <option value="Folyamatban">Folyamatban</option>
            <option value="Kész">Kész</option>
            <option value="Elhalasztva">Elhalasztva</option>
          </select>
          </div>
    
        
    
        
    
    
        <div >
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
          <button type="submit"
           class="btn btn-primary"
            >
            Save
          </button>
        </div>
      </form>

 
    
  );
  const viewTemplate = (
    <div >
      <div className ="card-header text-center">
        <h5 class="card-title"> {props.data.name}</h5>
        <h6 class="card-subtitle text-muted">#{props.data.id}</h6>
        </div> 
        <p className="card-text" >{props.data.description}</p>
        <p className="card-text" >{props.data.dueDate}</p>
        <div>
        <button type="button"
        class="btn btn-primary"
         onClick={() => setEditing(true)}>
            Edit
        </button>
        <button
            type="button"
            class="btn btn-primary"
            onClick={() => props.deleteTask(props.data.id)}
          >
            Delete 
        </button>
        </div>
    
</div>
        
  
  );

    return ( <div className="card w-75 shadow-sm mb-5 bg-light border-dark mx-auto" >{isEditing ? editingTemplate : viewTemplate}</div>);
  



  
}

export default Item;
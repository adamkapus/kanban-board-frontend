import React, { useState } from "react";

function Item(props) {

    //const [data, setData] = useState(props.data);
    const[isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
      setNewName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.editTask(props.data.id, newName);
      setEditing(false);
      //console.log(newName);
      setNewName("");

    }

      const editingTemplate = (
    <form  onSubmit={handleSubmit}>
      <div >
        <label  htmlFor={props.id}>
          New name for {props.data.name}
        </label>
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
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
        <h2 >
            {props.data.id} {props.data.name}
        </h2>
        <p>{props.data.description}</p>
        <p>{props.data.dueDate}</p>
        <button type="button" onClick={() => setEditing(true)}>
            Edit
        </button>
        <button
            type="button"
            onClick={() => props.deleteTask(props.data.id)}
          >
            Delete 
        </button>
    
</div>
        
  
  );

    return ( <div key={props.data.id} >{isEditing ? editingTemplate : viewTemplate}</div>);
  



  
}

export default Item;
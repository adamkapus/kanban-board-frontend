import React, { useState } from "react";
import PropTypes from 'prop-types';

function Item(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.data.name);
  const [newDescription, setNewDescription] = useState(props.data.description);
  const [newDueDate, setnewDueDate] = useState(props.data.dueDate);
  const [newCategory, setnewCategory] = useState(props.data.category);


  function onNameChanged(e) {
    setNewName(e.target.value);
  }
  function onDescriptionChanged(e) {
    setNewDescription(e.target.value);
  }
  function onDueDateChanged(e) {
    setnewDueDate(e.target.value);
  }
  function onCategoryChanged(e) {
    setnewCategory(e.target.value);  
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(
      props.data.id,
      newName,
      newDescription,
      newDueDate,
      newCategory
    );
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mx-3 pt-3">
        <label htmlFor="name" className="form-label">
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

      <div className="mb-3 mx-3">
        <label htmlFor="description" className="form-label">
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

      <div className="mb-3 mx-3">
        <label htmlFor="dueDate" className="form-label">
          Határidő
        </label>
        <input
          id="dueDate"
          type="date"
          className="form-control"
          value={newDueDate}
          onChange={onDueDateChanged}
          required
        />
      </div>

      <div className="mb-3 mx-3">
        <label htmlFor="category" className="form-label">
          Kategória
        </label>
        <select
          className="form-select"
          id="category"
          value={newCategory}
          onChange={onCategoryChanged}
        >
          <option value="Függőben">Függőben</option>
          <option value="Folyamatban">Folyamatban</option>
          <option value="Kész">Kész</option>
          <option value="Elhalasztva">Elhalasztva</option>
        </select>
      </div>

      <div className="mb-3 px-5 ">
        <button
          type="button"
          className="btn btn-primary me-5  "
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary ms-5 ">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div className=" text-center">
        <button
          type="button"
          className="btn btn-light  position-absolute top-0 start-0"
          onClick={() => setEditing(true)}
        >
          <i className="fa fa-edit" style={{ color: "darkgreen" }}></i>
        </button>
        <button
          type="button"
          className="btn btn-light  position-absolute top-0 end-0"
          onClick={() => props.deleteTask(props.data.id)}
        >
          <i className="fa fa-close" style={{ color: "darkred" }}></i>
        </button>
        <h5 className="card-title fw-bold"> {props.data.name}</h5>

      </div>
      <div className="mx-3">
        <p className="card-text pt-3">{props.data.description}</p>
        <p className="card-text mb-3">{props.data.dueDate}</p>
        <p className="card-text mb-3">{props.data.id}</p>
      </div>
      <div>
      <button
          type="button"
          className="btn btn-light "
          onClick={() => props.moveHigherTask(props.data.id)}
        >
          <i className="fa fa-arrow-up" style={{ color: "black" }}></i>
        </button>
        <button
          type="button"
          className="btn btn-light "
          onClick={() => props.moveLowerTask(props.data.id)}
        >
          <i className="fa fa-arrow-down" style={{ color: "black" }}></i>
        </button>
        
      </div>
    </div>
  );

  return (
    <div className="card w-75 shadow-sm mb-5 bg-light border-dark mx-auto">
      {isEditing ? editingTemplate : viewTemplate}
    </div>
  );
}

Item.propTypes = {
  key : PropTypes.number,
  data: {id : PropTypes.number, name: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    category: PropTypes.string,
    categoryPos: PropTypes.number},
  editTask : PropTypes.func,
  deleteTask : PropTypes.func,
  moveHigherTask: PropTypes.func,
  moveLowerTask: PropTypes.func
};

export default Item;

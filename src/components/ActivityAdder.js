import React, { useState } from "react";
import PropTypes from 'prop-types';

function ActivityAdder(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDueDate, setnewDueDate] = useState("");
  const [newCategory, setnewCategory] = useState("Függőben");

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
    props.addTask(newName, newDescription, newDueDate, newCategory);
    console.log(newDueDate);
    setNewName("");
    setNewDescription("");
    setnewDueDate("");
    setEditing(false);
  }

  const editingTemplate = (
    <div className="card shadow-sm mb-5 bg-light border-dark mx-auto w-75">
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
    </div>
  );
  const viewTemplate = (
    <div>
      <button
        type="button"
        className="btn btn-primary rounded-pill"
        onClick={() => setEditing(true)}
      >
        Új feladat felvétele
      </button>
    </div>
  );

  return (
    <div className=" row justify-content-start">
      {" "}
      <div className="col-3">
        {isEditing ? editingTemplate : viewTemplate}
      </div>{" "}
    </div>
  );
}


ActivityAdder.propTypes = {
  addTask: PropTypes.func
};

export default ActivityAdder;

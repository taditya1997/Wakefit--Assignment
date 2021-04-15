import React, { useState } from "react";

const Todo = (props) => 
{
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  const editingTemplate = (
    <form  onSubmit={handleSubmit}>
      <div >
        <label  htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
  id={props.id}
  className="todo-text"
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
      <span >renaming {props.name}</span>
    </button>
        <button type="submit" >
          Save
          <span >new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div >
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label  htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div >
          <button type="button" >
            Edit <span >{props.name}</span>
          </button>
          <button
            type="button"
           
            onClick={() => props.deleteTask(props.id)}
          >
            Delete <span >{props.name}</span>
          </button>
        </div>
    </div>
  );




    return (
        
      <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>);
};

export default Todo;
import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

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
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          novo nome para "{props.name}"
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          cancelar
          <span className="visually-hidden">renomeação de {props.name}</span>
        </button>
        <button type="submit" className="btn btn_primary todo-edit">
          salvar
          <span className="visually-hidden">novo nome para {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          editar
          <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn_danger"
          onClick={() => props.deleteTask(props.id)}
        >
          excluir <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">
      {isEditing === true ? editingTemplate : viewTemplate}
    </li>
  );
}

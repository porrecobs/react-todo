import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input_lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn_primary btn_lg">
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default Form;

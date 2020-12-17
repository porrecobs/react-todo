import React from "react";

function Form(props) {
  return(
    <div className="form-container">
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input type="text" id="new-todo-input" className="input input_lg" name="text" autoComplete="off"/>
        <button type="submit" className="btn btn_primary btn_lg">Adicionar</button>
      </form>
    </div>
  );
}

export default Form;
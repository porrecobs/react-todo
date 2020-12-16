import React from "react";

export default function Todo() {
  return(<li className="todo stack-small">
  <div className="c-cb">
  <input id="todo-0" type="checkbox" defaultChecked={true}/>
  <label className="todo-label" htmlFor="todo-0">
    Tarefa 0
  </label>
  </div>
  <div className="btn-group">
    <button type="button" className="btn">
      editar <span className="visually-hidden">Tarefa 0</span>
    </button>
    <button type="button" className="btn btn_danger">
      deletar <span className="visually-hidden">Tarefa 0</span>
    </button>
  </div>
</li>);
}
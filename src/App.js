/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./App.css";
import FilterButton from "./components/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  function addTask(name) {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todo-app">
      <h1>2-Do</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tarefas restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

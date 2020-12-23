/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

import "./App.css";

const FILTER_MAP = {
  todas: () => true,
  ativas: (task) => !task.completed,
  concluídas: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("todas");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksNoun = taskList !== 1 ? "tarefas" : "tarefa";
  const headingText = `${taskList.length} ${tasksNoun} restando`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map((task) => {
      return id === task.id ? { ...task, completed: !task.completed } : task;
    });
    setTasks(updateTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      return id === task.id ? { ...task, name: newName } : task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div>
      <div className="container-header">
        <img className="image-header" src="./support-team.png" alt="" />
      </div>
      <div className="todo-app">
        <h1>2-Do</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;

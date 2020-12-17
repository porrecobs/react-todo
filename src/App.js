import Todo from "./components/Todo";
import Form from "./components/Form";
import './App.css';
import FilterButton from "./components/FilterButton";

function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>));
  return (
    <div className="todo-app">
      <h1>2Do</h1>
      <Form />
      <div className="filters btn-group">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tarefas restantes
      </h2>
      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;

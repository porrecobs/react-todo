import logo from './logo.svg';
import Todo from "./components/Todo";
import './App.css';

function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>));
  return (
    <div className="todo-app">
      <h1>2Do</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input type="text" id="new-todo-input" className="input input_lg" name="text" autoComplete="off"/>
        <button type="submit" className="btn btn_primary btn_lg">Adicionar</button>
      </form>
      <div className="filters btn-group">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">exibir </span>
          <span>tudo</span>
          <span className="visually-hidden"> tarefas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">exibir </span>
          <span>active</span>
          <span className="visually-hidden"> tarefas</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">exibir </span>
          <span>concluídas</span>
          <span className="visually-hidden"> tarefas</span>
        </button>
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

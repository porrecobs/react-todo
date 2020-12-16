import logo from './logo.svg';
import './App.css';

function App() {
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
        <li className="todo stack-small">
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
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;

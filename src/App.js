import './App.css';

function App(props) {
  return (
    <div className="App">
        <h1>To Do App</h1>
        <form>
          <h2>To do List</h2>
          <input type="text" id="new-todo-input" className="input input_large" name="text" autoComplete="off"/>
          <button type="submit" className="btn btn_primary btn_lg">Add</button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">Show all tasks</button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">Show active tasks</button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">Show completed tasks</button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          <li className="todo stack-small">
            <div classname="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked={false} />
              <label className="todo-label" htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Eat</span> </button>
                <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Eat</span></button>
            </div>
          </li>
          <li className="todo stack-small">
            <div classname="c-cb">
              <input id="todo-1" type="checkbox" defaultChecked={false} />
              <label className="todo-label" htmlFor="todo-1">
                Run
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Run</span> </button>
                <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Run</span></button>
            </div>
          </li>
          <li className="todo stack-small">
            <div classname="c-cb">
              <input id="todo-2" type="checkbox" defaultChecked={false} />
              <label className="todo-label" htmlFor="todo-2">
                Code
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Code</span> </button>
                <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Code</span></button>
            </div>
          </li>
        </ul>
    
    </div>
  );
}

export default App;

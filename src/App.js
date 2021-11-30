import TodoContainer from './component/TodoContainer';
import TCF from './component/TodoContainerFunc';
import './App.css';

function App() {
  return (

        <div>
        <h1>Hello World</h1>
        <TodoContainer/>
        <TCF/>
        </div>
   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;

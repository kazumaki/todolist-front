import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const selectCount = state => state.count;

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <div className="App">
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
      <button onClick={() => dispatch({type: 'INCREMENT'})}>increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
      <div>{count}</div>
    </div>
  );
}

export default App;

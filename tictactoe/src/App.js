import './App.css';
import { Board } from './components/Board';

function App() {
  return (
    <div class="page">
      <h1>Tic Tac Toe</h1>
      <div className="app">
        <Board></Board>
      </div>
    </div>
  );
}

export default App;

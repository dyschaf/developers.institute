import logo from "./logo.svg";
import "./App.css";
import Game from "./comp/Game";
import Nav from "./comp/Nav";

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Nav />
      <Game />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <button onClick={add}></button>
        <p></p>
        <button coclick={minus}></button>
      </div>
    );
  }
}
export default App;

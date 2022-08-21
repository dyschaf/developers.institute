import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import Section from "";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: [],
      // txt: "",
      // count: 0,
      key: 0,
    };
  }
  enter = (e) => {
    if (13 == e.keyCode) {
      // key = 1;
      console.log("enter");
      this.setState.todo.push({ txt: e.target.value }); //key: this.state.key++
      return this.appendtodo();
    } else {
      console.log(e.target.value);
    }
  };
  appendtodo = () => {
    this.setState.todo.map((item) => <div>{item.txt}</div>);
  };
  render() {
    return (
      <div className="App">
        <input type="text" onKeyDown={this.enter}></input>
      </div>
    );
  }
}

export default App;

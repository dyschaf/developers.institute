import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      txt: "",
      message2: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        {/* // <main> */}
        <div>gofuckyourself</div>
        {/* <input type="text" onchange /> */}
        {/* </main> */}
      </div>
    );
  }
}

export default App;

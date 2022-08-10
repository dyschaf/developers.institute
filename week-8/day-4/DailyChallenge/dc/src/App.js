import React from "react";
import logo from "./logo.svg";

import "./App.css";
import ErrorBoundary from "../../../ExerciseXP/xp/src/Components/ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      txt: "",
      message2: "",
    };
  }
  async componentDidMount() {
    const res = await "http://localhost:5000/api/hello";
    const data = await res.text();
    this.state({ message: data });
  }
  handleSubmit = (e) => {
    const { txt } = this.state;
    fetch("api/world", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text: txt }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log({ message2: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({ txt: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.message}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              value={this.state.txt}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          {this.state.message2}
        </header>
      </div>
    );
  }
}
export default App;

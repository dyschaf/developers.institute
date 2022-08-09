import React from "react";
class Event extends React.Component {
  constructor() {
    super();
  }

  alart = () => {
    alert("i was click");
    this.setState({ border: "white" });
  };
  handleKeyPress = (e) => {
    if (e.code === "Enter") {
      alert("Enter is pressed!");
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.alart}>clickme</button>
        <input type="text" onKeyPress={this.handleKeyPress}></input>
      </div>
    );
  }
}

export default Event;

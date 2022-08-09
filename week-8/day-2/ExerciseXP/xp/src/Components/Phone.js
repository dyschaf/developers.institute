import React from "react";
class Phone extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My Phone is {this.state.brand}</h1>
        <h3>
          its a {this.state.color} form {this.state.year}
        </h3>
        <input type="button" onClick={this.changeColor}></input>
      </div>
    );
  }
}

export default Phone;

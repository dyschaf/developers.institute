import React from "react";
class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      //   model: "",
      // };
    };
  }
  render() {
    console.log(this.props.model);
    return (
      <div>
        {this.props.cara.name} This car is {this.state.color}
        {this.props.cara.model}
      </div>
    );
  }
}

export default Car;

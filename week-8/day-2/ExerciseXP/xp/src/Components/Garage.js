import React from "react";
class Garage extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   color: "red",
    // //   model: "",
    // // };
  }
  render() {
    return <div>Who lives in my {this.props.size} Garage?</div>;
  }
}

export default Garage;

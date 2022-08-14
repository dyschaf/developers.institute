import data from "./Quotes";
import React from "react";

class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
    };
  }
  quote = () => {
    const randomNumber = Math.floor(Math.random() * 93 + 1);
    console.log(randomNumber);
    console.log(data[randomNumber]);
    // this.data[randomNumber];
    this.setState({
      quote: data[randomNumber].quote,
      author: data[randomNumber].author,
    });
  };

  render() {
    return (
      <section>
        <div>"{this.state.quote}"</div>
        <div>-{this.state.author}-</div>
        <button onClick={this.quote}>new quote</button>
      </section>
    );
  }
}
export default Section;

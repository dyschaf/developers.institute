import React from "react";
import data from "../add2.json";
const { SocialMedias, Experiences, Skills } = data;
class Example1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(data);
    return (
      <ul>
        {SocialMedias.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
}
export default Example1;

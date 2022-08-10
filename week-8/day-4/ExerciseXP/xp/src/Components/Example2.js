import React from "react";
import data from "../add2.json";
const { SocialMedias, Experiences, Skills } = data;
class Example2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(Skills[0].SkillSet[0]);
    return (
      <>
        {Skills.map((item, i, j, k) => {
          return (
            <>
              <h1 key={i}>{item[i].SkillSet[j][k].name}</h1>
              <ul>
                <li key={i}>{item[i].Experiences[i]}</li>
              </ul>
            </>
          );
        })}
      </>
    );
  }
}
export default Example2;

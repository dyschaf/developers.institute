import React from "react";
import data from "../add2.json";
const { SocialMedias, Experiences, Skills } = data;
class Example2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>hi</div>;
  }
}
console.log(data);
//     return (
//       <>
//         {Skills.map((item, i, j) => {
//           return (
//             <>
//               <h1 key={i}>{item.area}</h1>
//               <ul>
//                 <li key={i}>{item.SkillSet}</li>
//               </ul>
//             </>
//           );
//         })}
//       </>
//     );
//   }
// }
export default Example2;

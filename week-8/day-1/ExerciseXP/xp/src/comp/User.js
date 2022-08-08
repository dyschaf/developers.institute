const User = (props) => {
  return (
    <div>
      <h3>{props.firstname}</h3>
      <h3>{props.lastname}</h3>
    </div>
  );
};
export default User;
// const User = (props) => {
//     cosnt = { firstname, lastname } = props;
//     return (
//       <div>
//         <h3>{firstname}</h3>
//         <h3>{lastname}</h3>
//       </div>
//     );
//   };
//   export default User;

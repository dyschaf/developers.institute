const UserFavoriteColors = (props) => {
  return (
    <div>
      <ul>
        {props.map((a) => {
          <li>{a}</li>;
        })}
      </ul>
    </div>
  );
};
export default UserFavoriteColors;

import { NavLink, useLocation, Link } from "react-router-dom";

const Links = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname === "/shop") {
    throw new Error();
  }
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Profile"> Profile </Link>
      <Link to="/shop"> Shop </Link>
    </nav>
  );
};
export default Links;

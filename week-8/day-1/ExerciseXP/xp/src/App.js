import logo from "./logo.svg";
import "./App.css";
import User from "./comp/User";
import UserFavoriteColors from "./comp/UserFavoriteColors";
const fav_animals = ["Horse", "Turtle", "Elephant", "Monkey"];
function App() {
  return (
    <div className="App">
      <div>
        <User firstname="Bob" lastname="Dylan"></User>
      </div>
      {/* <div>
        <UserFavoriteColors
          fav_animals={["Horse", "Turtle", "Elephant", "Monkey"]}
        ></UserFavoriteColors>
      </div> */}
    </div>
  );
}

export default App;

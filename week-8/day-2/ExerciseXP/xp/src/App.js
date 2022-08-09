// import logo from "./logo.svg";
import Car from "./Components/Car";
import Garage from "./Components/Garage";
import Phone from "./Components/Phone";
import Event from "./Components/Event";
import "./App.css";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div>
      <Car cara={carinfo} />
      <Garage size="small" />
      <Event />
      <Phone />
    </div>
  );
}

export default App;

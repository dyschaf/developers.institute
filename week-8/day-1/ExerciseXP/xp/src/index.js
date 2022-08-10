import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

const Exercise1 = React.createElement("h1", {}, "I do not use JSX!");
ReactDOM.render(Exercise1, document.getElementById("root"));
const sum = 5 + 5;
const Exercise2 = (
  <div>
    <h1>I Love JSX!</h1>
    <p>React is {sum} times better with JSX</p>
  </div>
);
ReactDOM.render(Exercise2, document.getElementById("root"));
const user = {
  first_name: "Bob",
  last_name: "Dylan",
  fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

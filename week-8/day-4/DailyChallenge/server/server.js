const express = require("express");
const core = require("cors");
const { default: App } = require("../dc/src/App");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(5000, () => {
  console.log("listening to port 5000");
});
app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});
app.post("/api/hello", (req, res) => {
  const { text } = req.body;
  res.send(`I receveived you post request. this is what you sent me ${text}`);
});

const express = require("express");
const app = express();
const aboutMe = { hobby: "playball" };
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/aboutMe/:bobby", function (req, res) {
  res.send("Hello world");
});
app.get("/pic/", function (req, res) {
  res.sendfile(__dirname + "/2♠.png");
});
app.use(express.static(__dirname + "/public"));
app.get("/form/", function (req, res) {
  //   res.send();
});
app.post("/formData/", function (req, res) {
  const { email, message } = req.body;
  res.send(`email from ${email}: ${message}`);
});
app.listen(3000);

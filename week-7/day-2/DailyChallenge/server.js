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
app.use(express.static(__dirname + "public"));
app.get("/form/", function (req, res) {
  res.send(`<form action="/formData" method="post">
        <label for="email">email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="message">message</label>
        <input type="text" id="message" name="message"><br><br>
        <input type="submit" value="Submit">
      </form>`);
});
app.post("/formData/", function (req, res) {
  const { email, message } = req.body;
  res.send(`email from ${email}: ${message}`);
});
app.listen(3000);

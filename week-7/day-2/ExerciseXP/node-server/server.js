const express = require("express");
const app = express();
const user = {
  firstname: "John",
  lastname: "Doe",
};
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send(JSON.stringify(user));
});

app.listen(3001);

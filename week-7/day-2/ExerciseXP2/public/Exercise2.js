const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const user = {
  id: "1245",
};
app.use(express.static(__dirname + "public"));
app.get("/:id", (req, res) => {
  res.json(user);
  //   res.end(user);
  console.log(user);
});

app.listen(3002);

const express = require("express");
const app = express();
app.use("/", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

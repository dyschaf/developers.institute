const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgress",
    password: "root",
    database: "user",
  },
});
app.use("/", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
// app.get("/userlogin", (req, res) => {
//   console.log(req.query);
//   res.json({ msg: "OK GOOD", status: 200 });
// });
app.post("/register", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  saveUser({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    hashPassword,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.json({ msg: "username exist" });
    });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  getUser(req.body.email)
    .then(async (data) => {
      console.log(data);
      if (data.length == 0) {
        res.json({ msg: "Email not registered" });
      } else {
        console.log(data[0].password);
        const match = await bcrypt.compare(req.body.password, data[0].password);
        if (!match) {
          res.json({ msg: "Wrong Password" });
        } else {
          res.json({ msg: `Hi ${req.body.username} welcome back` });
        }
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

function saveUser(firstName, lastName, email, username, password) {
  return db("user")
    .insert({ firstName, lastName, email, username, password })
    .returning("*");
}
function getUser(email) {
  return db("user").select("id", "email", "password").where({ email: email });
}

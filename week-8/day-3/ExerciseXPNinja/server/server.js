const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "ec2-34-231-177-125.compute-1.amazonaws.com",
    port: 5432,
    user: "momjliqegvhsfx",
    password: "170c4585a04f6f9459354a0e30489236c168b76ffd23fc2950865238030fe327",
    database: "d32edgogguu9cc",
  },
});
app.use("/", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
Host
Database
d32edgogguu9cc
User
momjliqegvhsfx
Port
5432
Password
170c4585a04f6f9459354a0e30489236c168b76ffd23fc2950865238030fe327
Joshua Bolchover10:20 AM

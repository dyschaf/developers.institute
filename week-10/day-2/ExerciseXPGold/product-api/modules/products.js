const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config();
const db = knex({
  client: "pg",
  connection: {
    host: process.evn.DB_HOST,
    port: process.evn.DB_PORT,
    user: process.evn.DB_USER,
    password: process.evn.DB_PASS,
    database: process.evn.DB_NAME,
    ssl: { rejectUnauthorized: false },
  },
});
const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};
const getProduct = (product_id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};
module.exports = {
  getAllProducts,
  getProduct,
};

const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config();
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  },
});
const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};
const getProduct = (product_id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};
const searchProduct = (query) => {
  return db("products").select("id", "name", "price").whereILike(query);
};
module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
};

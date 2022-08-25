const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const product_router = require("./route/products.js");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT || 8080, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
app.get(`/api/products`, product_router);

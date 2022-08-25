const express = require("express");
const router = express.Router();
const {
  _searchProduct,
  _getAllProducts,
  _getProduct,
} = require("../controllers/products.js");

router.get("/search", _searchProduct);
router.get("/:id", _getProduct);
router.get("/", _getAllProducts);
module.exports = router;

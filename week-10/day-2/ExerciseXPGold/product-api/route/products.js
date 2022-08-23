const express = require("express");
const router = express.Router();
const { _getAllProducts, _getProduct } = require("../controllers/products.js");

router.get("/api/products", _getAllProducts);
router.get("/:id", _getProduct);
module.exports = router;

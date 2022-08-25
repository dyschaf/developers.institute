const { searchProduct, getAllProducts } = require("../modules/products.js");
const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
const _getProduct = (req, res) => {
  getProduct(req.prarams.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
const _searchProduct = (req, res) => {
  searchProduct(req.query.q)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
module.exports = {
  _searchProduct,
  _getProduct,
  _getAllProducts,
};

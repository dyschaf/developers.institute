const { getProduct, getAllProducts } = require("../modules/products.js");
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
module.exports = {
  _getProduct,
  _getAllProducts,
};

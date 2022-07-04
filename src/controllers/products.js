module.exports = {
  productDetail: (req, res) => {
    return res.render("products/productDetail", {
      title: "Product Detail",
      style: "productDetail"
    });
  },
};

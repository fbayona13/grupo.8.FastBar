module.exports = {
  productDetail: (req, res) => {
    return res.render("products/productDetail", {
      title: "Product Detail",
      style: "productDetail"
    });
  },

  newProduct: (req, res) => {
    return res.render('products/newProduct', {
      title: 'New Product',
      style: 'newProduct'
    });
  },

  editProduct: (req, res) => {
    return res.render('products/editProduct', {
      title: 'Edit Product',
      style: 'editProduct'
    });
  }
};

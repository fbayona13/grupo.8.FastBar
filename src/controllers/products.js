module.exports = {
  detail: (req, res) => {
    return res.render("products/detail", {
      title: "Product Detail",
      style: "productDetail",
    });
  },

  newie: (req, res) => {
    return res.render("products/new", {
      title: "New Product",
      style: "newProduct",
    });
  },

  edit: (req, res) => {
    return res.render("products/edit", {
      title: "Edit Product",
      style: "editProduct",
    });
  },
};

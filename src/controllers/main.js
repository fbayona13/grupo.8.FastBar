const { product } = require("../database/models/index");

module.exports = {
  home: async (req, res) => {
    return res.render("home", {
      // head.ejs
      title: "Home",
      style: "home",

      allProducts: await product.findAll(),
      favoritesProducts: await product.findAll().filter((e) => e.favorites == true),
      topSelectionProducts: await product.findAll().filter((e) => e.topSelection == true),
    });
  },

  cart: async (req, res) => {
    return res.render("cart", {
      // head.ejs
      title: "Cart",
      style: "cart",
    });
  },
};

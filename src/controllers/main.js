const { indexProducts } = require("../models/products.model");

module.exports = {
  home: (req, res) => {
    return res.render("home", {
      // head.ejs
      title: "Home",
      style: "home",

      allProducts: indexProducts(),
      favoritesProducts: indexProducts().filter((e) => e.favorites == true),
      topSelectionProducts: indexProducts().filter((e) => e.topSelection == true),
    });
  },

  cart: (req, res) => {
    return res.render("cart", {
      // head.ejs
      title: "Cart",
      style: "cart",
    });
  },
};

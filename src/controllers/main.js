const { resolve } = require("path");

module.exports = {
  home: (req, res) => {
    return res.render('home', {
      title: "Home",
      style: "home"
    });
  },

  cart: (req, res) => {
    return res.render('cart', {
        title: 'Cart',
        style: 'cart'
    });
  }
};

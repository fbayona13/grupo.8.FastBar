const { resolve } = require("path");

module.exports = {
  home: (req, res) => {
    return res.render('home.ejs', {
      title: "Home",
    });
  },

  cart: (req, res) => {
    return res.render('cart.ejs', {
        title: 'Cart',
    });
  }
};

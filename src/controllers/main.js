const { product } = require("../database/models/index");

module.exports = {
    home: async (req, res) => {
        return res.render("home", {
            // head.ejs
            title: "Home",
            style: "home",

            allProducts: await product.findAll({
                include: {
                    all: true,
                },
            }),
            favoritesProducts: await product.findAll({
                include: {
                    all: true,
                },
                where: {
                    favorites: true,
                },
            }),
            topSelectionProducts: await product.findAll({
                include: {
                    all: true,
                },
                where: {
                    topSelection: true,
                },
            }),
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

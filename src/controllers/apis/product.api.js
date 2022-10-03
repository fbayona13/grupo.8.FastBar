const { product, image } = require("../../database/models");
const { Op, where } = require("sequelize");

const productApi = {
    all: async (req, res) => {
        try {
            let page = 0;
            if (req.query.page) {
                page = parseInt(req.query.page);
            }

            let products = await product.findAll({
                include: {
                    all: true,
                },
                limit: 5,
                offset: page,
            });

            if (!products) {
                return res.status(404).json("404: Algo salio mal");
            } else {
                return res
                    .status(200)
                    .json({
                        products,
                        next: products.length > 0 ? page + 5 : null,
                        prev: products.length < 0 ? null : page - 5,
                    });
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    favorites: async (req, res) => {
        try {
            let filterFavs = {};
            if (req.query.favorites == true) {
                filterFavs.favorites = {
                    [Op.eq]: req.query.favorites,
                };
            }

            let products = await product.findAll({
                include: {
                    all: true,
                },
                where: filterFavs,
            });

            if (!products) {
                return res.status(404).json("404: Algo salio mal");
            } else {
                return res.status(200).json(products);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    topSelection: async (req, res) => {
        try {
            let filterTopSel = {};
            if (req.query.topSelection == true) {
                filterTopSel.topSelection = {
                    [Op.eq]: req.query.topSelection,
                };
            }

            let products = await product.findAll({
                include: {
                    all: true,
                },
                where: filterTopSel,
            });

            if (!products) {
                return res.status(404).json("404: Algo salio mal");
            } else {
                return res.status(200).json(products);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    one: async (req, res) => {
        try {
            let oneProduct = await product.findByPk(req.params.id, {
                include: {
                    all: true,
                },
            });

            if (!oneProduct) {
                return res.status(404).json("404: No existe el product");
            } else {
                return res.status(200).json(oneProduct);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    process: async (req, res) => {
        try {
            let newProduct = await product.create(req.body);

            if (!newProduct) {
                return res.status(404).json("404: No se crea el product");
            } else {
                return res.status(200).json(newProduct);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    terminator: async (req, res) => {
        try {
            let destroyProduct = await product.destroy({
                where: {
                    id: req.params.id,
                },
            });

            if (!destroyProduct) {
                return res.status(404).json("404: No se elimina el product");
            } else {
                return res.status(200).json(destroyProduct);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },
};

module.exports = productApi;

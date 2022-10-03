const { user, image } = require("../../database/models");
const { Op } = require("sequelize");
const { hashSync } = require("bcryptjs");

const userApi = {
    all: async (req, res) => {
        try {
            let users = await user.findAll({
                include: {
                    all: true,
                },
            });

            if (!users) {
                return res.status(404).json("404: Algo salio mal");
            } else {
                return res.status(200).json(users);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    one: async (req, res) => {
        try {
            let oneUser = await user.findByPk(req.params.id, {
                include: {
                    all: true,
                },
            });

            if (!oneUser) {
                return res.status(404).json("404: No se encontro el user");
            } else {
                return res.status(200).json(oneUser);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    process: async (req, res) => {
        try {
            req.body.password = hashSync(req.body.password, 10);

            let newUser = await user.create(req.body);

            if (!newUser) {
                return res.status(404).json("404: No se creo el user");
            } else {
                return res.status(200).json(newUser);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },

    terminator: async (req, res) => {
        try {
            let destroyUser = await user.destroy({
                where: {
                    id: req.params.id,
                },
            });

            if (!destroyUser) {
                return res.status(404).json("404: No se elimino el user");
            } else {
                return res.status(200).json(destroyUser);
            }
        } catch (error) {
            return res.status(500).json("500: " + error);
        }
    },
};

module.exports = userApi;

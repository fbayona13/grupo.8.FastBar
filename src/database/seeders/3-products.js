"use strict";

const { indexProducts } = require("../../models/products.model");
const { indexUsers } = require("../../models/users.model");

module.exports = {
    async up(queryInterface, Sequelize) {
        let products = indexProducts().map((product, index) => {
            return Object({
                ...product,
                image: indexUsers().length + index + 1,
                category: 1,
            });
        });
        await queryInterface.bulkInsert("products", products, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products", null, {});
    },
};

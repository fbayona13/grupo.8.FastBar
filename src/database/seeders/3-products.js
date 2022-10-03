"use strict";

const { indexProducts } = require("../../models/products.model");

module.exports = {
    async up(queryInterface, Sequelize) {
        let products = indexProducts().map((product) => {
            return Object({ ...product });
        });
        await queryInterface.bulkInsert("products", products, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products", null, {});
    },
};

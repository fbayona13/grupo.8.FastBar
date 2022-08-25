"use strict";

const { indexProducts } = require("../../models/products.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    let products = indexProducts().map((product) =>
      Object({ ...product, category: null, image: null })
    );
    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};

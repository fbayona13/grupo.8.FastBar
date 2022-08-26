"use strict";

const { indexProducts } = require("../../models/products.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    let categories = indexProducts().map((product) => {
      return Object({ category: product.category });
    });
    await queryInterface.bulkInsert("categories", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};

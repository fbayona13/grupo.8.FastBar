"use strict";

const { indexProducts } = require("../../models/products.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    let images = indexProducts().map((product) => {
      return Object({ image: product.image });
    });
    await queryInterface.bulkInsert("images", images, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};

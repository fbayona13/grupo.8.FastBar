"use strict";

const { indexProducts } = require("../../models/products.model");

const { indexUsers } = require("../../models/users.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    let imagesProduct = indexProducts().map((product) => {
      return Object({ image: product.image });
    });
    let imagesUsers = indexUsers().map((user) => {
      return Object({ image: user.image });
    });
    let images = [...imagesUsers, ...imagesProduct];

    await queryInterface.bulkInsert("images", images, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};

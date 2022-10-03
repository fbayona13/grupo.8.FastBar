"use strict";

const { indexProducts } = require("../../models/products.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    //como no tengo un json con categorias, cargamos las que estan en el modelo json de product.
    let categories = indexProducts()
        .map((element) => element.category)
        .filter((element, index, array) => {
            return array.indexOf(element) === index;
        })
        .map((category) => {
            return Object({ category: category });
        });

    await queryInterface.bulkInsert("categories", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};

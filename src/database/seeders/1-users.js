"use strict";

const { indexUsers } = require("../../models/users.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    //Momentaneamente lo hacemos asi porque la foreign key de imagenes es un numero, mientras que en el json hay texto
    let users = indexUsers().map((user, index) => Object({ ...user, image: index + 1 }));
    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

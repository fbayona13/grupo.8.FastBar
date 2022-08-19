const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const { hashSync } = require("bcryptjs");

const userModel = {
  indexUsers: function () {
    let file = resolve(__dirname, "../data", "users.data.json");
    let data = readFileSync(file);

    return JSON.parse(data);
  },

  oneUser: function (id) {
    let file = resolve(__dirname, "../data", "users.data.json");
    let data = readFileSync(file);
    let users = JSON.parse(data);

    return users.find((user) => user.id == id);
  },

  create: function (data) {
    let file = resolve(__dirname, "../data", "users.data.json");
    let info = readFileSync(file);
    let users = JSON.parse(info);
    let lastUser = users[users.length - 1];
    let credencial = 1;

    return Object({
      id: users.length == 0 ? 1 : lastUser.id + 1,
      name: data.campoNombreApellido,
      //Admins --> 0, Sellers --> 1, Users --> 2
      credentials: credencial,
      level: 1,
      email: data.campoEmail,
      description: data.userDescription,
      image: data.image,
      password: hashSync(data.campoContrasena, 10),

      isAdmin: data.campoEmail.includes("@fastbar.com"), //credencial == 0,
      isSeller: credencial == 1,
      isUser: credencial == 2,
    });
  },

  write: function (data) {
    let file = resolve(__dirname, "../data", "users.data.json");
    let info = JSON.stringify(data, null, 2);

    return writeFileSync(file, info);
  },
};

module.exports = userModel;

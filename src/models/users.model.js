const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const userModel = {
  indexUsers: function () {
    let file = resolve(__dirname, "../data", "users.data.json");
    let data = readFileSync(file);

    return JSON.parse(data);
  },

  oneUser: function (id) {

    let file = resolve (__dirname, "../data", "users.data.json");
    let data = readFileSync(file);
    let users = JSON.parse(data);

    return users.find((user) => user.id == id);
  },

  create: function (data) {
    let file = resolve(__dirname, "../data", "users.data.json");
    let info = readFileSync(file);
    let users = JSON.parse(info);
    let lastUser = users[users.length - 1];

    return Object({
      id: users.length == 0 ? 1 : lastUser.id + 1,
      name: data.campoNombreApellido,
      credentials: 0,
      level: 1,
      email: data.campoEmail,
      description: data.userDescription,
      image:data.image,
      password:data.campoContrasena,
      
    });
  },

  write: function (data) {
    let file = resolve(__dirname, "../data", "users.data.json");
    let info = JSON.stringify(data, null, 2);

    return writeFileSync(file, info);
  },
};

module.exports = userModel;

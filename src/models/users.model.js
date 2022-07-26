const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const userModel = {
  indexUsers: function () {
    let file = resolve(__dirname, "../data", "users.data.json");
    let data = readFileSync(file);

    return JSON.parse(data);
  },

  oneUser: function (id) {},
};

module.exports = userModel;

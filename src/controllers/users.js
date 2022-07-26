const { indexUsers } = require("../models/users.model");

module.exports = {
  //Va a mostrar una lista con todos los usuarios
  index: (req, res) => {
    return res.render("user/index", {
      // head.ejs
      title: "Index",
      style: "index",

      users: indexUsers(),
    });
  },

  login: (req, res) => {
    return res.render("user/login", {
      // head.ejs
      title: "Login",
      style: "login",
    });
  },

  register: (req, res) => {
    return res.render("user/register", {
      // head.ejs
      title: "Register",
      style: "register",
    });
  },
};

const { indexUsers, oneUser, create, write } = require("../models/users.model");

const { validationResult } = require("express-validator");

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

  //Para crear y guardar nuevo usuario en la DB
  register: (req, res) => {
    return res.render("user/register", {
      // head.ejs
      title: "Register",
      style: "register",
    });
  },

  //
  process: (req, res) => {
    let validations = validationResult(req);
    let { errors } = validations;
    if (errors && errors.length > 0) {
      return res.render("user/register", {
        title: "Register",
        style: "register",
        oldData: req.body,
        errors: validations.mapped(),
      });
    }

    req.body.image = req.files[0].filename;
    let newUser = create(req.body);
    let users = indexUsers();
    users.push(newUser);
    write(users);

    return res.redirect('/user/login?msg"El registro fue exitoso"');
  },

  save: (req, res) => {
    req.body.image = req.files[0].filename;
    let newUser = create(req.body);
    let users = indexUsers();
    users.push(newUser);
    write(users);

    return res.redirect("/user/login");
  },

  login: (req, res) => {
    return res.render("user/login", {
      // head.ejs
      title: "Login",
      style: "login",
    });
  },

  //Para mostrar el detalle de cada producto
  detail: (req, res) => {
    let user = oneUser(parseInt(req.params.id));
    if (!user) {
      return res.redirect("/user/");
    }

    return res.render("user/detail", {
      // head.ejs
      title: "User Detail",
      style: "userDetail",

      user: user,
    });
  },

  //Para editar y modificar usuarios de la DB
  edit: (req, res) => {
    let user = oneUser(parseInt(req.params.id));
    if (!user) {
      return res.redirect("/users/");
    }

    return res.render("users/edit", {
      // head.ejs
      title: "Edit User",
      style: "editUser",

      user: user,
    });
  },

  modify: (req, res) => {
    let user = oneUser(parseInt(req.params.id));
    let users = indexUsers();
    let userModified = users.map((p) => {
      if (p.id == product.id) {
        p.userName = req.body.userName;
        p.image =
          req.files && req.files.length > 0 ? req.files[0].filename : p.image;
        p.description = req.body.description;
        p.email = req.body.email;
        p.password = req.body.password;
        p.level = req.body.level;
        p.credentials = req.body.credentials;
        //Revisar el p.credentials, p.level, p.email y p.password
      }

      return p;
    });

    write(userModified);

    return res.redirect("/user" + user.id);
  },

  //Para eliminar un producto de la DB
  destroy: (req, res) => {
    let users = indexUsers();
    let user = oneUser(parseInt(req.params.id));
    if (!user) {
      return res.redirect("/users/");
    }

    let userDeleted = users.filter((p) => p.id !== req.params.id);
    write(userDeleted);

    return res.redirect("/login/");
  },

  access: (req, res) => {
    let validations = validationResult(req);
    let { errors } = validations;
    // if (errors && errors.length > 0) {
    //   return res.render("user/login", {
    //     title: "Login",
    //     style: "login",
    //     oldData: req.body,
    //     errors: validations.mapped(),
    //   });
    //}

    return res.redirect('/');
  },
};

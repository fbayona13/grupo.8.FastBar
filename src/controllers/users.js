//const { indexUsers, oneUser, create, write } = require("../models/users.model");
const { user } = require("../database/models/index");
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");

module.exports = {
  //Va a mostrar una lista con todos los usuarios
  index: async (req, res) => {
    return res.render("user/index", {
      // head.ejs
      title: "Index",
      style: "index",

      users: await user.findAll(),
    });
  },

  //Para crear y guardar nuevo usuario en la DB
  register: async (req, res) => {
    return res.render("user/register", {
      // head.ejs
      title: "Register",
      style: "register",
    });
  },

  //
  process: async (req, res) => {
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

    // HASH DE LA CONTRASEÑA
    req.body.password = hashSync(req.body.password, 10);

    //VERIFICACION DE SI ES ADMIN
    req.body.credentials = String(req.body.email)
      .toLowerCase()
      .includes("@fastbar.com")
      ? 0
      : 2;

    //CREA EL USUARIO EN LA BD
    await user.create(req.body);

    // VERSION MODELO DE PRUEBA
    // req.body.image = req.files[0].filename;
    // let newUser = create(req.body);
    // let users = indexUsers();
    // users.push(newUser);
    // write(users);

    return res.redirect('/user/login?msg"El registro fue exitoso"');
  },

  save: async (req, res) => {
    await user.create(req.body);
    // req.body.image = req.files[0].filename;
    // let newUser = create(req.body);
    // let users = indexUsers();
    // users.push(newUser);
    // write(users);

    return res.redirect("/user/login");
  },

  login: async (req, res) => {
    return res.render("user/login", {
      // head.ejs
      title: "Login",
      style: "login",
    });
  },

  //Para mostrar el detalle de cada usuario
  detail: async (req, res) => {
    let oneUser = await user.findByPk(parseInt(req.params.id));
    if (!oneUser) {
      return res.redirect("/user/");
    }

    return res.render("user/detail", {
      // head.ejs
      title: "user Detail",
      style: "userDetail",

      user: oneUser,
    });
  },

  //Para editar y modificar usuarios de la DB
  edit: async (req, res) => {
    let oneUser = await user.findByPk(parseInt(req.params.id));
    if (!oneUser) {
      return res.redirect("/users/");
    }

    return res.render("users/edit", {
      // head.ejs
      title: "Edit user",
      style: "editUser",

      user: oneUser,
    });
  },

  modify: async (req, res) => {
    let oneUser = await user.findByPk(parseInt(req.params.id));
    if (!oneUser) {
      return res.redirect("/users/");
    }
    if (oneUser) {
      user.update({
        name: req.body.userName,
        image: req.body.image,
        email: req.body.email,
        password: req.body.password,
        //Revisar el p.credentials, p.level, p.email y p.password
      });
    }
    await user.save();

    // let users = await user.findAll();
    // let userModified = users.map((p) => {
    //   if (p.id == product.id) {
    // p.userName = req.body.userName;
    // p.image =
    //   req.files && req.files.length > 0 ? req.files[0].filename : p.image;
    // p.description = req.body.description;
    // p.email = req.body.email;
    // p.password = req.body.password;
    // p.level = req.body.level;
    // p.credentials = req.body.credentials;
    // //Revisar el p.credentials, p.level, p.email y p.password
    //   }

    //   return p;
    // });

    // write(userModified);

    return res.redirect("/user" + oneUser.id);
  },

  //Para eliminar un usuario de la DB
  destroy: async (req, res) => {
    //let users = await user.findAll();
    let oneUser = users.findByPk(parseInt(req.params.id));
    if (!oneUser) {
      return res.redirect("/users/");
    }
    users.destroy();

    // let userDeleted = users.filter((p) => p.id !== req.params.id);
    // write(userDeleted);

    return res.redirect("/login/");
  },

  //Para validar (Validation) y acceder(Session) a la cuenta del usuario
  access: async (req, res) => {
    let validations = validationResult(req);
    let { errors } = validations;

    // NOS SALTA UN MSG, QUE NO PODEMOS VER EN PANTALLA
    // if (errors && errors.length > 0) {
    //   return res.render("user/login", {
    //     title: "Login",
    //     style: "login",
    //     oldData: req.body,
    //     errors: validations.mapped(),
    //   });
    // }

    //let users = indexUsers();
    //let users = await user.findAll();
    let oneUser = await user.findOne({ where: { email: req.body.email } });
    //Aca se estaria loggeando el user
    req.session.user = oneUser;

    return res.redirect("/");
  },

  //Para salir de la Session del usuario
  logout: async (req, res) => {
    delete req.session.user;

    return res.redirect("/");
  },
};

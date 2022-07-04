module.exports = {
  login: (req, res) => {
    return res.render("login.ejs", {
      title: "Login",
    });
  },

  register: (req, res) => {
    return res.render("register.ejs", {
      title: "Register",
    });
  },
};

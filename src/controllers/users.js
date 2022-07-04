module.exports = {
  login: (req, res) => {
    return res.render("user/login", {
      title: "Login",
      style: "login"
    });
  },

  register: (req, res) => {
    return res.render("user/register", {
      title: "Register",
      style: "register"
    });
  },
};

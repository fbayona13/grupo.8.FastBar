const isLogged = (req, res, next) => {
  if (req.session && req.session.user) {

    return next();
  }

  return res.redirect("/user/login");
};

module.exports = isLogged;
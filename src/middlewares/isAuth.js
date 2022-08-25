const isAuth = (credential) => (req, res, next) => {
  if (credential.includes(req.session.user.credentials)) {
    return next();
  }

  return res.redirect("/");
};

module.exports = isAuth;

const isAdmin = (req, res, next) => {
  if (!req.session.user.isAdmin) {
    return res.redirect("/");
  }

  return next();
};

const isSeller = (req, res, next) => {
  if (!req.session.user.isSeller) {
    return res.redirect("/");
  }

  return next();
};

const isUser = (req, res, next) => {
  if (!req.session.user.isUser) {
    return res.redirect("/");
  }

  return next();
};

(module.exports = isAdmin), isSeller, isUser;

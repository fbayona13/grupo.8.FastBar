const User = require("../database/models/index");

const middleware = async (req, res, next) => {
    let user = null;

    //FALTA IMPLEMENTAR LA COOKIE
    // if (req.cookies && req.cookies.email) {
    //     let users = await User.findAll();
    //     user = users.find((u) => u.email === req.cookies.email);
    //     req.session.user = user;
    // }

    if (req.session && req.session.user) {
        user = req.session.user;
    }
    
    res.locals.user = user;

    next();
};

module.exports = middleware;
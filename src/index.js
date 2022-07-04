const express = require("express");
const path = require("path");
const app = express();
const {port, callback} = require ('./modules/port');
app.listen(port, callback());
app.use (require ('./modules/public'));

//configuracion EJS
app.set ('views', path.resolve (__dirname, 'views'));
app.set ('views engines', 'ejs')

//ruta para Home, Cart
app.use (require ('./routes/main.routes'));
//ruta para productDetail, Create, Edit
app.use (require ('./routes/products.routes'));
//ruta para Register, Login
app.use (require ('./routes/user.routes'))
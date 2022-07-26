const express = require("express");
const app = express();
const { resolve } = require("path");
const method = require("method-override");
const public = require("./modules/public");
const { port, callback } = require("./modules/port");
const uploads = require("./modules/uploads");

app.listen(port, callback());
app.use(public);
app.use(uploads);

//configuracion EJS
app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Para poder usar method-override con los metodos PUT / DELETE
app.use(express.urlencoded({ extended: false })); // req.body / req.query
app.use(express.json());
app.use(method("_method")); // ?_method=PUT / DELETE

//ruta para Home, Cart
app.use("/", require("./routes/main.routes"));
//ruta para Detail, Create, Edit, Index
app.use("/products", require("./routes/products.routes"));
//ruta para Register, Login, Index
app.use("/user", require("./routes/user.routes"));

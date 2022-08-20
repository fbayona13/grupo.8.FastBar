const multer = require("multer");
const storage = require("../modules/storage");
const register = require("../validations/register");
const upload = multer({ storage: storage("userImages") }); //Posible error en esta linea

module.exports = [upload.any(), register];

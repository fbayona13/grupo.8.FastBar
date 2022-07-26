const { extname } = require("path");
const { diskStorage } = require("multer");

//El destino de donde se va a guardar el archivo
let destination = (folder) => (req, file, callback) =>
  callback(null, "./uploads/" + folder);

//Con que nombre vamos a guardar el archivo
let filename = (req, file, callback) => {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  return callback(
    null,
    file.filename + "-" + uniqueSuffix + extname(file.originalname)
  );
};

//diskStorage es una funcion de Multer que nos permite guardar los archivos en el disco
const storage = (folder) => {
  diskStorage({
    destination: destination(folder),
    filename: filename,
  });
};

module.exports = storage;

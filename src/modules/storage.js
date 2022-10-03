const { extname } = require("path");
const { diskStorage } = require("multer");
const { randomInt } = require("crypto");

let destination = function (folder) {
    return (req, file, callback) => callback(null, "./uploads/" + folder);
};

let filename = (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + randomInt(1, 248);
    callback(
        null,
        file.originalname + "-" + uniqueSuffix + extname(file.originalname)
    );
};

const storage = function (folder) {
    return diskStorage({
        destination: destination(folder),
        filename: filename,
    });
};

module.exports = storage;

const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const productModel = {
  indexProducts: function () {
    let file = resolve(__dirname, "../data", "products.data.json");
    let data = readFileSync(file);

    return JSON.parse(data);
  },

  oneProduct: function (id) {
    let file = resolve(__dirname, "../data", "products.data.json");
    let data = readFileSync(file);
    let products = JSON.parse(data);

    return products.find((product) => product.id == id);
  },

  create: function (data) {
    let file = resolve(__dirname, "../data", "products.data.json");
    let info = readFileSync(file);
    let products = JSON.parse(info);
    let lastProduct = products[products.length - 1];

    return Object({
      id: products.length == 0 ? 1 : lastProduct.id + 1,
      state: true,
      topSelection: false,
      favorites: false,
      discount: 0,
      drinkName: data.drinkName,
      price: parseInt(data.precio),
      description: data.ingredientes,
      image: data.image,
      category: data.categorias,
      flavorProfile: data.sabor,
      creator: "admin", //-->Aca tendria que ir el nombre del usuario
      history: data.historia,
    });
  },

  write: function (data) {
    let file = resolve(__dirname, "../data", "products.data.json");
    let info = JSON.stringify(data, null, 2);

    return writeFileSync(file, info);
  },
};

module.exports = productModel;

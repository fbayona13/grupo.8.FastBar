const {
  indexProducts,
  oneProduct,
  create,
  write,
} = require("../models/products.model");

module.exports = {
  // El index va a ser nuestra vista con lista completa de productos
  index: (req, res) => {
    return res.render("products/index", {
      // head.ejs
      title: "Index",
      style: "index",

      allProducts: indexProducts(),
    });
  },

  //Para la barra de busqueda del header.ejs
  search: (req, res) => {
    let products = indexProducts();
    if (req.query && req.query.searchBar) {
      products = products.filter(
        (product) =>
          product.drinkName
            .toLowerCase()
            .indexOf(req.query.searchBar.toLowerCase()) > -1
      );
    } else if (req.query && req.query.searchBar) {
      products = products.filter(
        (product) =>
          product.creator
            .toLowerCase()
            .indexOf(req.query.searchBar.toLowerCase()) > -1
      );
    } else if (req.query && req.query.searchBar) {
      products = products.filter(
        (product) =>
          product.category
            .toLowerCase()
            .indexOf(req.query.searchBar.toLowerCase()) > -1
      );
    }

    return res.render("products/search", {
      // head.ejs
      title: "Search",
      style: "search",

      searchProduct: products,
    });
  },

  //Para mostrar el detalle de cada producto
  detail: (req, res) => {
    let product = oneProduct(parseInt(req.params.id));
    if (!product) {
      return res.redirect("/products/");
    }

    return res.render("products/detail", {
      // head.ejs
      title: "Product Detail",
      style: "productDetail",

      product: product,
    });
  },

  //Para crear y guardar nuevos productos en DB
  newie: (req, res) => {
    return res.render("products/new", {
      // head.ejs
      title: "New Product",
      style: "newProduct",
    });
  },

  save: (req, res) => {
    req.body.image = req.files[0].filename;
    let newProduct = create(req.body);
    let products = indexProducts();
    products.push(newProduct);
    write(products);

    return res.redirect("/products/");
  },

  //Para editar y modificar productos de la DB
  edit: (req, res) => {
    let product = oneProduct(parseInt(req.params.id));
    if (!product) {
      return res.redirect("/products/");
    }

    return res.render("products/edit", {
      // head.ejs
      title: "Edit Product",
      style: "editProduct",

      product: product,
    });
  },

  modify: (req, res) => {
    let product = oneProduct(parseInt(req.params.id));
    let products = indexProducts();
    let productModified = products.map((p) => {
      if (p.id == product.id) {
        p.drinkName = req.body.drinkName;
        p.price = parseInt(req.body.price);
        p.image =
          req.files && req.files.length > 0 ? req.files[0].filename : p.image;
        p.description = req.body.description;
        p.flavorProfile = req.body.flavorProfile;
        p.history = req.body.history;
      }

      return p;
    });
    write(productModified);

    return res.redirect("/products/detail" + product.id);
  },

  //Para eliminar un producto de la DB
  destroy: (req, res) => {
    let products = indexProducts();
    let product = oneProduct(parseInt(req.params.id));
    if (!product) {
      return res.redirect("/products/");
    }

    let productDeleted = products.filter((p) => p.id !== req.params.id);
    write(productDeleted);

    return res.redirect("/products/");
  },
};

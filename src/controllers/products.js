// const {
//   Product.findAll,
//   Product.findByPk,
//   create,
//   write,
// } = require("../models/products.model");

const { product, image, category } = require("../database/models/index");
const { Op } = require("sequelize");

module.exports = {
    // El index va a ser nuestra vista con lista completa de productos
    index: async (req, res) => {
        return res.render("products/index", {
            // head.ejs
            title: "Index",
            style: "index",

            allProducts: await product.findAll({
                include: {
                    all: true,
                },
            }),
        });
    },

    //Para la barra de busqueda del header.ejs
    search: async (req, res) => {
        let products = await product.findAll({
            where: {
                [Op.or]: [
                    { drinkName: req.query.searchBar.toLowerCase() },
                    { creator: req.query.searchBar.toLowerCase() },
                    { category: req.query.searchBar.toLowerCase() },
                ],
            },
        });

        // if (req.query && req.query.searchBar) {
        //   products = products.filter(
        //     (product) =>
        //       product.drinkName
        //         .toLowerCase()
        //         .indexOf(req.query.searchBar.toLowerCase()) > -1
        //   );
        // } else if (req.query && req.query.searchBar) {
        //   products = products.filter(
        //     (product) =>
        //       product.creator
        //         .toLowerCase()
        //         .indexOf(req.query.searchBar.toLowerCase()) > -1
        //   );
        // } else if (req.query && req.query.searchBar) {
        //   products = products.filter(
        //     (product) =>
        //       product.category
        //         .toLowerCase()
        //         .indexOf(req.query.searchBar.toLowerCase()) > -1
        //   );
        // }

        return res.render("products/search", {
            // head.ejs
            title: "Search",
            style: "search",

            searchProduct: products,
        });
    },

    //Para mostrar el detalle de cada producto
    detail: async (req, res) => {
        let oneProduct = await product.findByPk(req.params.id, {
            include: {
                all: true,
            },
        });
        if (!oneProduct) {
            return res.redirect("/products/");
        }

        return res.render("products/detail", {
            // head.ejs
            title: "Product Detail",
            style: "productDetail",

            product: oneProduct,
        });
    },

    //Para crear y guardar nuevos productos en DB
    newie: async (req, res) => {
        let categoria = await category.findAll();
        return res.render("products/new", {
            // head.ejs
            title: "New Product",
            style: "newProduct",
            category: categoria,
        });
    },

    save: async (req, res) => {
        let imagen = await image.create({
            image: req.files[0].filename,
        });
        req.body.image = imagen.id;

        await product.create({
            drinkName: req.body.drinkName,
            category: req.body.category,
            state: true,
            topSelection: false,
            favorites: false,
            discount: null,
            price: req.body.price,
            description: req.body.description,
            image: imagen.id,
            flavorProfile: req.body.flavorProfile,
            creator: req.session.user.name,
            history: req.body.history,
        });
        // req.body.image = req.files[0].filename;
        // let newProduct = create(req.body);
        // let products = Product.findAll();
        // products.push(newProduct);
        // write(products);

        return res.redirect("/products/");
    },

    //Para editar y modificar productos de la DB
    edit: async (req, res) => {
        let oneProduct = await product.findByPk(req.params.id);
        if (!oneProduct) {
            return res.redirect("/products/");
        }

        return res.render("products/edit", {
            // head.ejs
            title: "Edit Product",
            style: "editProduct",

            product: oneProduct,
        });
    },

    modify: async (req, res) => {
        let oneProduct = await product.findByPk(req.params.id);
        if (!oneProduct) {
            return res.redirect("/product/");
        }
        if (oneProduct) {
            await product.update({
                drinkName: req.body.drinkName,
                image: req.body.image,
                price: req.body.price,
                description: req.body.ingredientes,
                category: req.body.categorias,
                flavorProfile: req.body.sabor,
                history: req.body.historia,
            });
        }

        // let products = Product.findAll();
        // let productModified = products.map((p) => {
        //   if (p.id == product.id) {
        //     p.drinkName = req.body.drinkName;
        //     p.price =  (req.body.price);
        //     p.image =
        //       req.files && req.files.length > 0 ? req.files[0].filename : p.image;
        //     p.description = req.body.description;
        //     p.flavorProfile = req.body.flavorProfile;
        //     p.history = req.body.history;
        //   }

        //   return p;
        // });
        // write(productModified);

        return res.redirect("/products/detail" + product.id);
    },

    //Para eliminar un producto de la DB
    destroy: async (req, res) => {
        let oneProduct = await product.findByPk(req.params.id);
        if (!oneProduct) {
            return res.redirect("/products/");
        }
        await product.destroy();
        // let productDeleted = products.filter((p) => p.id !== req.params.id);
        // write(productDeleted);

        return res.redirect("/products/");
    },
};

"use strict";

module.exports = {
    //Cuando se construye la migracion (la tabla)
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable(
                "products",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true,
                    },

                    image: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: "images",
                            key: "id",
                        },
                        allowNull: true,
                    },

                    category: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: "categories",
                            key: "id",
                        },
                        allowNull: true,
                    },

                    state: {
                        type: Sequelize.BOOLEAN,
                    },

                    topSelection: {
                        type: Sequelize.BOOLEAN,
                    },

                    favorites: {
                        type: Sequelize.BOOLEAN,
                    },

                    discount: {
                        type: Sequelize.TINYINT,
                        allowNull: true,
                    },

                    drinkName: {
                        type: Sequelize.STRING,
                    },

                    price: {
                        type: Sequelize.SMALLINT,
                    },

                    description: {
                        type: Sequelize.TEXT,
                        allowNull: true,
                    },

                    flavorProfile: {
                        type: Sequelize.TEXT,
                        allowNull: true,
                    },

                    creator: {
                        type: Sequelize.STRING,
                        allowNull: true,
                    },

                    history: {
                        type: Sequelize.TEXT,
                    },
                },
                {
                    timestamps: false,
                }
            );
        } catch (error) {
            console.log(error);
        }
    },

    //Cuando se quiere dar marcha atras la migracion (la tabla)
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("products");
    },
};

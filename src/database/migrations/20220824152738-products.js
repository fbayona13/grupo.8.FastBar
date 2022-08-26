"use strict";

module.exports = {
  //Cuando se construye la migracion (la tabla)
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },

        image: {
          type: Sequelize.INTEGER,
          // references: {
          //   model: "images",
          //   key: "id",
          // },
          //Hay que cambiarlo a false cuando la foreign key ya funcione
          allowNull: true,
        },

        category: {
          type: Sequelize.INTEGER,
          // references: {
          //   model: "categories",
          //   key: "id",
          // },
          //Hay que cambiarlo a false cuando la foreign key ya funcione
          allowNull: true,
        },

        state: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },

        topSelection: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },

        favorites: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },

        discount: {
          type: Sequelize.TINYINT,
          allowNull: false,
        },

        drinkName: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        price: {
          type: Sequelize.SMALLINT,
          allowNull: false,
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
          allowNull: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  //Cuando se quiere dar marcha atras la migracion (la tabla)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

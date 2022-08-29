"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable(
        "users",
        {
          id: {
            type: Sequelize.TINYINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },

          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          credentials: {
            type: Sequelize.TINYINT,
            allowNull: false,
            defaultValue: 2,
          },

          level: {
            type: Sequelize.SMALLINT,
            allowNull: false,
            defaultValue: 1,
          },

          email: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          image: {
            type: Sequelize.INTEGER,
            references: {
              model: "images",
              key: "id",
            },
            //Hay que cambiarlo a false cuando la foreign key ya funcione
            allowNull: true,
          },

          password: {
            type: Sequelize.TEXT,
            allowNull: false,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

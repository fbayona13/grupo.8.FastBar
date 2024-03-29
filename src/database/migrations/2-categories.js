"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable(
                "categories",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true,
                    },

                    category: {
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

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("categories");
    },
};

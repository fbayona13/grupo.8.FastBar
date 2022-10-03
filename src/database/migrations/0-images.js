"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable(
                "images",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true,
                    },

                    image: {
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
        await queryInterface.dropTable("images");
    },
};

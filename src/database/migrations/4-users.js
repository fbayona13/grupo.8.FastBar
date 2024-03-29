"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        try {
            await queryInterface.createTable(
                "users",
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        allowNull: false,
                        autoIncrement: true,
                    },

                    name: {
                        type: Sequelize.STRING,
                    },

                    lastname: {
                        type: Sequelize.STRING,
                    },

                    credentials: {
                        type: Sequelize.TINYINT,
                        defaultValue: 2,
                    },

                    level: {
                        type: Sequelize.SMALLINT,
                        defaultValue: 1,
                    },

                    email: {
                        type: Sequelize.STRING,
                    },

                    birthday: {
                        type: Sequelize.DATE,
                    },

                    image: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: "images",
                            key: "id",
                        },
                    },

                    password: {
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
        await queryInterface.dropTable("users");
    },
};

module.exports = (sequelize, DataTypes) => {
    let alias = "product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        image: {
            type: DataTypes.INTEGER,
        },

        category: {
            type: DataTypes.INTEGER,
        },

        state: {
            type: DataTypes.BOOLEAN,
        },

        topSelection: {
            type: DataTypes.BOOLEAN,
        },

        favorites: {
            type: DataTypes.BOOLEAN,
        },

        discount: {
            type: DataTypes.TINYINT,
            allowNull: true,
        },

        drinkName: {
            type: DataTypes.STRING,
        },

        price: {
            type: DataTypes.SMALLINT,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        flavorProfile: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        creator: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        history: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const product = sequelize.define(alias, cols, config);
    product.associate = function (models) {
        product.belongsTo(models.image, {
            as: "imagen",
            foreignKey: "image",
        });
        product.belongsTo(models.category, {
            as: "categoria",
            foreignKey: "category",
        });
    };
    return product;
};

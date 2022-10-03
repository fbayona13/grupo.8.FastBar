module.exports = (sequelize, DataTypes) => {
    let alias = "image";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        image: {
            type: DataTypes.TEXT,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const image = sequelize.define(alias, cols, config);
    image.associate = function (models) {
        image.hasMany(models.user, {
            as: "usuarios",
            foreignKey: "image",
        });
        image.hasMany(models.product, {
            as: "productos",
            foreignKey: "image",
        });
    };
    return image;
};

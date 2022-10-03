module.exports = (sequelize, DataTypes) => {
    let alias = "category";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        category: {
            type: DataTypes.TEXT,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const category = sequelize.define(alias, cols, config);
    category.associate = function (models) {
        category.hasMany(models.product, {
            as: "productos",
            foreignKey: "category",
        });
    };
    return category;
};

module.exports = (sequelize, DataTypes) => {
    let alias = "user";
    let cols = {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
        },

        lastname: {
            type: DataTypes.STRING,
        },

        credentials: {
            type: DataTypes.TINYINT,
            defaultValue: 2,
        },

        level: {
            type: DataTypes.SMALLINT,
            defaultValue: 1,
        },

        email: {
            type: DataTypes.STRING,
        },

        birthday: {
            type: DataTypes.DATE,
        },

        image: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'image',
                key: 'image',
            }
        },

        password: {
            type: DataTypes.TEXT,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const user = sequelize.define(alias, cols, config);

    user.associate = function (models) {
        user.belongsTo(models.image, {
            as: "imagen",
            foreignKey: "image",
        });
    };

    return user;
};

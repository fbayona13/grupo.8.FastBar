module.exports = (sequelize, DataTypes) => {
  let alias = "user";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    image: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    topSelection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    favorites: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    discount: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },

    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.SMALLINT,
      allowNull: false,
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
    tableName: alias,
    timestamps: false,
    deletedAt: false,
  };

  const User = sequelize.define(alias, cols, config);
  return User;
};

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
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const User = sequelize.define(alias, cols, config);
  return User;
};

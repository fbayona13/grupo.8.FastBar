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
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const category = sequelize.define(alias, cols, config);
  return category;
};

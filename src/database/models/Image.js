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
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const image = sequelize.define(alias, cols, config);
  return image;
};

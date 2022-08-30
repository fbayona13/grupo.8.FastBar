module.exports = (sequelize, DataTypes) => {
  let alias = "user";
  let cols = {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    credentials: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2,
    },

    level: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
  };

  const user = sequelize.define(alias, cols, config);
  return user;
};

const Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      forignkey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    discription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  (Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      forignkey:"id",
      allowNull: false,
      onDelete: "cascade",
    });
  })
    

  return Users;
};

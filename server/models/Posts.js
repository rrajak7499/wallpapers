const Sequelize = require('sequelize');
const {Users} = require('./Users')


module.exports = (sequelize, Sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    urlId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    // userId: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Users,
    //     key: 'id'
    //   }
    // }
  });

  

  // (Posts.associate = (models) => {
  //   Posts.hasMany(models.Users, {
  //     allowNull:false,
  //     onDelete: 'cascade',
  //     forigenKey: 'id'
  //   })
  // })

  return Posts;
};
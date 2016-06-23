'use strict';
module.exports = function(sequelize, DataTypes) {
  var pic = sequelize.define('pic', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    pic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pic;
};
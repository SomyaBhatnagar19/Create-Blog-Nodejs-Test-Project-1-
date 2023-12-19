/* /backend/model/blog.js */
//making the table as Blog in database

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../routes/database');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Blog;

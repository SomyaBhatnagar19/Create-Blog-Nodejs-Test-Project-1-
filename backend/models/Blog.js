/* /backend/model/blog.js */

// /backend/models/blog.js

const { DataTypes } = require('sequelize');
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

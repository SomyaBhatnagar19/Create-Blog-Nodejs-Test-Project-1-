// /backend/models/Blog.js

const { DataTypes } = require('sequelize');
const sequelize = require('../routes/database');
const Comment = require('./Comments');

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

// Define association
Blog.hasMany(Comment);
Comment.belongsTo(Blog);

module.exports = Blog;


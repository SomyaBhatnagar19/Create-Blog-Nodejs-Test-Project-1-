// /backend/models/Comments.js
const { DataTypes } = require('sequelize');
const sequelize = require('../routes/database'); 

const Comments = sequelize.define('Comments', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Comments;
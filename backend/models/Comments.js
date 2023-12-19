// /backend/models/Comments.js
const { DataTypes } = require('sequelize');
const sequelize = require('../routes/database'); // Use the exported sequelize instance

const Comments = sequelize.define('Comments', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Comments;
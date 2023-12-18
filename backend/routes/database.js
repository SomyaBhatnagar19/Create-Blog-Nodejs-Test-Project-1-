/* /backend/routes/database.js */

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("create-blog", "root", "Somya@1901b", {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

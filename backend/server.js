/* backend/servere.js */

// /backend/server.js

const express = require('express');
const db = require('./routes/database');
const blog = require('./models/Blog'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Sync Sequelize Models with Database
(async () => {
  await db.sync({ force: true });
  console.log('Database synced');
})();

app.listen(3000, () => {
  console.log("Server is listening.... & running at port 3000.")
});

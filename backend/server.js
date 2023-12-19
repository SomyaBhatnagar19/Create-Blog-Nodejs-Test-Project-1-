/* /backend/server.js */

const express = require('express');
const db = require('./routes/database');
const Blog = require('./models/Blog');
const blogRoutes = require('./routes/backendRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

// Use body parsing middleware for JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// getting data from blog table on "http://localhost:3000/blogs"
app.use('/blogs', blogRoutes);

// Serve the frontend from the 'frontend' directory
app.use(express.static('frontend'));

// Handle requests that don't match the API or static files
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Sync Sequelize Models with Database
(async () => {
  try {
    await db.sync({ alter: true });
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

app.listen(3000, () => {
  console.log('Server is listening and running at port 3000.');
});

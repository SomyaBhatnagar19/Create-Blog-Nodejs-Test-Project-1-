/* /backend/server.js */

const express = require('express');
const {sequelize, Blog} = require('./routes/database');
const blogRoutes = require('./routes/backendRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
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

//getting the comments from comments table on "http://localhost:3000/comments"
app.use('/comments',commentsRoutes);

// Handle requests that don't match the API or static files
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Sync Sequelize Models with Database
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

app.listen(3000, () => {
  console.log('Server is listening and running at port 3000.');
});

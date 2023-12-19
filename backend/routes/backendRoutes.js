// /backend/routes/blogRoutes.js

const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// // Create a new blog
// router.post('/blogs', async (req, res) => {
//   try {
//     const { title, author, description } = req.body;
//     const newBlog = await Blog.create({ title, author, description });
//     res.status(201).json(newBlog);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
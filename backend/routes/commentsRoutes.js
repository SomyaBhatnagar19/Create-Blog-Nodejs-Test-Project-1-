// /backend/routes/blogRoutes.js

const express = require('express');
const Comments = require('../models/Comments');

const router = express.Router();

//GET THE COMMENTS
router.get('/', async (req, res) => {
  try {
    const comments = await Comments.findAll(); 
    res.json(comments); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//CREATING NEW COMMENTS
router.post('/', async (req, res) => {
    try {
      const { text } = req.body;
      const newComment = await Blog.create({ text });
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

module.exports = router;

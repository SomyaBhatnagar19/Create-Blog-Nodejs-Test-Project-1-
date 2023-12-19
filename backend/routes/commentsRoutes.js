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
      const { text, blogId } = req.body; // Add blogId to the request body
      const newComment = await Comments.create({ text, blogId });
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//ADDING FUNCTIONALITY FOR DELETEING COMMENT
router.delete('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
  
    try {
      // Find the comment by ID
      const comment = await Comments.findByPk(commentId);
  
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      // Delete the comment
      await comment.destroy();
      res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;

// routes/post.js: we don't want to have the logic in here
// Reach all routes with localhost:5000/posts

import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/',  getPosts); // calls the getPosts callback function
router.post('/',  createPost); 
router.patch('/:id',  updatePost); // patch for updating existing documents, /:id is dynamic
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
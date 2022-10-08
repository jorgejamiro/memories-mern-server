import express from 'express';
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost, commentPost } 
    from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);  // to create a post you need to be authenticated
router.patch('/:id', auth, updatePost);  // same thing
router.delete('/:id', auth, deletePost);  // same thing
router.patch('/:id/likePost', auth, likePost); // same thing
router.post('/:id/commentPost', auth, commentPost); // same thing

export default router;
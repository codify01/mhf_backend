import express from 'express';
import {
  createBlog,
  getBlogs,
  
} from '../controllers/blog.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/create', protect, createBlog);
router.get('/', getBlogs);


export default router;

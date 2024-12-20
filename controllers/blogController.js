import { Blog } from '../models/Blog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const blog = new Blog({
      title,
      content,
      author: req.user._id,
      image,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

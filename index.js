import express from 'express';
import dotenv from 'dotenv';
import  connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import blogRoutes from './routes/blog.routes.js';
import crowdfundingRoutes from './routes/crowdfunding.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/crowdfunding', crowdfundingRoutes);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
connectDB().then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);

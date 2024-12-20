import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String }, 
    comments: [
      {
        text: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      },
    ],
  },
  { timestamps: true }
);

export const Blog = mongoose.model('Blog', BlogSchema);

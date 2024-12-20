import express from 'express';
import { protect, admin } from '../middleware/auth.middleware.js';
import { getAllUsers, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);

export default router;

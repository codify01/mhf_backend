import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { isAdmin } from '../middleware/role.middleware.js';
import { deleteUser, getAllUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protect, getAllUsers);
router.delete('/:id', protect, isAdmin, deleteUser);

export default router;

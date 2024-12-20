import express from 'express';
import {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} from './controllers/crowdfundingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createCampaign);
router.get('/', getAllCampaigns);
router.get('/:id', getCampaignById);
router.put('/:id', protect, updateCampaign);
router.delete('/:id', protect, deleteCampaign);

export default router;

import express from 'express';

import { createCampaign, getCampaigns } from '../controllers/crowdfunding.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, createCampaign);
router.get('/', getCampaigns);

export default router;

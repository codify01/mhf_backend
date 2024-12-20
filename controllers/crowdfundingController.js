import { Crowdfunding } from '../models/Crowdfunding.js';

// Create a crowdfunding campaign
export const createCampaign = async (req, res) => {
  try {
    const { title, description, goal, images } = req.body;
    const campaign = new Crowdfunding({
      title,
      description,
      goal,
      creator: req.user._id,
      images,
    });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all campaigns
export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Crowdfunding.find().populate('creator', 'username email');
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

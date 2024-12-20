import mongoose from 'mongoose';

const CrowdfundingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    goal: { type: Number, required: true },
    fundsRaised: { type: Number, default: 0 },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    images: [{ type: String }], 
  },
  { timestamps: true }
);

export const Crowdfunding = mongoose.model('Crowdfunding', CrowdfundingSchema);

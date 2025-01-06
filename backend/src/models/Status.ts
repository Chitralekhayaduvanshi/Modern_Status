import mongoose from 'mongoose';

const StatusSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['operational', 'degraded', 'down'],
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  description: String,
});

export const Status = mongoose.model('Status', StatusSchema); 
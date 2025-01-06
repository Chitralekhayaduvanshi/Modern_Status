import { Request, Response } from 'express';
import { Status } from '../models/Status';

export const statusController = {
  async getAll(req: Request, res: Response) {
    try {
      const statuses = await Status.find().sort({ lastUpdated: -1 });
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching statuses' });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const newStatus = new Status(req.body);
      await newStatus.save();
      res.status(201).json(newStatus);
    } catch (error) {
      res.status(400).json({ message: 'Error creating status' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const status = await Status.findByIdAndUpdate(
        req.params.id,
        { ...req.body, lastUpdated: Date.now() },
        { new: true }
      );
      if (!status) {
        return res.status(404).json({ message: 'Status not found' });
      }
      res.json(status);
    } catch (error) {
      res.status(400).json({ message: 'Error updating status' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const status = await Status.findByIdAndDelete(req.params.id);
      if (!status) {
        return res.status(404).json({ message: 'Status not found' });
      }
      res.json({ message: 'Status deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting status' });
    }
  },
}; 
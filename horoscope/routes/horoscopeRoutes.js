import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getTodayHoroscope, getHistory } from '../controllers/horoscopeController.js';

const router = express.Router();

router.get('/today', authMiddleware, getTodayHoroscope);
router.get('/history', authMiddleware, getHistory);

export default router;

import User from '../models/User.js';
import HoroscopeHistory from '../models/HoroscopeHistory.js';
import fs from 'fs';
const horoscopes = JSON.parse(fs.readFileSync(new URL('../data/horoscopes.json', import.meta.url)));


export async function getTodayHoroscope(req, res) {
  const { zodiacSign, userId } = req.user;
  const today = new Date();
  const dateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const horoscopeText = horoscopes[zodiacSign];
  await HoroscopeHistory.create({ userId, zodiacSign, date: dateOnly, horoscope: horoscopeText });
  res.json({ date: dateOnly, horoscope: horoscopeText });
}

export async function getHistory(req, res) {
  const { userId } = req.user;
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const history = await HoroscopeHistory.find({
    userId,
    date: { $gte: sevenDaysAgo },
  }).sort({ date: -1 });

  res.json(history);
}
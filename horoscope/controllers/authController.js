import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getZodiacSign } from '../utils/zodiacUtil.js';

export async function signup(req, res) {
  try {
    const { name, email, password, birthdate } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const [year, month, day] = birthdate.split('-');
    const zodiacSign = getZodiacSign(parseInt(month) - 1, parseInt(day));
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashed, birthdate, zodiacSign });
    res.status(201).json({ message: 'User created' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, zodiacSign: user.zodiacSign }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

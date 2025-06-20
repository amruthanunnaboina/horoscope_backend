import rateLimit from 'express-rate-limit';

export default rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: 'Too many requests. Please try again later.'
});
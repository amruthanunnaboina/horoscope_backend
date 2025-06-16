import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  zodiacSign: String,
  date: Date,
  horoscope: String
});

export default mongoose.model('HoroscopeHistory', historySchema);


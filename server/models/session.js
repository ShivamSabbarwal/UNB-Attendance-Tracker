import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  username: { type: 'String', required: true },
  sessionId: { type: 'String', required: true },
  timestamp: { type: 'Date', default: Date.now, expires: 10800000}, //Delete the session from the DB after 3 hours
  // SCHEMA GOES HERE
});

export default mongoose.model('Session', SessionSchema);

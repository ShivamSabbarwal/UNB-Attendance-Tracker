import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: 'String', required: true },
  // SCHEMA GOES HERE
});

export default mongoose.model('User', UserSchema);

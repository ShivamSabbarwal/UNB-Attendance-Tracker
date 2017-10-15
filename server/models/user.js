import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: 'String', required: true, unique: true },
  email: { type: 'String', required: true, unique: true },
  // This is very very not secure and definitely needs to be updated soon
  password: { type: 'String', required: true, minlength: 6, maxlength: 20 },
  isAdmin: { type: 'Boolean', default: false },
});
export default mongoose.model('User', UserSchema);

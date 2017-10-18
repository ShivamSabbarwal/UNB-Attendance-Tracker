import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: { type: 'String', required: true },
  professor: { type: 'String', required: true },
  usernames: { type: 'Array', required: true }, // Usernames of students who are in the class will be in here to link
  timestamp: { type: 'Date', default: Date.now },
});

export default mongoose.model('Course', CourseSchema);
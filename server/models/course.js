import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: { type: 'String', required: true, unique: true },
  professor: { type: 'String', required: true },
  usernames: { type: 'Array'}, // Usernames of students who are in the class will be in here to link
  institution: { type: 'String', required: true },
  location: { type: 'String' }, // room the class takes place in
});

export default mongoose.model('Course', CourseSchema);

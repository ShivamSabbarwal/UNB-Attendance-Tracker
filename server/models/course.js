import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Userdata = new Schema({
    username: { type: 'String', required: true, unique: true },
    absence: [String]
});

const CourseSchema = new Schema({
  title: { type: 'String', required: true, unique: true },
  professor: { type: 'String', required: true },
  usernames: [Userdata], // Usernames of students who are in the class will be in here to link
  institution: { type: 'String', required: true },
  location: { type: 'String' }, // room the class takes place in
});

export default mongoose.model('Course', CourseSchema);

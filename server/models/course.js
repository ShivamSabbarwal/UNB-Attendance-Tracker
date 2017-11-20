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
  time: { type: 'String' },
  term: { type: 'String', required: true }, // room the class takes place in
  emailTemplate: {type: 'String', reqiured: true},
  numDays: {type: 'Array', reqiured: true},
  attendanceRecords: {type: 'Array'}
});

export default mongoose.model('Course', CourseSchema);

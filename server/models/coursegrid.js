import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseGridSchema = new Schema({
  courseName: { type: 'String', required: true },
  class: { type: 'Array', required: true }       //For classroom layout
});

export default mongoose.model('CourseGrid', CourseGridSchema);

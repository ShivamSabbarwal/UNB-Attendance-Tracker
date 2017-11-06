import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CourseGridSchema = new Schema({
  courseName: { type: 'String', required: true },
  class: { type: 'Array', required: true },       //For classroom layout
  tut: { type: 'Array'},                          //For tutorial layout (optional)
  lab: { type: 'Array'}                           //For lab layout (optional)
});

export default mongoose.model('CourseGrid', CourseGridSchema);

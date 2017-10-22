var mongoose = require('mongoose');
require('../models/course');
require('../models/user')
var CourseSchema = require('mongoose').model('Course').schema;
var UserSchema = require('mongoose').model('User').schema;

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export function createCourse(req, res) {  
  var Course = mongoose.model('Course', CourseSchema);
  var re = new RegExp('[^A-Za-z0-9-_.]');
  //regex pattern with match if the string contains characters other than ( A-Z, a-z, 0-9, -, _, .)

  if (!req.body.title || !req.body.professor || !req.body.institution) {
    //verify that title, professor, and institution were provided
    res.status(403).send("Title, professor, and institution are required");

  } else if (re.test(req.body.title)) {
    res.status(403).send("Course title can only contain: letters, numbers, '-', '_', and '.'");

  } else {
    var course_data = {
      'title': req.body.title,
      'professor': req.body.professor,
      'usernames': [], // make usernames array empty for now until users are added
      'institution': req.body.institution,
      'location': req.body.location
    };
    var course = new Course(course_data);
    course.save(
      function(err, data){
        if (err){
          console.error(err)
          res.status(403).send("Title already belongs to an existing course")
        } else {
          res.status(200).end()
        }
      }
    )
  }
}

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export function removeCourse(req, res) { //FIX NEEDED: return 200 when removing course that does not exist
  var Course = mongoose.model('Course', CourseSchema);
  
  if (!req.body.title) {
    //verify that title was provided
    res.status(403).send("Title is required!");

  } else {
    Course.findOneAndRemove(
      { 'title': req.body.title },
      function(err, course) {
      if (err) {
        console.error(err)
        res.status(400).end();

      } else if (course) {
        res.status(200).end()

      } else {
        res.status(403).send("Course matching \"" + req.body.title + "\" not found.");
        // unsuccessful removal
      }
    });
  }
}

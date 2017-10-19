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
  var course_data = {
    'title': req.body.title,
    'professor': req.body.professor,
    'usernames': [], // make usernames array empty for now until users are added
    'institution': req.body.institution,
    'location': req.body.location
  };
  
  if (!req.body.title || !req.body.professor || !req.body.institution) {
    //verify that title, professor, and institution were provided
    res.status(403).send("Username and courseName are required");

  } else {
    var course = new User(course_data);
    course.save(
      function(err, data){
        if (err){
          console.error(err)
        } else {
          //console.log('Course record created: ' + data + ' | data type: ' + (typeof data));
        }
      } ;  
    )
  }
}

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export function removeCourse(req, res) {
  var Course = mongoose.model('Course', CourseSchema);
  
  if (!req.body.title) {
    //verify that title was provided
    res.status(403).send("Title is required!");

  } else {
    Course.remove({ 'title': req.body.title }, function(err) {
      if (!err) {
            res.status(200).end();
            // successful removal
      }
      else {
            res.status(400).end();
            // unsuccessful removal
      }
    });
  }
}

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

  if (!req.body.username || !req.body.courseName) {
    //verify that username and courseName were provided
    res.status(403).send("Username and courseName are required");

  } else {
    // TODO: create new entry in course collection
      // do not need to verify that provided username belongs to an admin
      // user (professor) because the page calling this function should
      //only be available to admins
  }
}

/**
 *
 * @param req
 * @param res
 * @returns void
 */
export function removeCourse(req, res) {

  if (!req.body.username || !req.body.courseName) {
    //verify that username and courseName were provided
    res.status(403).send("Username and courseName are required");

  } else {
    // TODO: create new entry in course collection
      // do not need to verify that provided username belongs to an admin
      // user (professor) because the page calling this function should
      //only be available to admins
  }
}

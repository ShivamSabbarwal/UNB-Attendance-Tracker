import Course from '../models/course';
import User from '../models/user';

import SessionUtils from '../util/sessionUtils';
import courseGrid from '../models/course';

var async_f = require('asyncawait/async');
var await_f = require('asyncawait/await');

function checkRequestSanity(req, res) {
  return new Promise(function(fulfill, reject) {
    // make sure that the session is valid
    SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
      if (isValid !== true) {
        res.status(401).end();
        fulfill(false);
      } else {

        // make sure that the request contains a course title
        if (!req.params.courseTitle) {
          res.status(403).send("Invalid course title").end();
          fulfill(false);
        }
        // make sure the courseTitle is valid
        // TODO Important :: we need to make sure that the course title is alphanumeric and doesn't contain special characters

        // make sure that the request format is correct
        if (!req.body.students) {
          res.status(403).send("Invalid request").end();
          fulfill(false);
        }

        // make sure that the request size > 0
        if (!Array.isArray(req.body.students) || req.body.students.length <= 0) {
          res.status(403).send("Invalid request (Array of students is expected)").end();
          fulfill(false);
        }

        fulfill(true);
      }
    })
  })
}

/**
 * This function add a list of students to a specific Course (is user is admin)
 * This function adds the student associated with the session to a specific Course (if user is not admin)
 * It requires admin access
 * @author Gehad
 * @param HTTP req
 * @param HTTP res
 * @returns void
 */
export function addStudents(req, res) {
  checkRequestSanity(req, res).then((accept) => {
    if (accept) {
      var numberOfStudents = req.body.students.length;
      var DBSuccesses = 0;
      var DBfails = 0;

      function checkAndSend() {
        if (DBSuccesses + DBfails === numberOfStudents) {
          res.status(200).send({
            Inserted: DBSuccesses,
            Failed: DBfails
          }).end();
        }
      }

      // see if this sessionID belongs to an Admin or a normal user
      SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
        if (isAdmin == true) {
          // TODO: we need to check that this admin is the owner of the course
          // add students to the course
          Course.
          findOne({
            'title': req.params.courseTitle
          }, 'title', (err, course) => {
            if (course === null) {
              res.status(403).send("Invalid request (Course not found)").end();
            } else {
              req.body.students.filter((student_username) => {
                // TODO: We need to check if this user exists in the User collection before registering them to the course (Integrity)
                // TODO: We need to check if this user is added to this course before??
                // Will just return true for all now; need to be fixed
                return true;
              }).forEach(function(student_username) {
                if (typeof student_username == 'undefined') {
                  DBfails = DBfails + 1;
                  checkAndSend();
                } else {
                  Course.updateOne({
                      _id: course._id
                    }, {
                      $push: {
                        usernames: {
                          username: student_username,
                          absence: []
                        }
                      }
                    },
                    (err, raw) => {
                      if (err !== null) {
                        console.log(err);
                        DBfails = DBfails + 1;
                      } else {
                        DBSuccesses = DBSuccesses + 1;
                      }
                      checkAndSend();
                    });
                }
              });
            }
          });
        } else {
          // get the username of the session owner
          SessionUtils.getUsername(req.cookies.sessionID).then((student_username) => {
            // add only this student to the course
            numberOfStudents = 1;
            Course.
            findOne({
              'title': req.params.courseTitle
            }, 'title', (err, course) => {
              if (course === null) {
                res.status(403).send("Invalid request (Course not found)").end();
              } else {
                // TODO: We need to check if this user exists in the User collection before registering them to the course (Integrity)
                // TODO: We need to check if this user is added to this course before??
                // Will just return true for all now; need to be fixed
                var addUser = true;
                if(addUser){
                  if (typeof student_username == 'undefined') {
                    DBfails = DBfails + 1;
                    checkAndSend();
                  } else {
                    Course.updateOne({
                        _id: course._id
                      }, {
                        $push: {
                          usernames: {
                            username: student_username,
                            absence: []
                          }
                        }
                      },
                      (err, raw) => {
                        if (err !== null) {
                          console.log(err);
                          DBfails = DBfails + 1;
                        } else {
                          DBSuccesses = DBSuccesses + 1;
                        }
                        checkAndSend();
                      });
                  }
                } else {
                  res.status(403).send("Student is already registered or does not exist");
                }
              }
            });
          })
        }
      })
    }
  })
}

/**
 * This function remove a list of students from a specific Course
 * It requires admin access
 * @author Gehad
 * @param HTTP req
 * @param HTTP res
 * @returns void
 */
export function dropStudents(req, res) {
  checkRequestSanity(req, res).then((accept) => {
    if (accept) {
      var numberOfStudents = req.body.students.length;
      var DBSuccesses = 0;
      var DBfails = 0;

      function checkAndSend() {
        if (DBSuccesses + DBfails === numberOfStudents) {
          res.status(200).send({
            Deleted: DBSuccesses,
            Failed: DBfails
          }).end();
        }
      }

      // see if this sessionID belongs to an Admin or a normal user
      SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
        if (isAdmin == true) {
          // TODO: we need to check that this admin is the owner of the course
          // remove students from the course
          Course.
          findOne({
            'title': req.params.courseTitle
          }, 'title', (err, course) => {
            if (course === null) {
              res.status(403).send("Invalid request (Course not found)").end();
            } else {
              req.body.students.filter((student_username) => {
                // TODO: We need to check if these users exist before registering them to the course
                return true;
              }).forEach(function(student_username) {
                if (typeof student_username == 'undefined') {
                  DBfails = DBfails + 1;
                  checkAndSend();
                } else {
                  Course.updateOne({
                      _id: course._id
                    },
                    // TODO: optimization :: we can remove a list in one query; we will need to filter the list beforehand
                    {
                      $pull: {
                        usernames: {
                          username: {
                            $in: [student_username]
                          }
                        }
                      }
                    },
                    (err, raw) => {
                      if (err !== null || raw.nModified === 0) {
                        DBfails = DBfails + 1;
                      } else {
                        DBSuccesses = DBSuccesses + 1;
                      }
                      checkAndSend();
                    });
                }
              });
            }
          });
        } else {
          // get the username of the session owner
          SessionUtils.getUsername(req.cookies.sessionID).then((student_username) => {
            // remove only this student from the course
            numberOfStudents = 1;
            Course.
            findOne({
              'title': req.params.courseTitle
            }, 'title', (err, course) => {
              if (course === null) {
                res.status(403).send("Invalid request (Course not found)").end();
              } else {
                // TODO: We need to check if this user exists in the User collection before registering them to the course (Integrity)
                // Will just return true for all now; need to be fixed
                var addUser = true;
                if(addUser){
                  if (typeof student_username == 'undefined') {
                    DBfails = DBfails + 1;
                    checkAndSend();
                  } else {
                    Course.updateOne({
                        _id: course._id
                      }, {
                        $pull: {
                          usernames: {
                            username: {
                              $in: [student_username]
                            }
                          }
                        }
                      },
                      (err, raw) => {
                        if (err !== null) {
                          console.log(err);
                          DBfails = DBfails + 1;
                        } else {
                          DBSuccesses = DBSuccesses + 1;
                        }
                        checkAndSend();
                      });
                  }
                } else {
                  res.status(403).send("Student does not exist");
                }
              }
            });
          })
        }
      })
    }
  })
}


export function courseList(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
    if (isValid === true) {
      var list = [];
      var results;

      Course.find({},
        'title',
        async_f(function(err, course) { // async

          await_f(function() { // await
            if (err) {
              console.error(err);
              res.status(400).end();

            } else if (course) {
              course.forEach(function(c) {
                if (c.title) {
                  list.push(c.title);

                } else {
                  res.status(400).end();
                }
              })

              res.status(200).send({
                courseList: list
              })

            } else {
              res.status(400).end();
            }
          }) // end await
        }) // end async
      )
    } else {
      res.status(401).end();
    }
  })
}


/**
 * Returns an array containing the courses that a given student is enrolled in.
 * @author Jacob Manuel
 * @param {XMLHTTPRequest} req A request containing the username of a student.
 * @param {XMLHTTPRequest} res Server reponse. If succesful, returns array of courses.
 * @returns null
 */
export function courseListByStudent(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
    if (isValid === true) {
      var list = [];
      var userFound = false;
      var courseFound = false;

      // Check if username points to a valid student.
      User
        .find({
          username: req.body.username
        })
        .cursor()
        .on('data', function(user) {

          userFound = true;

          if (!user.isAdmin) {

            // If student is valid, search for student's courses.
            Course
              .find({
                usernames: req.body.username
              })
              .cursor()
              .on('data', function(course) {
                console.log(course.title);
                list.push(course.title);
                courseFound = true;
              })
              .on('end', function() {
                if (courseFound === true) {
                  console.log(list);
                  res.status(200).send({
                    courseList: list
                  });
                } else {
                  res.status(400).send({
                    error: "Search Complete. No results found."
                  });
                }
              });

          } else {
            res.status(400).send({
              error: "Error: User is not a student."
            });
          }
        })
        .on('end', function() {
          if (userFound === false) {
            res.status(400).send({
              error: "User not found."
            });
          }
        })
    } else {
      res.status(401).end();
    }
  })
}

export function courseListByProfessor(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
        if (isValid === true) {
          SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
              if (isAdmin === true) {
                var list = [];
                var results;

                Course.find({},
                  async_f(function(err, course) { // async

                    await_f(function() { // await
                      if (err) {
                        console.error(err);
                        res.status(400).end();

                      } else if (course) {
                        course.forEach(function(c) {
                          if (c.professor) {
                            if (c.professor == req.body.professor) {
                              list.push(c.title);
                            }
                          } else {
                            res.status(400).end();
                          }
                        })

                        res.status(200).send({
                          courseListByProfessor: list
                        })

                      } else {
                        res.status(400).end();
                      }
                    }) // end await
                  }) // end async
                )
              } else {
                res.status(401).end();
              }
            })
          }
          else {
            res.status(401).end();
          }
        })
      }

/**
 * Returns an array containing the courses that a given student is enrolled in.
 * @author Tyler Sargent
 * @param HTTP req
 * @param HTTP res
 * @returns course
 */

 export function courseListSearch(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
     if (isValid === true) {
       var list = [];
       var courseFound = false;

       // Check if course name points to a course.
       Course
         .find({
           title: {$regex: req.body.search, $options: '-i' }
         })
         .cursor()
         .on('data', function(course) {

           console.log([course.title, course.professor, course.institution, course.location]);
           list.push([course.title, course.professor, course.institution, course.location]);
           courseFound = true;
         })
        .on('end', function() {
           if (courseFound === true) {
             console.log(list);
             res.status(200).send({
               courseList: list
             });
           } else {
             res.status(400).send({
               error: "Search Complete. No results found."
             });
           }
        })
     } else {
       res.status(401).end();
     }
   })
 }

      /**
       *
       * @param req
       * @param res
       * @returns void
       */
      export function createCourse(req, res) {

        // make sure that the session is valid
        SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
          if (isValid !== true) {
            res.status(401).end();
          } else {
            // make sure that this sessionID belongs to an Admin
            SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
              if (isAdmin !== true) {
                res.status(401).send("This API endpoint requires Admin capability").end();
                fulfill(false);
              } else {

                var re = new RegExp('[^A-Za-z0-9-_.]');
                //regex pattern with match if the string contains characters other than ( A-Z, a-z, 0-9, -, _, .)

                if (!req.body.title || !req.body.professor || !req.body.institution || !req.body.gridsize) {
                  //verify that title, professor, institution, and gridsize were provided
                  res.status(403).send("Title, professor, institution, and gridsize are required");

                } else if (re.test(req.body.title)) {
                  res.status(403).send("Course title can only contain: letters, numbers, '-', '_', and '.'");

                } else {
                  var coursegrid = []
                  coursegrid[0] = []
                  coursegrid.length = req.body.gridsize[0];
                  coursegrid[0].length = req.body.gridsize[1];
                  var coursegrid_data = {
                    'courseName': req.body.title,
                    'class' : coursegrid
                  };
                  var course_data = {
                    'title': req.body.title,
                    'professor': req.body.professor,
                    'usernames': [], // make usernames array empty for now until users are added
                    'institution': req.body.institution,
                    'location': req.body.location
                  };
                  var course = new Course(course_data);
                  course.save(
                    function(err, data) {
                      if (err) {
                        console.error(err)
                        res.status(403).send("Title already belongs to an existing course")
                      } else {
                        res.status(200).end()
                      }
                    }
                  )
                  courseGrid.save(
                    function(err, data) {
                      if (err) {
                        console.error(err)
                        res.status(403).end()
                      } else {
                        res.status(200).end()
                      }
                    }
                  )
                }
              }
            })
          }
        })
      }

      /**
       *
       * @param req
       * @param res
       * @returns void
       */
      export function removeCourse(req, res) {
        // make sure that the session is valid
        SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
          if (isValid !== true) {
            res.status(401).end();
          } else {
            // make sure that this sessionID belongs to an Admin
            SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
              if (isAdmin !== true) {
                res.status(401).send("This API endpoint requires Admin capability").end();
                fulfill(false);
              } else {

                if (!req.body.title) {
                  //verify that title was provided
                  res.status(403).send("Title is required!");

                } else {
                  Course.findOneAndRemove({
                      'title': req.body.title
                    },
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
            })
          }
        })
      }

import Course from '../models/course';
import courseGrid from '../models/coursegrid';
import User from '../models/user';
import SessionUtils from '../util/sessionUtils';

/**
 * @author Gehad
 * @param {String} courseTitle course title to update.
 * @param {String} submissionTime time for recording attendance (date encoded in RFC2822)
 * @param {List} absentstudents a list of absent students
 * @param {function(Boolean, String)} callback a callback with two parameters (fail:Boolean, error message:String)
 * @returns null
 */
function saveStudents(courseTitle, submissionTime, absentstudents, callback) {
  let submissionDate = Date.parse(submissionTime)
  if (!submissionDate) {
    callback(true, "Can't parse the submissionTime (Please use a string representing RFC2822)")
  }
  let studentsNotRegistered = []
  Course.findOne({
    'title': courseTitle
  }, 'title, usernames', function(err, course) {
    if (err) {
      callback(true, err)
    } else if (course) {
      //THIS IS WRONG!!! I HATE TO WRITE IT THIS WAY!
      absentstudents.forEach(absentStudent => {
        let matched = false
        course.usernames.forEach(attendanceItem => {
          if (attendanceItem.username === absentStudent) {
            attendanceItem.absence.push(submissionTime)
            matched = true
          }
        })
        if (matched === false) {
          studentsNotRegistered.push(absentStudent)
        }
      })
      course.save(function(err, data) {
        if (err) {
          callback(true, err)
        } else {
          console.log()
          callback(false, {
            notRegisteredStudents: studentsNotRegistered
          })
        }
      });
    } else {
      callback(true, "Couldn't find the course in the database")
    }
  })
}

/**
 * @author Gehad
 * @param {XMLHTTPRequest} req A request containing the username of a student.
 * @param {XMLHTTPRequest} res Server reponse. If succesful, returns array of courses.
 * @returns null
 */
export function submitAttendance(req, res) {
  // make sure that the request contains a course title
  if (!req.params.courseTitle) {
    res.status(403).send("Invalid course title").end();
  } else {
    SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
      if (isValid !== true) {
        res.status(401).end();
      } else {
        // make sure that this sessionID belongs to an Admin
        //TODO: we need to check that this admin is the owner of the course
        SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
          if (isAdmin !== true) {
            res.status(403).end();
          } else {
            if (!req.body.submissionTime || !req.body.absentstudents) {
              res.status(403).send("Invalid request").end();
            } else {
              if (!Array.isArray(req.body.absentstudents) || req.body.absentstudents.length <= 0) {
                res.status(403).send("Invalid request (Array of students is expected)").end();
              } else {
                //ACTUAL CODE EXISTS HERE
                let absentstudents = req.body.absentstudents
                saveStudents(req.params.courseTitle, req.body.submissionTime, absentstudents, (err, errorMessage) => {
                  if (err) {
                    res.status(500).send(errorMessage).end();
                  } else {
                    res.status(200).send(errorMessage).end();
                  }
                })
              }
            }
          }
        })
      }
    })
  }
}

/**
 * @param {XMLHTTPRequest} req A request containing the username of a student.
 * @param {XMLHTTPRequest} res Server reponse. If succesful, returns array of courses.
 * @returns null
 */
export function getAttendance(req, res) {
  const requestDate = Date.parse(req.query.date)
  if (!req.params.courseTitle || !requestDate) {
    res.status(403).send("Invalid course title or query date (missing or incorrect)").end();
  } else {
    SessionUtils.isValidSession(req.cookies.sessionID).then(isValid => {
      if (isValid !== true) {
        res.status(401).end();
      } else {
        SessionUtils.isAdmin(req.cookies.sessionID).then(isAdmin => {
          if (isAdmin !== true) {
            res.status(403).send("This API endpoint requires Admin capability").end();
          } else {
            Course.findOne({
              'title': req.params.courseTitle
            }, 'usernames', function(err, course) {
              if (err) {
                res.status(400).end();
              } else if (course) {
                var attendanceRecord = course.usernames.map(userData => {
                  return {
                    name: userData.username,
                    absence: userData.absence.filter(date => {
                      const recordDate = Date.parse(date)
                      if (!recordDate) {
                        return false
                      }
                      // 518400000 ms is 6 days
                      return (recordDate <= requestDate && recordDate > requestDate - 518400000)
                    })
                  }
                })
                console.log(attendanceRecord)
                res.status(200).send({
                  students: attendanceRecord
                })
              } else {
                res.status(400).send("Course matching \"" + req.params.courseTitle + "\" not found.");
              }
            });
          }
        });
      }
    });
  }
}
/**
 * @param {XMLHTTPRequest} req A request containing the username of a student.
 * @param {XMLHTTPRequest} res Server reponse. If succesful, returns array of courses.
 * @returns null
 */
export function reserveSeat(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
    isValid = true;
    if (isValid !== true) {
      res.status(401).end();
      fulfill(false);
    } else {
      courseGrid.findOne({
        'title': req.params.courseTitle
      }, 'class', function(err, course) {
        if (err) {
          console.error(err)
          res.status(400).end();
        } else if (course) {
          if (courseGrid.class[req.body.seat[0]][req.body.seat[1]] == -1) {
            res.status(418);
          } else {
            console.log('flag');
            courseGrid.class[req.body.seat[0]][req.body.seat[1]] = req.body.Username;
            for (var i = 0, len = courseGrid.class.length; i < len; i++) {
              for (var j = 0, lenj = course.usernames.length; j < lenj; j++) {
                if (courseGrid.class[i][j] === req.body.Username) {
                  courseGrid.class[i][j] = -1;
                }
              }
            }
          }
        }

        courseGrid.update(
          function(err, data) {
            if (err) {
              console.error(err)
              res.status(403).end()
            } else if (data) {
              res.status(200).end()

            } else {
              res.status(400).end()
            }
          }
        );
      });
    }
  });
}


export function getCourseGrid(req, res) {
  SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
    if (isValid !== true) {
      res.status(401).end();
    } else {

      // make sure that the request contains a course title
      if (!req.params.courseTitle) {
        res.status(403).send("Invalid course title").end();
      }
      // verify that course exists
      Course.
      findOne(
        {'title': req.params.courseTitle},
        'title',
        (err, course) => {
          if (err) {
            console.error(err);
            res.status(500).end();
          } else if (course === null) {
            res.status(400).send("Invalid request (Course not found)").end();
          } else {
            courseGrid.
            findOne(
              {'courseName': course.title},
              'class',
              (err, grid) => {
                if (err){
                  console.error(err);
                  res.status(500).end();
                } else if (!grid || grid === null) {
                  res.status(400).send("Grid not found for this course").end();
                } else {
                  res.status(200).send({
                    grid: grid.class
                  });
                }
              }
            )
          }
        }
      )
    }
  })
}

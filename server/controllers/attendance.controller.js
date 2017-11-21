import Course from '../models/course';
import courseGrid from '../models/coursegrid';
import User from '../models/user';
import SessionUtils from '../util/sessionUtils';

 const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

/**
 * @author Gehad
 * @param {String} courseTitle course title to update.
 * @param {String} submissionTime time for recording attendance (date encoded in RFC2822)
 * @param {List} absentstudents a list of absent students
 * @param {function(Boolean, String)} callback a callback with two parameters (fail:Boolean, error message:String)
 * @returns null
 */
function saveStudents(courseTitle, submissionTime, absentstudents, callback) {
  var submissionDate = Date.parse(submissionTime)
  if (!submissionDate) {
    callback(true, "Can't parse the submissionTime (Please use a string representing RFC2822)")
  } else {
    // we need to drop the time part
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var date = new Date(submissionDate)
    console.log("Converting input date to: " + monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear())
    submissionDate = new Date(monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear())
    let studentsNotRegistered = []
    Course.findOne({
      'title': courseTitle
    }, 'title usernames attendanceRecords', function(err, course) {
      if (err) {
        callback(true, err)
      } else if (course) {
        console.log(course)
        if (!course.usernames) {
          callback(true, "No students registered in the course")
        } else {
          if (course.attendanceRecords.includes(submissionDate.toString())) {
            // Updating a current submissionTime
            // we need to delete old records
            course.usernames.forEach(attendanceItem => {
              attendanceItem.absence = attendanceItem.absence.filter(absenceDate => {
                const absenceParsedDate = Date.parse(absenceDate)
                const subTimestamp = Date.parse(submissionDate)
                if (absenceParsedDate && (absenceParsedDate <= subTimestamp && absenceParsedDate > subTimestamp - 86400000)) {
                  console.log("Dropping this attendance record: " + attendanceItem.username + " was absent on " + absenceDate)
                  return false
                }
                return true
              })
            })
          } else {
            // a brand new submission
            course.attendanceRecords.push(submissionDate)
          }
          //THIS IS WRONG!!! I HATE TO WRITE IT THIS WAY!
          absentstudents.forEach(absentStudent => {
            let matched = false
            course.usernames.forEach(attendanceItem => {
              if (attendanceItem.username === absentStudent) {
                attendanceItem.absence.push(submissionDate)
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
        }
      } else {
        callback(true, "Couldn't find the course in the database")
      }
    })
  }
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
              if (!Array.isArray(req.body.absentstudents) || req.body.absentstudents.length < 0) {
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
 * param {XMLHTTPRequest} req A request containing the username of a student.
 * param {XMLHTTPRequest} res Server reponse. If succesful, returns array of courses.
 * returns null
 *
 * @api {get} course/{courseTtile}/attendance?date={date} Get course attendance
 * @apiGroup Attendance
 *
 * @apiDescription
 *  ## Gets attendance information for the 6 days before the provided date (does not include the provided date)
 *    - admin only
 *
 * @apiHeader Content-Type application/json
 * @apiHeader Cookie session cookie
 *
 * @apiParam (URL parameter) {String} courseTitle The title of the course
 * @apiParam (query parameter) {String} date The date used to define the time period. The information returned will be for the 6 days before this date (non-inclusive)
 *
 * @apiParamExample URL and Query Parameter Example
 *    http://127.0.0.1:8000/api/course/SWE4103/attendance?date=Nov 12, 2017
 *
 * @apiParamExample {json} Header Example
 *  {
 *    Content-Type: application/json
 *    Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f
 *  }
 *
 * @apiSuccess {Object[]} students Contains information for each student in the course
 * @apiSuccess {String} name Username of the student
 * @apiSuccess {String[]} absence List of times when the student was absent
 * @apiSuccess {int} total Total number of absences a student has
 * @apiSuccess 200 Successfully found and returned attendance information
 *
 * @apiSuccessExample Success Example
 *  http://127.0.0.1:8000/api/course/MATH1001/attendance?date=Nov 12, 2017
 *
 * {
 *  "students":[
 *    {
 *      "name":"user2",
 *      "absence":[],
 *      "total":2
 *    },
 *    {
 *      "name":"user1",
 *      "absence":[
 *        "Tue, 12 Nov 17 15:52:01 +0000",
 *        "Tue, 12 Nov 17 15:52:01 +0000",
 *        "Thu, 14 Nov 17 15:52:01 +0000",
 *        "Fri, 17 Nov 17 15:52:01 +0000"
 *      ],
 *      "total":5
 *    }
 *  ]
 * }
 *
 * @apiError 403 User is not allowed
 * @apiError 401 Unauthorized (User not logged in)
 * @apiError 400 Bad Request
 * @apiError (Error 5xx) 500 Internal server error
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
            }, 'usernames attendanceRecords', function(err, course) {
              if (err) {
                res.status(400).end();
              } else if (course) {
                var attRecords = course.attendanceRecords.filter( atRec => {
                  const recordDate = Date.parse(atRec)
                  return (recordDate <= requestDate && recordDate > requestDate - 518400000)
                })
                var attendanceRecord = course.usernames.map(userData => {
                  return {
                    name: userData.username,
                    absence: attRecords.map( atRec => {
                      const d__date = new Date(atRec)
                      return {
                        date: monthNames[d__date.getMonth()] + " " + d__date.getDate() + " " + d__date.getFullYear(),
                        status: (() => {
                          if (userData.absence.includes(atRec)) {
                            return 'absent'
                          } else {
                            return 'present'
                          }
                        })()
                      }
                    }),
                    total: userData.absence.length
                  }
                })
                //console.log(attendanceRecord)
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
    } else if (!req.params.courseTitle || !req.body.username || !req.body.seat) {
        res.status(400).send("Missing parameter");
    } else {
      courseGrid.findOne({
        'courseName': req.params.courseTitle
      }, 'class', function(err, coursegrid) {
        if (err) {
          console.error(err)
          res.status(400).end();
        } else if (coursegrid) {
          if (coursegrid.class[0].length < req.body.seat[1] || coursegrid.class[1].length < req.body.seat[0]) {
            res.status(400).end();
          }
          if ((coursegrid.class[req.body.seat[1]][req.body.seat[0]] != "") && ((req.body.username !== "-1" && req.body.username !== "-2"))) {
            res.status(418).end();
          } else if (req.body.username !== "-1" && req.body.username !== "-2" && req.body.username !== ""){
            coursegrid.class[req.body.seat[1]][req.body.seat[0]] = req.body.username;
            for (var i = 0, len = coursegrid.class.length; i < len; i++) {
              for (var j = 0, lenj = coursegrid.class[0].length; j < lenj; j++) {
                if ((coursegrid.class[i][j] === req.body.username)&&(i != req.body.seat[1] || j != req.body.seat[0])) {
                    coursegrid.class[i][j] = "";
                }
              }
            }
            coursegrid.markModified("class");
            coursegrid.save();
            res.status(200).end();
          } else {
            coursegrid.class[req.body.seat[1]][req.body.seat[0]] = req.body.username;
            coursegrid.markModified("class");
            coursegrid.save();
            res.status(200).end();
          }


        }


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


/**
 * param res
 * param req
 * author Riley
 *
 * @api {get} course/{courseTitle}/stats?absence={numberOfAbsences} Absence statistics
 * @apiGroup Attendance
 *
 * @apiDescription
 *  ## Get list of students who have missed at least the given number of days
 *    - admin only
 *    - will return list of students and the number of absences they have (only if there number of absences is greater than the number provided)
 *    - searching for 0 absences will return full list of students and their number of absences
 *
 * @apiHeader Content-Type application/json
 * @apiHeader Cookie session cookie
 *
 * @apiParam (URL parameter) {String} courseTitle The title of the course
 * @apiParam (Query parameter) {int} [numberOfAbsences=0] Students will be returned if they have at least this many absences
 *
 * @apiParamExample URL and Query Parameter Example
 *    http://127.0.0.1:8000/api/course/SWE4103/stats?absences=2
 *
 * @apiParamExample {json} Header Example
 *  {
 *    Content-Type: application/json
 *    Cookie: sessionID=344d94eb4a904b37fcc82305ab67d14f
 *  }
 *
 * @apiSuccess {Object[]} students Contains "name" and "absenceCount" for each student with at least as many absences as numberOfAbsences
 * @apiSuccess {String} name The username of one student
 * @apiSuccess {int} absenceCount The total number of absences a student has on record
 * @apiSuccess 200 Successfully found and returned information
 *
 * @apiSuccessExample Get absences=0
 *  http://127.0.0.1:8000/api/course/SWE4103/stats?absences=0
 *
 *  {
 *    "students": [
 *      {"name": "Wirt, Jr.", "absenceCount": 0},
 *      {"name": "George Washington", "absenceCount": 4},
 *      {"name": "J. Funderburker", "absenceCount": 3}
 *    ],
 *  }
 *
 * @apiSuccessExample Get absences=3
 *  http://127.0.0.1:8000/api/course/SWE4103/stats?absences=3
 *
 *  {
 *    "students": [
 *      {"name": "George Washington", "absenceCount": 4}
 *      {"name": "J. Funderburker", "absenceCount": 3}
 *    ],
 *  }
 *
 * @apiError 401 Invalid session
 * @apiError 403 Session does not belong to admin, or courseTitle was not provided, or matching course could not be found
 *
 */
export function getStats(req, res) {

  //check for provided number of absences, default to 0 if not provided
  // ".../stats" or ".../stats?absences=" will both default to 0
  var absenceLimit = 0;
  if (req.query.absences) {
    absenceLimit = req.query.absences;
  }

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
            Course.findOne(
              {'title': req.params.courseTitle},
              'usernames',
              function(err, course){
                if (err) {
                  console.error(err);
                  res.status(403).end();

                } else if (course) {

                  //find students with # of absences >= absenceLimit
                  var matchingStudents = course.usernames.map(userData => {
                    if (userData.absence.length >= absenceLimit){
                      return {
                        name: userData.username,
                        absenceCount: userData.absence.length
                      };
                    } else {
                      return null;
                    }
                  })

                  // filter out null values
                  matchingStudents = matchingStudents.filter(
                    function(val) {
                      return (val !== null);
                    }
                  )

                  res.status(200).send({
                    students: matchingStudents
                  })

                } else {
                  res.status(403).send("Matching course not found")
                }
              }
            )
          }
        })
      }
    })
  }
}

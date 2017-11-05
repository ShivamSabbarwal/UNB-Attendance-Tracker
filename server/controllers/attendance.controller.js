import Course from '../models/course';
import courseGrid from '../models/coursegrid';
import User from '../models/user';
import SessionUtils from '../util/sessionUtils';

function saveStudents(courseTitle, submissionTime, absentstudents, callback) {
  let submissionDate = Date.parse(submissionTime)
  if (!submissionDate) {
    callback(true, "Can't parse the submissionTime (Please use a string representing RFC2822)")
  }
  let studentsNotRegistered = []
  Course.findOne({ 'title' : courseTitle }, 'title, usernames', function(err, course){
      if(err){
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
        course.save(function (err, data) {
          if(err) {
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
                saveStudents(req.params.courseTitle, req.body.submissionTime, absentstudents, (err, errorMessage)=>{
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
export function getAttendance (req, res){
    SessionUtils.isValidSession(req.cookies.sessionID).then((isValid) => {
        isValid = true;
        if (isValid !== true) {
            res.status(401).end();
        } else {
        SessionUtils.isAdmin(req.cookies.sessionID).then((isAdmin) => {
        isAdmin = true;
        if (isAdmin !== true) {
            res.status(403).send("This API endpoint requires Admin capability").end();

        } else {
            Course.findOne({ 'title' : req.params.courseTitle }, 'usernames', function(err, course){
                if(err){
                    console.error(err)
                    res.status(400).end();
                } else if (course) {
                    var attendanceRecord = [];
                    console.log(course.usernames.length);
                    for (var i = 0, len = course.usernames.length; i < len; i++){
                        console.log('flag');
                        attendanceRecord[i] = [];
                        attendanceRecord[i][0] = course.usernames[i][0];
                        attendanceRecord[i][1] = [];
                        for (var j = 0, lenj = course.usernames[i].length; j < lenj; j++){
                            console.log('inner flag');
                            if(Date.parse(course.usernames[i][1][j]) < (Date.parse(req.params.date)) &&
                                (Date.parse(course.usernames[i][1][j])) > (Date.parse(req.params.date) - 518400)){

                                attendanceRecord[i][1].push(course.usernames[i][1][j])
                            }
                        }
                    }
                    var absenceCount = course.usernames;
                    for (var i = 0, len = absenceCount.length; i < len; i++){
                        if(absenceCount[i].length = 2){
                            absenceCount[i][1] = absenceCount[i][1].length
                        }
                    }

                    res.status(200).send(
                        getAttendance: absenceCount,
                        getAttendance: attendanceRecord
                    )
                } else {
                    res.status(400).send("Course matching \"" + req.params.courseTitle + "\" not found.");
                }
            });
        }
        });
        }
    });
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
            courseGrid.findOne({ 'title' : req.params.courseTitle }, 'class', function(err, course){
                if(err){
                    console.error(err)
                    res.status(400).end();
                } else if (course) {
                    if (courseGrid.class[req.body.seat[0]][req.body.seat[1]] == -1){
                        res.status(418);
                    } else {
                        console.log('flag');
                        courseGrid.class[req.body.seat[0]][req.body.seat[1]] = req.body.Username;
                        for (var i = 0, len = courseGrid.class.length; i < len; i++){
                            for (var j = 0, lenj = course.usernames.length; j < lenj; j++){
                                if(courseGrid.class[i][j] === req.body.Username){
                                    courseGrid.class[i][j] = -1;
                                }
                            }
                        }
                    }
                }

                courseGrid.update(
                      function(err, data){
                        if (err){
                          console.error(err)
                          res.status(403).end()
                        } else if (data){
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

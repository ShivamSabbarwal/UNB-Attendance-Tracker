import React, { PropTypes, Component } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
 import InstructorCourseGrid from '../CourseOverview/InstructorCourseGrid';
 import DatePicker from 'react-datepicker';
 import DateCarousel from '../Components/DateCarousel';
 import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
 import '../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.min.css';
 // Import Style
 import styles from '../../main.css';
 import Header from '../Components/InstructorHeader';
 import moment from 'moment';
 import * as utils from '../Utils/utils.js';

class InstructorCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: [], startDate: moment()};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        debugger;

        var response = JSON.parse(req.responseText);

        var grid = response.grid;
        console.log(grid);
        var output = <InstructorCourseGrid name={courseName} grid={grid}/>;

        this.setState({
          courseGrid: output
        });
        var studentList = [];
        var studentListNonEmpty = [];
        //student list from child component
        var row = this.state.courseGrid.props.grid.length;
        var col = this.state.courseGrid.props.grid[0].length;
        for (var i=0; i < row; i ++){
          for (var j=0; j < col; j++){
            studentList.push(this.state.courseGrid.props.grid[i][j]);
          }
        }
        //clean empty string from student list
        //uncleaned is the total length generated from 2d grid
        var uncleaned = studentList.length;
        for (var i=0; i <uncleaned; i++){
          if (studentList[i] != ""){
            studentListNonEmpty.push(studentList[i]);
          }
        }
        document.getElementById("studentListUnclean").innerHTML = studentListNonEmpty;
        document.getElementById("courseNameHidden").innerHTML = courseName;


      }
    }.bind(this)

    req.open("GET", "/api/course/" + courseName + "/grid");
    req.setRequestHeader("Content-type", "application/json");

    req.send();
    /*var rows = ["Students:"];

    for(var i = 0; i < height; i++){

      var cell = [];

      for(var idx = 0; idx < width; idx++){

  	     var id = i*7 + idx;
        if(grid[i][idx] != ""){
  	       rows.push(<label className={styles.studentRowEntry}>{grid[i][idx]}</label>);
        }

      }

    }*/

  }


  handleChange(date){
    this.setState({
      startDate: date
    });
    var refresh1 = document.getElementById("studentNameCol");
    var refresh2 = document.getElementById("totalDaysMissedCol");
    var refresh3 = document.getElementById("firstDayMissedCol");
    var refresh4 = document.getElementById("secondDayMissedCol");
    var refresh5 = document.getElementById("thirdDayMissedCol");
    var refresh6 = document.getElementById("fourthDayMissedCol");
    var refresh7 = document.getElementById("fifthDayMissedCol");
    refresh1.innerHTML = 'Student';
    refresh2.innerHTML = 'Total';
    refresh3.innerHTML = 'Monday';
    refresh4.innerHTML = 'Tuesday';
    refresh5.innerHTML = 'Wednesday';
    refresh6.innerHTML = 'Thursday';
    refresh7.innerHTML = 'Friday';
    document.getElementById("errorTemplate").style.visibility = "hidden";

    document.getElementById("notLoggedIn").style.visibility = "hidden";
    document.getElementById("notLoggedIn").style.display = "none";

    document.getElementById("fieldEmpty").style.visibility = "hidden";
    document.getElementById("fieldEmpty").style.display = "none";

    document.getElementById("invalidInput").style.visibility = "hidden";
    document.getElementById("invalidInput").style.display = "none";

    document.getElementById("statViewHidden").style.height = "0px";
    document.getElementById("queViewHidden").style.height = "0px";

  }
  submitAttendance(){
    var absentStudentsUncleaned = document.getElementById("absentStudents").innerHTML;
    //need to clean student list
    absentStudentsUncleaned = absentStudentsUncleaned.substring(0, absentStudentsUncleaned.length - 1);
    var absentStudentListArray = new Array();
    absentStudentListArray = absentStudentsUncleaned.split(",");
    var absentStudentsStringified = JSON.stringify(absentStudentListArray);
    var submissionDateString = document.getElementById("dateToday").value;
    var rfc2822Format = submissionDateString.split('/');
    var submissionDate = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);
    var courseName = document.getElementById("courseNameHidden").innerHTML;
    //submit attendance api request
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      debugger;
      if (req.readyState == 4 && req.status == 200) {
        document.getElementById("successfulSubmit").style.visibility = "visible";
        document.getElementById("successfulSubmit").style.display = "block";

        document.getElementById("errorTemplate").style.visibility = "hidden";
        document.getElementById("errorTemplate").style.display = "none";

        document.getElementById("notLoggedIn").style.visibility = "hidden";
        document.getElementById("notLoggedIn").style.display = "none";

        document.getElementById("fieldEmpty").style.visibility = "hidden";
        document.getElementById("fieldEmpty").style.display = "none";

        document.getElementById("invalidInput").style.visibility = "hidden";
        document.getElementById("invalidInput").style.display = "none";
        window.location.reload();
      }
      else if (req.readyState == 4 && req.status == 400){
        document.getElementById("errorTemplate").style.visibility = "hidden";
        document.getElementById("errorTemplate").style.display = "none";

        document.getElementById("notLoggedIn").style.visibility = "hidden";
        document.getElementById("notLoggedIn").style.display = "none";

        document.getElementById("fieldEmpty").style.visibility = "visible";
        document.getElementById("fieldEmpty").style.display = "block";

        document.getElementById("invalidInput").style.visibility = "hidden";
        document.getElementById("invalidInput").style.display = "none";
      }
      else if (req.readyState == 4 && req.status == 403){
        document.getElementById("errorTemplate").style.visibility = "visible";
        document.getElementById("errorTemplate").style.display = "block";

        document.getElementById("notLoggedIn").style.visibility = "hidden";
        document.getElementById("notLoggedIn").style.display = "none";

        document.getElementById("fieldEmpty").style.visibility = "hidden";
        document.getElementById("fieldEmpty").style.display = "none";

        document.getElementById("invalidInput").style.visibility = "hidden";
        document.getElementById("invalidInput").style.display = "none";
      }
      else if (req.readyState == 4 && req.status == 401){
        document.getElementById("errorTemplate").style.visibility = "hidden";
        document.getElementById("errorTemplate").style.display = "none";

        document.getElementById("notLoggedIn").style.visibility = "visible";
        document.getElementById("notLoggedIn").style.display = "block";

        document.getElementById("fieldEmpty").style.visibility = "hidden";
        document.getElementById("fieldEmpty").style.display = "none";

        document.getElementById("invalidInput").style.visibility = "hidden";
        document.getElementById("invalidInput").style.display = "none";
      }
      else if (req.readyState == 4 && req.status == 500){
        document.getElementById("errorTemplate").style.visibility = "hidden";
        document.getElementById("errorTemplate").style.display = "none";

        document.getElementById("notLoggedIn").style.visibility = "hidden";
        document.getElementById("notLoggedIn").style.display = "none";

        document.getElementById("fieldEmpty").style.visibility = "hidden";
        document.getElementById("fieldEmpty").style.display = "none";

        document.getElementById("invalidInput").style.visibility = "visible";
        document.getElementById("invalidInput").style.display = "block";
      }
    }
    var param = '{"submissionTime":"' + submissionDate + '", "absentstudents":'+ absentStudentsStringified +'}';
    req.open("PUT", "/api/course/" + courseName + "/attendance");
    req.setRequestHeader("Content-type", "application/json");
    req.send(param);
  }
  viewStatistics(){
    document.getElementById("totalDaysMissedCol").innerHTML = "Total";
    document.getElementById("studentNameCol").innerHTML = "Student";
    document.getElementById("fifthDayMissedCol").innerHTML = "Friday";
    document.getElementById("fourthDayMissedCol").innerHTML = "Thursday";
    document.getElementById("thirdDayMissedCol").innerHTML = "Wednesday";
    document.getElementById("secondDayMissedCol").innerHTML = "Tuesday";
    document.getElementById("firstDayMissedCol").innerHTML = "Monday";
    //get attendance statistics
    var submissionDateString = document.getElementById("dateToday").value;
    var rfc2822Format = submissionDateString.split('/');
    var submissionDate = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);
    var courseName = document.getElementById("courseNameHidden").innerHTML;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      //successful
      if (req.readyState == 4 && req.status == 200) {
          var response = JSON.parse(req.responseText);
          var students = response.students;
          console.log(students);
          //fill in date for the table
          document.getElementById("fifthDayMissedCol").innerHTML = students[0].absence[4].date.toString();
          document.getElementById("fourthDayMissedCol").innerHTML = students[0].absence[3].date.toString();
          document.getElementById("thirdDayMissedCol").innerHTML = students[0].absence[2].date.toString();
          document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[1].date.toString();
          document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[0].date.toString();

          //stores all absents inside an array
          var totalAbsenceArray = new Array(students.length);
          //per student
          var absentPerStudent = 0;

          var fiveDaysStat = new Array(students.length);
          for (var i=0; i<students.length; i++){
            fiveDaysStat[i] = new Array(6);
          }

          //create element dynamically based on student classList
          for (var i=0; i < students.length; i++){
            //student column
            var studentCol = document.createElement("div");
            var studentName = document.createTextNode(students[i].name);
            studentCol.appendChild(studentName);
            document.getElementById("studentNameCol").appendChild(studentCol);

            //first day column
            var firstCol = document.createElement("div");

            //total days missed column
            for (var j=0; j <6; j++){
              if (students[i].absence[j].status == "absent"){
                absentPerStudent++;
                totalAbsenceArray[i] = absentPerStudent;
                fiveDaysStat[i][j] = "Absent";
              }
              else if(students[i].absence[j].status == "present"){
                fiveDaysStat[i][j] = "Present";
              }
            }
            absentPerStudent = 0;
            //would return undefined if a student was present every day
            if (totalAbsenceArray[i] === undefined){
              totalAbsenceArray[i] = "wtf";
            }
            var totalCol = document.createElement("div");
            var totalAbsence = document.createTextNode(totalAbsenceArray[i]);
            totalCol.appendChild(totalAbsence);
            document.getElementById("totalDaysMissedCol").appendChild(totalCol);
        }
        console.log(fiveDaysStat);
      }
      //user not allowed
      else if (req.readyState == 4 && req.status == 403){
        alert("user is not allowed");
      }
      //unauthorized
      else if (req.readyState == 4 && req.status == 401){
        alert("you are unauthorized");
      }
      else if (req.readyState == 4 && req.status == 400){
        alert("please do not leave the date empty");
      }
      else if(req.readyState == 4 && req.status == 500){
        alert("please check your internet connection");
      }
    }
    req.open("GET", "/api/course/" + courseName + "/attendance?" + "date=" + submissionDate);
    req.setRequestHeader("Content-type", "application/json");
    req.send();

    //this is animation to open statistic table
    document.getElementById("statViewHidden").style.height = "300px";
    document.getElementById("statViewHidden").WebkitTransition = "all 1s";
    document.getElementById("statViewHidden").style.transition = "all 1s";
  }
  closeStatTable(){
    document.getElementById("statViewHidden").style.height = "0px";
    document.getElementById("statViewHidden").WebkitTransition = "all 1s";
    document.getElementById("statViewHidden").style.transition = "all 1s";

    var refresh1 = document.getElementById("studentNameCol");
    var refresh2 = document.getElementById("totalDaysMissedCol");
    var refresh3 = document.getElementById("firstDayMissedCol");
    var refresh4 = document.getElementById("secondDayMissedCol");
    var refresh5 = document.getElementById("thirdDayMissedCol");
    var refresh6 = document.getElementById("fourthDayMissedCol");
    var refresh7 = document.getElementById("fifthDayMissedCol");
    refresh1.innerHTML = 'Student';
    refresh2.innerHTML = 'Total';
    refresh3.innerHTML = 'Monday';
    refresh4.innerHTML = 'Tuesday';
    refresh5.innerHTML = 'Wednesday';
    refresh6.innerHTML = 'Thursday';
    refresh7.innerHTML = 'Friday';
  }
  openQueryTable(){
    document.getElementById("queViewHidden").style.height = "300px";
    document.getElementById("queViewHidden").WebkitTransition = "all 1s";
    document.getElementById("queViewHidden").style.transition = "all 1s";
  }
  viewQueryStudents(){
    document.getElementById("studentQuery").innerHTML = "Student"
    document.getElementById("totalDayQuery").innerHTML = "Total Absence";
    var courseName = document.getElementById("courseNameHidden").innerHTML;
    var numberOfAbsences = document.getElementById("queryDate").value;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if (req.readyState == 4 && req.status == 200) {
          var response = JSON.parse(req.responseText);
          var students = response.students;
          console.log(students);
          for (var i=0; i < students.length; i++){
            var studentCol = document.createElement("div");
            var totalCol = document.createElement("div");
            var studentList = document.createTextNode(students[i].name);
            var counts = document.createTextNode(students[i].absenceCount);
            studentCol.appendChild(studentList);
            totalCol.appendChild(counts);
            document.getElementById("studentQuery").appendChild(studentCol);
            document.getElementById("totalDayQuery").appendChild(totalCol);
          }
      }
    }
    req.open("GET", "/api/course/" + courseName + "/stats?" + "absences=" + numberOfAbsences);
    console.log("/api/course/" + courseName + "/stats?" + "absences=" + numberOfAbsences);
    req.setRequestHeader("Content-type", "application/json");
    req.send();
  }
  closeQueryTable(){
    document.getElementById("queViewHidden").style.height = "0px";
    document.getElementById("queViewHidden").WebkitTransition = "all 1s";
    document.getElementById("queViewHidden").style.transition = "all 1s";
    document.getElementById("queryDate").value = "";
    document.getElementById("studentQuery").innerHTML = "Student";
    document.getElementById("totalDayQuery").innerHTML = "Total Absence"
  }
  render(){
    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];
    return(
      <div>
      <div className={styles.hiddenContainer2}>
        <p id="studentListUnclean"></p>
        <p id="courseNameHidden"></p>
      </div>
       <Header/>
          <div className={styles.mainBody}>

              <div className={styles.datePickerWrapper}>
                <DatePicker id="dateToday" className={styles.datePicker}
                       autoFocus
                       selected={this.state.startDate}
                       onChange={this.handleChange}
                />
              </div>
              <div>
              <h3 className={styles.queriesDirect} onClick={this.openQueryTable}>View Query Statistics</h3>
              <h3 className={styles.statDirect} onClick={this.viewStatistics}>View Attendance Statistics</h3><br/><br/><br/>
              </div>
              <div className={styles.statisticsViewHidden} id="statViewHidden">
                <div className={styles.statTableWrapper}>
                  <form id="form1">
                    <div className={styles.divtable}>
                      <div className={styles.divtablerow}>
                        <div className={styles.divtablecol} id="studentNameCol">Student</div>
                        <div className={styles.divtablecol} id="totalDaysMissedCol">Total</div>
                        <div className={styles.divtablecol} id="firstDayMissedCol">Monday</div>
                        <div className={styles.divtablecol} id="secondDayMissedCol">Tuesday</div>
                        <div className={styles.divtablecol} id="thirdDayMissedCol">Wednesday</div>
                        <div className={styles.divtablecol} id="fourthDayMissedCol">Thursday</div>
                        <div className={styles.divtablecol} id="fifthDayMissedCol">Friday</div>
                      </div>
                    </div>
                  </form>
                  <p className={styles.closeStatViewButton} onClick={this.closeStatTable}>Close Statistics</p>
                </div>
              </div>
              <div className={styles.queriesViewHidden} id="queViewHidden">
                  <div className={styles.queriesBodyWrapper}>
                    <div className={styles.query}>
                      <input type="text" id="queryDate" placeholder="Missed days" className={styles.missedDaysInput}></input>
                      <p className={styles.studentQueryViewButton} onClick={this.viewQueryStudents}>Search</p>
                      <form id="form1">
                        <div className={styles.divtable}>
                          <div className={styles.divtablerow}>
                            <div className={styles.divtablecol} id="studentQuery">Student</div>
                            <div className={styles.divtablecol} id="totalDayQuery">Total Absence</div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p className={styles.closeStatViewButton} onClick={this.closeQueryTable}>Close Query</p>
                  </div>
              </div>

            <div className={styles.errorMsgTemplate} id="errorTemplate">holds height</div>
            <div className={styles.errorMsgSuccessful} id="successfulSubmit">You have submitted an attendance!</div>
            <div className={styles.errorMsgCritical} id="notLoggedIn">You are not logged in</div>
            <div className={styles.errorMsgWarning} id="fieldEmpty">Do not leave the date of submission empty</div>
            <div className={styles.errorMsgWarning} id="invalidInput">Make sure to check your date input format</div>
            <h1 className={styles.mainBodyTitleOverview1}>{courseName} Classroom</h1>
            <div className={styles.mainBodyWrapper}>
              <p className={styles.clickInstruction}>Click once to mark student absent</p>
              <div className={styles.courseGrid}>
                {this.state.courseGrid}
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.buttonWrapper}>
                <h3 className={styles.instructorButton} onClick={this.submitAttendance}>Submit Attendance</h3>
               </div>
            </div>
          </div>
       </div>
    )
  }
}

 export default InstructorCourseOverview;

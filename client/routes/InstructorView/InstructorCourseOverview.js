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
 //import '../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.min.css';

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
    refresh3.innerHTML = 'No Record';
    refresh4.innerHTML = 'No Record';
    refresh5.innerHTML = 'No Record';
    refresh6.innerHTML = 'No Record';
    refresh7.innerHTML = 'No Record';
    document.getElementById("errorTemplate").style.visibility = "hidden";

    document.getElementById("notLoggedIn").style.visibility = "hidden";
    document.getElementById("notLoggedIn").style.display = "none";

    document.getElementById("fieldEmpty").style.visibility = "hidden";
    document.getElementById("fieldEmpty").style.display = "none";

    document.getElementById("invalidInput").style.visibility = "hidden";
    document.getElementById("invalidInput").style.display = "none";

    document.getElementById("statViewHidden").style.height = "0px";

  }

  downloadCSV(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];
    debugger;
    var submissionDateString = document.getElementById("dateToday").value;
    var rfc2822Format = submissionDateString.split('/');
    var submissionDate = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);

    var req = new XMLHttpRequest();
    req.open("GET", "/api/course/" + courseName + "/csv?date=" + submissionDate);
    req.setRequestHeader("Content-type", "application/json");
    //403 - not enough data provided / course already exists / title contains characters other than letter, numbers, -, _ and .
    //200 - course created successfully
    //above comments need to be implemented
    req.onreadystatechange = function(){
      if (req.readyState == 4 && req.status == 200) {
          debugger;
          var csvContent = "data:text/csv;charset=utf-8,";
          csvContent += req.responseText;
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "my_data.csv");
          document.body.appendChild(link); // Required for FF

          link.click(); // This will download the data file named "my_data.csv".
      }
      else if(req.readyState == 4 && req.status == 403){
        alert('Error');
      }
    }
    req.send();

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
    document.getElementById("fifthDayMissedCol").innerHTML = "No Record";
    document.getElementById("fourthDayMissedCol").innerHTML = "No Record";
    document.getElementById("thirdDayMissedCol").innerHTML = "No Record";
    document.getElementById("secondDayMissedCol").innerHTML = "No Record";
    document.getElementById("firstDayMissedCol").innerHTML = "No Record";
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
          /*var fiveDaysStat = new Array(students.length);
          for (var i=0; i<students.length; i++){
            fiveDaysStat[i] = new Array(5);
          }
          console.log(fiveDaysStat);
          for (var i=0; i<students.length; i++){
            for (var j=0; j<5; j++){
              fiveDaysStat[i][j] = "No Class";
            }
          }*/
          var dataLength = students[0].absence.length;

          // if all 5 days attendance submitted
          if (dataLength == 5){
            document.getElementById("fifthDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("fourthDayMissedCol").innerHTML = students[0].absence[dataLength-2].date.toString();
            document.getElementById("thirdDayMissedCol").innerHTML = students[0].absence[dataLength-3].date.toString();
            document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[dataLength-4].date.toString();
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-5].date.toString();
            console.log("5 days");
            for (var i=0; i < students.length; i++){
              var fifth = document.createElement("div");
              var fourth = document.createElement("div");
              var third = document.createElement("div");
              var second = document.createElement("div");
              var first = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("fifthDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("fifthDayMissedCol").appendChild(fifth);
              }
              if (students[i].absence[dataLength-2].status == "present"){
                var presentNode = document.createTextNode("O");
                fourth.appendChild(presentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fourth);
              }
              else if (students[i].absence[dataLength-2].status =="absent"){
                var absentNode = document.createTextNode("X");
                fourth.appendChild(absentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fourth);
              }
              if (students[i].absence[dataLength-3].status == "present"){
                var presentNode = document.createTextNode("O");
                third.appendChild(presentNode);
                document.getElementById("thirdDayMissedCol").appendChild(third);
              }
              else if (students[i].absence[dataLength-3].status =="absent"){
                var absentNode = document.createTextNode("X");
                third.appendChild(absentNode);
                document.getElementById("thirdDayMissedCol").appendChild(third);
              }
              if (students[i].absence[dataLength-4].status == "present"){
                var presentNode = document.createTextNode("O");
                second.appendChild(presentNode);
                document.getElementById("secondDayMissedCol").appendChild(second);
              }
              else if (students[i].absence[dataLength-4].status =="absent"){
                var absentNode = document.createTextNode("X");
                second.appendChild(absentNode);
                document.getElementById("secondDayMissedCol").appendChild(second);
              }
              if (students[i].absence[dataLength-5].status == "present"){
                var presentNode = document.createTextNode("O");
                first.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(first);
              }
              else if (students[i].absence[dataLength-5].status =="absent"){
                var absentNode = document.createTextNode("X");
                first.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(first);
              }
            }

          }
          //4 days attendance data
          else if (dataLength == 4){
            document.getElementById("fourthDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("thirdDayMissedCol").innerHTML = students[0].absence[dataLength-2].date.toString();
            document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[dataLength-3].date.toString();
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-4].date.toString();
            document.getElementById("fifthDayMissedCol").innerHTML = "No Record";
            console.log("4 days");
            for (var i=0; i < students.length; i++){
              var fifth = document.createElement("div");
              var fourth = document.createElement("div");
              var third = document.createElement("div");
              var second = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fifth);
              }
              if (students[i].absence[dataLength-2].status == "present"){
                var presentNode = document.createTextNode("O");
                fourth.appendChild(presentNode);
                document.getElementById("thirdDayMissedCol").appendChild(fourth);
              }
              else if (students[i].absence[dataLength-2].status =="absent"){
                var absentNode = document.createTextNode("X");
                fourth.appendChild(absentNode);
                document.getElementById("thirdDayMissedCol").appendChild(fourth);
              }
              if (students[i].absence[dataLength-3].status == "present"){
                var presentNode = document.createTextNode("O");
                third.appendChild(presentNode);
                document.getElementById("secondDayMissedCol").appendChild(third);
              }
              else if (students[i].absence[dataLength-3].status =="absent"){
                var absentNode = document.createTextNode("X");
                third.appendChild(absentNode);
                document.getElementById("secondDayMissedCol").appendChild(third);
              }
              if (students[i].absence[dataLength-4].status == "present"){
                var presentNode = document.createTextNode("O");
                second.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(second);
              }
              else if (students[i].absence[dataLength-4].status =="absent"){
                var absentNode = document.createTextNode("X");
                second.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(second);
              }
            }
          }
          //3 days attendance data
          else if (dataLength == 3){
            document.getElementById("thirdDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[dataLength-2].date.toString();
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-3].date.toString();
            document.getElementById("fifthDayMissedCol").innerHTML = "No Record";
            document.getElementById("fourthDayMissedCol").innerHTML = "No Record";
            console.log("3 days");
            for (var i=0; i<students.length; i++){
              var fifth = document.createElement("div");
              var fourth = document.createElement("div");
              var third = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("thirdDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("thirdDayMissedCol").appendChild(fifth);
              }
              if (students[i].absence[dataLength-2].status == "present"){
                var presentNode = document.createTextNode("O");
                fourth.appendChild(presentNode);
                document.getElementById("secondDayMissedCol").appendChild(fourth);
              }
              else if (students[i].absence[dataLength-2].status =="absent"){
                var absentNode = document.createTextNode("X");
                fourth.appendChild(absentNode);
                document.getElementById("secondDayMissedCol").appendChild(fourth);
              }
              if (students[i].absence[dataLength-3].status == "present"){
                var presentNode = document.createTextNode("O");
                third.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(third);
              }
              else if (students[i].absence[dataLength-3].status =="absent"){
                var absentNode = document.createTextNode("X");
                third.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(third);
              }
            }
          }
          //2 days attendance data
          else if (dataLength == 2){
            document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-2].date.toString();
            document.getElementById("fifthDayMissedCol").innerHTML = "No Record";
            document.getElementById("fourthDayMissedCol").innerHTML = "No Record";
            document.getElementById("thirdDayMissedCol").innerHTML = "No Record";
            console.log("2 days");
            for (var i=0; i<students.length; i++){
              var fifth = document.createElement("div");
              var fourth = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("secondDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("secondDayMissedCol").appendChild(fifth);
              }
              if (students[i].absence[dataLength-2].status == "present"){
                var presentNode = document.createTextNode("O");
                fourth.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(fourth);
              }
              else if (students[i].absence[dataLength-2].status =="absent"){
                var absentNode = document.createTextNode("X");
                fourth.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(fourth);
              }
            }
          }
          //1 days attendance data
          else if (dataLength == 1){
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("fifthDayMissedCol").innerHTML = "No Record";
            document.getElementById("fourthDayMissedCol").innerHTML = "No Record";
            document.getElementById("thirdDayMissedCol").innerHTML = "No Record";
            document.getElementById("secondDayMissedCol").innerHTML = "No Record";
            console.log("1 day");
            for (var i=0; i< students.length; i++){
              var fifth = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(fifth);
              }
            }
          }
          //0 days attendance data
          else{
            document.getElementById("fifthDayMissedCol").innerHTML = students[0].absence[dataLength-1].date.toString();
            document.getElementById("fourthDayMissedCol").innerHTML = students[0].absence[dataLength-2].date.toString();
            document.getElementById("thirdDayMissedCol").innerHTML = students[0].absence[dataLength-3].date.toString();
            document.getElementById("secondDayMissedCol").innerHTML = students[0].absence[dataLength-4].date.toString();
            document.getElementById("firstDayMissedCol").innerHTML = students[0].absence[dataLength-5].date.toString();
            console.log("6 days");
            for (var i=0; i < students.length; i++){
              var fifth = document.createElement("div");
              var fourth = document.createElement("div");
              var third = document.createElement("div");
              var second = document.createElement("div");
              var first = document.createElement("div");
              if (students[i].absence[dataLength-1].status == "present"){
                var presentNode = document.createTextNode("O");
                fifth.appendChild(presentNode);
                document.getElementById("fifthDayMissedCol").appendChild(fifth);
              }
              else if (students[i].absence[dataLength-1].status =="absent"){
                var absentNode = document.createTextNode("X");
                fifth.appendChild(absentNode);
                document.getElementById("fifthDayMissedCol").appendChild(fifth);
              }
              if (students[i].absence[dataLength-2].status == "present"){
                var presentNode = document.createTextNode("O");
                fourth.appendChild(presentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fourth);
              }
              else if (students[i].absence[dataLength-2].status =="absent"){
                var absentNode = document.createTextNode("X");
                fourth.appendChild(absentNode);
                document.getElementById("fourthDayMissedCol").appendChild(fourth);
              }
              if (students[i].absence[dataLength-3].status == "present"){
                var presentNode = document.createTextNode("O");
                third.appendChild(presentNode);
                document.getElementById("thirdDayMissedCol").appendChild(third);
              }
              else if (students[i].absence[dataLength-3].status =="absent"){
                var absentNode = document.createTextNode("X");
                third.appendChild(absentNode);
                document.getElementById("thirdDayMissedCol").appendChild(third);
              }
              if (students[i].absence[dataLength-4].status == "present"){
                var presentNode = document.createTextNode("O");
                second.appendChild(presentNode);
                document.getElementById("secondDayMissedCol").appendChild(second);
              }
              else if (students[i].absence[dataLength-4].status =="absent"){
                var absentNode = document.createTextNode("X");
                second.appendChild(absentNode);
                document.getElementById("secondDayMissedCol").appendChild(second);
              }
              if (students[i].absence[dataLength-5].status == "present"){
                var presentNode = document.createTextNode("O");
                first.appendChild(presentNode);
                document.getElementById("firstDayMissedCol").appendChild(first);
              }
              else if (students[i].absence[dataLength-5].status =="absent"){
                var absentNode = document.createTextNode("X");
                first.appendChild(absentNode);
                document.getElementById("firstDayMissedCol").appendChild(first);
              }
            }
          }

          //stores all absents inside an array
          var totalAbsenceArray = new Array(students.length);
          //create element dynamically based on student classList
          for (var i=0; i < students.length; i++){
            var absentPerStudent = 0;
            //student column
            var studentCol = document.createElement("div");
            var studentName = document.createTextNode(students[i].name);
            studentCol.appendChild(studentName);
            document.getElementById("studentNameCol").appendChild(studentCol);

            //first day column
            var firstCol = document.createElement("div");
            //total days missed column
            for (var j=0; j < students[0].absence.length; j++){
              if (students[i].absence[j].status == "absent"){
                absentPerStudent++;
              }
              totalAbsenceArray[i] = absentPerStudent;
            }
            var totalCol = document.createElement("div");
            var totalAbsence = document.createTextNode(totalAbsenceArray[i]);
            totalCol.appendChild(totalAbsence);
            document.getElementById("totalDaysMissedCol").appendChild(totalCol);
          }
        }
        //console.log(fiveDaysStat);
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
    document.getElementById("statViewHidden").style.height = "420px";
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
    refresh3.innerHTML = 'No Record';
    refresh4.innerHTML = 'No Record';
    refresh5.innerHTML = 'No Record';
    refresh6.innerHTML = 'No Record';
    refresh7.innerHTML = 'No Record';
  }
  openQueryTable(){
    document.getElementById("queViewHidden").style.height = "180px";
    document.getElementById("queViewHidden").WebkitTransition = "all 1s";
    document.getElementById("queViewHidden").style.transition = "all 1s";
  }
  viewQueryStudents(){
    document.getElementById("queViewHidden").style.height = "470px";
    document.getElementById("queViewHidden").WebkitTransition = "all 1s";
    document.getElementById("queViewHidden").style.transition = "all 1s";
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
                       selected={this.state.startDate}
                       onChange={this.handleChange}
                />
              </div>
              <div>
              <h3 className={styles.queriesDirect} onClick={this.openQueryTable}>View Query Statistics</h3>
              <h3 className={styles.downloadDirect} onClick={this.downloadCSV.bind(this)}>Download CSV Data</h3>
              <h3 className={styles.statDirect} onClick={this.viewStatistics}>View Attendance Statistics</h3><br/><br/><br/>
              </div>
              <div className={styles.statisticsViewHidden} id="statViewHidden">
                <div className={styles.statTableWrapper}>
                  <form id="form1">
                    <div className={styles.divtable}>
                      <div className={styles.divtablerow}>
                        <div className={styles.divtablecol} id="studentNameCol">Student</div>
                        <div className={styles.divtablecol} id="totalDaysMissedCol">Total</div>
                        <div className={styles.divtablecol} id="firstDayMissedCol">No Record</div>
                        <div className={styles.divtablecol} id="secondDayMissedCol">No Record</div>
                        <div className={styles.divtablecol} id="thirdDayMissedCol">No Record</div>
                        <div className={styles.divtablecol} id="fourthDayMissedCol">No Record</div>
                        <div className={styles.divtablecol} id="fifthDayMissedCol">No Record</div>
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

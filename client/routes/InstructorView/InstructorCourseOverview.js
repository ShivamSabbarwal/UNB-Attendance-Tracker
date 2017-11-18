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
 import InstructorDataCell from '../CourseOverview/InstructorDataCell';

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

        //compare total student list with only clicked students
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
  }
  submitAttendance(){
    //get present student from hidden Container
    var presentStudentsUncleaned = document.getElementById("presentStudents").innerHTML;

    //need to clean student list
    presentStudentsUncleaned = presentStudentsUncleaned.substring(0, presentStudentsUncleaned.length - 1);

    //need to convert student list into an array
    var presentStudentListArray = new Array();
    presentStudentListArray = presentStudentsUncleaned.split(",");

    //compare all students vs. present student
    //then put absent students based these two arrays.
    var allStudentsUncleaned = document.getElementById("studentListUnclean").innerHTML;
    var allStudentListArray = new Array();
    allStudentListArray = allStudentsUncleaned.split(",");

    var absentStudents = [];
    for (var i=0; i<allStudentListArray.length; i++){
      if(presentStudentListArray.indexOf(allStudentListArray[i]) < 0){
        absentStudents.push(allStudentListArray[i]);
      }
    }
    //can't pass in array. need to be stringified!!!!!!!!!!!!!!
    var absentStudentsStringified = JSON.stringify(absentStudents);

    console.log("all students: "+allStudentListArray);
    console.log("present students: "+presentStudentListArray);
    console.log("absent students: "+absentStudents);
    var submissionDateString = document.getElementById("dateToday").value;
    var rfc2822Format = submissionDateString.split('/');
    var submissionDate = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);
    console.log(submissionDate);

    var courseName = document.getElementById("courseNameHidden").innerHTML
    console.log(courseName);
    //submit attendance api request
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      debugger;
      if (req.readyState == 4 && req.status == 200) {
        alert("You have submitted an attendance");
        window.location.reload();
      }
      else if (req.readyState == 4 && req.status == 400){
        alert("this was not successful!");
      }
      else if (req.readyState == 4 && req.status == 403){
        alert("bad input");
      }
    }
    var param = '{"submissionTime":"' + submissionDate + '", "absentstudents":'+ absentStudentsStringified +'}';
    req.open("PUT", "/api/course/" + courseName + "/attendance");
    req.setRequestHeader("Content-type", "application/json");
    req.send(param);
  }
  viewStatistics(){
    //get attendance statistics
    var submissionDateString = document.getElementById("dateToday").value;
    var rfc2822Format = submissionDateString.split('/');
    var submissionDate = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);
    var courseName = document.getElementById("courseNameHidden").innerHTML;
    console.log("date: "+submissionDate);
    console.log("course: "+courseName);
    console.log("/api/course/" + courseName + "/attendance?" + "date=" + submissionDate);
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      //successful
      if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        var student = response.students;
        console.log(student);
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
    document.getElementById("statViewHidden").style.height = "200px";
    document.getElementById("statViewHidden").WebkitTransition = "all 1s";
    document.getElementById("statViewHidden").style.transition = "all 1s";
  }
  closeStatTable(){
    document.getElementById("statViewHidden").style.height = "0px";
    document.getElementById("statViewHidden").WebkitTransition = "all 1s";
    document.getElementById("statViewHidden").style.transition = "all 1s";
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
              <h3 className={styles.statDirect} onClick={this.viewStatistics}>View Attendance Statistics</h3><br/><br/><br/>
              <div className={styles.statisticsViewHidden} id="statViewHidden">
                <div className={styles.mainBodyWrapper}>
                  <form id="form1">
                    <div className={styles.divtable}>
                      <div className={styles.divtablerow}>
                        <div className={styles.divtablecol}>Student Name/ID</div>
                        <div className={styles.divtablecol}>Total</div>
                        <div className={styles.divtablecol}>date</div>
                        <div className={styles.divtablecol}>date</div>
                        <div className={styles.divtablecol}>date</div>
                        <div className={styles.divtablecol}>date</div>
                        <div className={styles.divtablecol}>date</div>
                      </div>
                      <div className={styles.divtablerow}>

                      </div>
                      <div className={styles.divtablerow}>

                      </div>
                      <div className={styles.divtablerow}>

                      </div>
                    </div>
                  </form>
                  <p className={styles.closeStatViewButton} onClick={this.closeStatTable}>Close Statistics</p>
                </div>
              </div>
            <h1 className={styles.mainBodyTitle}>{courseName}</h1>
            <div className={styles.mainBodyWrapper}>
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

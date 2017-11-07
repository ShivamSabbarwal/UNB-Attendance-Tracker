import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';
import InstructorCourseIcon from '../InstructorView/InstructorCourseIcon';
import RowEntry from "./RowEntry";
import Header from "../Components/StudentHeader";
import PageNotFound from '../PageNotFound/PageNotFound';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

export function RegisterCourse(props) {
  if (isAdmin == "true" || username == "null"){
    return (
      <PageNotFound/>
    );
  }
  else {
    return (
<div>
  <Header/>
    <div className={styles.mainBody}>
    <h1 className={styles.mainBodyTitle}>Search Results</h1>

      <div className={styles.optionsContainer}>
         <input type="text" id="searchInput" name="search" placeholder="...Search Courses"/>
         <button onClick={searchCourse}>search!</button>

          <table id="searchOutput"></table>

      </div>
    </div>
    </div>
  );
  }
}

function searchCourse() {

  document.getElementById('searchOutput').innerHTML = "";
  var input = document.getElementById("searchInput").value;
  var upperCase = input.toUpperCase();
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      var courses = JSON.parse(req.responseText);
      //alert(courses.courseList.length);
      var courseAmount = courses.courseList.length;
      var outcome = [];

      outcome.push("<tr><th>" + 'Course ID' + "</th> <th>" + 'Course Name' + "</th> <th>" + 'Term' + "</th> <th>" + 'Course Time' + "</th></tr>")
      for (var j = 0; j < courseAmount; j++){

          debugger;
          var course = courses.courseList[j];
          var idIn = course[0];
          var nameIn = course[1];
          var profIn = course[2];
          var loIn = course[3];
          outcome.push("<tr><td>" + idIn + "</td>  <td>" + nameIn + "</td>  <td>" + profIn + "</td>  <td>" + loIn + "</td> <td> <button value='Register'/></td></tr>" );
          //document.getElementById('searchOutput').innerHTML += courses.courseList[j] + "<br>";
      }

      document.getElementById('searchOutput').innerHTML = outcome + "<br>";
    }
  }


  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  req.open("POST", "api/courseListSearch");
  req.setRequestHeader("Content-type", "application/json");
  var params = '{"search":"' + input + '"}';

  //document.cookie = "sessionID=84ac1438bb9def2ff804a2eb4341d791";
  req.send(params);
}

// function registerForCourse(){
//   var req = new XMLHttpRequest();
//   req.onreadystatechange = function() {
//     if (req.readyState == 4 && req.status == 200) {
//       var courses = JSON.parse(req.responseText);
//
//   req.open("PUT", "api/api/course/<Course title>/students");
//   req.setRequestHeader("Content-type", "application/json");
//   var params = '{"search":"' + input + '"}';
//
//   req.send(params)
// }

function mapStateToProps(state, props) {
  return {
    courseList: []
  };
}
function readCookie(name) {
    var nameEQ = name + "=";
    if(typeof window !== 'undefined') {
      var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
  }
    return null;
}


RegisterCourse.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(RegisterCourse);

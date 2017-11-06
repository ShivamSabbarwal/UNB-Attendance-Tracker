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

export function RegisterCourse(props) {
  return (
<div>
  <Header/>
    <div className={styles.mainBody}>
    <h1 className={styles.mainBodyTitle}>Search Results</h1>

      <div className={styles.optionsContainer}>
         <input type="text" id="searchInput" name="search" placeholder="...Search Courses"/>
         <button onClick={searchCourse}>search!</button>

          <p id="searchOutput"></p>
            <ul id="myUL">
            </ul>
      </div>
    </div>
    </div>
  );
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
      var courseUpperCase = [];
      for (var i = 0; i < courseAmount; i ++){
        courses.courseList[i] = courses.courseList[i].toUpperCase();
      }
      for (var j = 0; j < courseAmount; j++){
        if ((input != "") && (courses.courseList[j].indexOf(upperCase) > -1)){
          document.getElementById('searchOutput').innerHTML += courses.courseList[j] + "<br>";
        }

      }
    }
  };


  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  req.open("GET", "api/courseList");
  req.setRequestHeader("Content-type", "application/json");
  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";
  req.send();
}



function mapStateToProps(state, props) {
  return {
    courseList: ["SWE4103", "CS1003", "CS1073", "CS1083", "CS2043", "CS2383", "CS3383", "CS3997", "CS1303", "SWE4203", "SWE4040", "SWE4403", "STAT2593", "ECE3221", "ECE2701", "ESCI1001"]
  };
}

function logout(){
  var req = new XMLHttpRequest();

  req.open("GET", "api/logout");
  req.setRequestHeader("Content-type", "application/json");
  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

  req.onreadystatechange = function(){
    debugger;
    window.location.href="/";
  }

  req.send();
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

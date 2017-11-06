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

         <table id ="searchTable">
         <tbody>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>Professor</td>
            <td>Start/End Date </td>
            <td></td>
          </tr>
        </tbody>
         </table>


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
  var match = [];
  var req = new XMLHttpRequest();
  var params = '{"search":"' + upperCase + '"}';
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      var courses = JSON.parse(req.responseText);
      //alert(courses.courseList.length);
      var courseAmount = courses.courseList.length;
      alert(courseAmount);
      for (var i = 0; i < courseAmount; i++){
        //alert(courses.courseList[i].toUpperCase());
        /*if(courses.courseList[i].toUpperCase().indexOf(upperCase) > -1){
          match.push(courses.courseList[i]);
        }
        else{
          courses.courseList.length = courses.courseList.length - 1;
        }
        alert(match[i]);*/
        document.getElementById('searchOutput').innerHTML += courses.courseList[i] + "<br>";
      }
    }
  };

  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  req.open("GET", "api/courseList");
  req.setRequestHeader("Content-type", "application/json");
  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";
  req.send();
}

/*function myfunction() {
  debugger;
    document.getElementById("searchOutput").innerHTML = "";
    document.getElementById("myUL").innerHTML = "";
    // Declare variables
    //hard coded data
    var classes = ["SWE4103", "CS1003", "CS1073", "CS1083", "CS2043", "CS2383", "CS3383", "CS3997", "CS1303", "SWE4203", "SWE4040", "SWE4403", "STAT2593", "ECE3221", "ECE2701", "ESCI1001"];
    var input = document.getElementById("searchInput").value;
    //Change input to Upper Case
    var filter = input.toUpperCase();
    var count = classes.length;
    var match = [];
    var i,j;
    // Loop through all list items, and see how many matching items there are
    for (i = 0; i < classes.length; i++) {
        if (classes[i].toUpperCase().indexOf(filter) > -1) {
            match.push(classes[i]);
        } else {
            count = count -1;
        }
    }

    for (j = 0; j < match.length; j++) {
      var node = document.createElement("LI");
      var li =  document.createTextNode(match[j]);
      node.appendChild(li);
      document.getElementById("myUL").appendChild(node);
    }

    var text1 = document.getElementById("searchOutput");
    var text2 = document.createTextNode("You have " + count + " matching courses!");
    text1.appendChild(text2);

}*/

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

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
import Header from '../Components/Header';
import RowEntry from "./RowEntry";

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

  var input = document.getElementById("searchInput").value;
  var upperCase = input.toUpperCase();

  var req = new XMLHttpRequest();
  var params = '{"search":"' + upperCase + '"}'

  req.open("GET", "api/courseListSearch");
  req.setRequestHeader("Content-type", "application/json");
  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

  req.onreadystatechange = function() {
    debugger;
    if(req.readyState == 200) {
      var courses =  JSON.parse(req.responseText);
      alert(courses[1]);
      var outcome = [];

      /*for (int i = 0; i < courses.length; i++) {
        var course = courses[i];
        outcome.push(<RowEntry id={course.id} name={course.name} professorname={course.professorname} location={course.location} )
      }*/
      for (var i = 0; i < courses.length; i++) {
        var course = courses[i];
        outcome.push(<RowEntry id={course} name={"pending"} professorname={"pending"} location={"pending"} />);
      }
    }
    else {
      alert('Nope');
    }

  }
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

import React, { PropTypes, Component } from 'react';
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
import RegisterCourseRowEntry from './RegisterCourseRowEntry';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

class RegisterCourse extends Component{

  constructor(props) {
    super(props);
    this.state = {searchOutput: []};
  }

  componentDidMount(){
    
  }

  searchCourse() {

    //document.getElementById('searchOutput').innerHTML = "";
    var input = document.getElementById("searchInput").value;
    var upperCase = input.toUpperCase();
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        var courses = JSON.parse(req.responseText);
        //alert(courses.courseList.length);
        var courseAmount = courses.courseList.length;
        var outcome = [];
        for (var i = 0; i < courseAmount; i ++){
          //courses.courseList[i] = courses.courseList[i].toUpperCase();
        }
        for (var j = 0; j < courseAmount; j++){

            var course = courses.courseList[j];
            var idIn1 = course[0];
            var nameIn1 = course[1];
            var profIn1 = course[2];
            var loIn1 = course[3];
            outcome.push(<RegisterCourseRowEntry idIn={idIn1} nameIn={nameIn1} profIn={profIn1} loIn={loIn1} />);
            //document.getElementById('searchOutput').innerHTML += courses.courseList[j] + "<br>";


        }

        this.setState({
          searchOutput: outcome
        });
      }
    }.bind(this)

  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  req.open("POST", "api/courseListSearch");
  req.setRequestHeader("Content-type", "application/json");
  var params = '{"search":"' + input + '"}';

  //document.cookie = "sessionID=84ac1438bb9def2ff804a2eb4341d791";
  req.send(params);
}

  render(){
    if (isAdmin == "true"){
      return (
        <PageNotFound/>
      );
    }
    return(
      <div>
          <Header/>
          <div className={styles.mainBody}>
            <h1 className={styles.mainBodyTitle}>Search Results</h1>

            <div className={styles.registerContainer}>
              <input className={styles.searchBox} type="text" id="searchInput" name="search" placeholder="...Search Courses"/>
              <button onClick={this.searchCourse.bind(this)}>search!</button>
              <table className={styles.greyTable}>
              <thead>
              <tr>
              <th className={styles.thIn}>ID</th>
              <th className={styles.thIn}>Name</th>
              <th className={styles.thIn}>Professor</th>
              <th className={styles.thIn}>Location</th>
              <th className={styles.thIn}>Drop/Register</th>
              </tr>
              </thead>
              </table>

              <div id="searchOutput">{this.state.searchOutput}</div>


            </div>
          </div>
      </div>
    )
  }
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

export default RegisterCourse;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';
import StudentCourseIcon from "./StudentCourseIcon";
import Header from '../Components/StudentHeader';
import PageNotFound from '../PageNotFound/PageNotFound';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

class StudentHome extends Component{

  constructor(props){
    super(props);
    this.state = {courseIcons: []};
  }

  componentDidMount(){
    var tempCourseIcons = [];
    var courses  = [['{"name":"SWE4103"}'],
              ['{"name":"ADM1213"}'],
              ['{"name":"ECE3221"}'],
              ['{"name":"ECE2701"}'],
              ['{"name":"CS3383"}'],
              ['{"name":"TME3413"}'],
              ['{"name":"HIST3925"}']];

    for(var i = 0; i < courses.length; i++){
      var courseInfo = JSON.parse(courses[i]);
      tempCourseIcons.push(<StudentCourseIcon name={courseInfo.name} />);
    }

    this.setState({courseIcons: tempCourseIcons})
  }

  render(){
    if (isAdmin == "true" || username == "null"){
      return (
          <PageNotFound/>
      );
    }
    return(
      <div>
        <Header/>
          <div className={styles.mainBody}>
            <h1 className={styles.mainBodyTitle}>Current Courses</h1>
              <div className={styles.mainBodyWrapper}>
                {this.state.courseIcons}
              </div>
            </div>
          <div className={styles.footer}>
        <div className={styles.buttonWrapper}>
          <Link to="/register_course"><h3 className={styles.instructorButton}>Register For A Course</h3></Link>
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

function logout(){
  var req = new XMLHttpRequest();

  req.open("GET", "api/logout");
  req.setRequestHeader("Content-type", "application/json");
  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

  req.onreadystatechange = function(){
    //debugger;
    window.location.href="/";
  }

  req.send();
}

export default StudentHome;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';
import InstructorCourseIcon from './InstructorCourseIcon';
import Header from '../Components/InstructorHeader';
import PageNotFound from '../PageNotFound/PageNotFound';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

class InstructorHome extends Component{

  constructor(props){
    super(props);
    this.state = {courseIcons: []}
  }

  componentDidMount(){
    var tempCourseIcons = [];
    var courses = [['{"name":"SWE4103"}'],
            ['{"name":"CS1073"}']];

    for(var i = 0; i < courses.length; i++){
      var courseInfo = JSON.parse(courses[i]);
      tempCourseIcons.push(<InstructorCourseIcon name={courseInfo.name} />);
    }

    this.setState({
        courseIcons: tempCourseIcons
    });
  }

  render(){
      if (isAdmin == "false" || username == "null"){
        return (
          <PageNotFound/>
        );
      }
      //when a person is logged in, sessionID would exist
      return (
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
                  <Link to="/create_course"><h3 className={styles.instructorButton}>Add a Course</h3></Link>
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

export default InstructorHome;

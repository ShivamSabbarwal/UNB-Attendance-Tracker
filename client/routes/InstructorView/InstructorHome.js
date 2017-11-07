import React, { PropTypes } from 'react';
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

export function InstructorHome(props) {

  var courseIcons = [];

  for(var i = 0; i < props.courses.length; i++){
    var courseInfo = JSON.parse(props.courses[i]);
    courseIcons.push(<InstructorCourseIcon name={courseInfo.name} />);
  }
  //Justin - this is tedious. but it works
  if (isAdmin == "false"){
    return (
      <PageNotFound/>
    );
  }
  //when a person is logged in, sessionID would exist
  else{
  return (
    <div>
      <Header/>
        <div className={styles.mainBody}>
          <h1 className={styles.mainBodyTitle}>Current Courses</h1>
            <div className={styles.mainBodyWrapper}>

                {courseIcons}

            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.buttonWrapper}>
              <Link to="/create_course"><h3 className={styles.instructorButton}>Add a Course</h3></Link>
            </div>
        </div>
    </div>
  );
  }
}

// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    courses: [['{"name":"SWE4103"}'],
            ['{"name":"CS1073"}']]
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

InstructorHome.propTypes = {

};

export default connect(mapStateToProps)(InstructorHome);

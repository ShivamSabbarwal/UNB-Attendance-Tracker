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

export function InstructorHome(props) {

  var courseIcons = [];

  for(var i = 0; i < props.courses.length; i++){

    var courseInfo = JSON.parse(props.courses[i]);

    courseIcons.push(<InstructorCourseIcon name={courseInfo.name} />);

  }

  var username = readCookie("username");

  return (
    <div>

      <div className={styles.welcomeContainer}>
        <h2 className={styles.instructorName}>Welcome, {username}</h2>
        <h4 className={styles.logoutButton} onClick={logout}>Logout</h4>
        <Image className={styles.instructorPic} src={require('../../images/png/profile-pictures.png')} rounded />
      </div>

      <div className = {styles.courses}>
        {courseIcons}
      </div>

      <div className={styles.addCourseBtn}>
        <Link to="/create_course"><button>ADD A COURSE</button></Link>
      </div>
    </div>
  );
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

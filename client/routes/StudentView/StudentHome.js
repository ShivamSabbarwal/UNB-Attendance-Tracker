import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';
import StudentCourseIcon from "./StudentCourseIcon";

export function StudentHome(props) {

  var courseIcons = [];

  for(var i = 0; i < props.courses.length; i++){

    var courseInfo = JSON.parse(props.courses[i]);

    courseIcons.push(<StudentCourseIcon name={courseInfo.name} />);

  }

  var username = readCookie("username");

  return (
    <div>

      <div className={styles.welcomeContainer}>
        <h2 className={styles.instructorName}>Welcome, {username}</h2>
        <Image className={styles.instructorPic} src={require('../../images/png/profile-pictures.png')} rounded />
      </div>

      <div className = {styles.courses}>
        {courseIcons}
      </div>

      <div className={styles.addCourseBtn}>
        <Link to="/register_course"><button>REGISTER FOR A COURSE</button></Link>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

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

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    courses: [['{"name":"SWE4103"}'],
              ['{"name":"ADM1213"}'],
              ['{"name":"ECE3221"}'],
              ['{"name":"ECE2701"}'],
              ['{"name":"CS3383"}'],
              ['{"name":"TME3413"}'],
              ['{"name":"HIST3925"}']]
    //post: getPost(state, props.params.cuid),
  };
}

StudentHome.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(StudentHome);

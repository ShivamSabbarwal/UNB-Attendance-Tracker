import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';

export function InstructorCourseList(props) {
  return (
    <div>
      <Navbar style={{marginBottom:'0'}}>
        <Navbar.Header>
          <Navbar.Brand>
            UNB Attendance Service
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/instructor_home">Instructor Home</NavItem>
          <NavItem href="/instructor_home">Other thing</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/">Log out</NavItem>
        </Nav>
      </Navbar>
      <div className={styles.sidenav}>
        <Link to={'/instructor_courses'}>Courses</Link>
        <a href="#">Nothing</a>
        <a href="#">Nothing</a>
        <a href="#">Nothing</a>
      </div>
      <div className={styles.instructorCourseContainer}>
        <div className={styles.instCourseHeader}>
          <h3>UNB Course List</h3>
          <p id = "testp" onLoad={test}>test</p>
        </div>

        <div className={styles.instCourseListContainer}>
          <table className={styles.instCourseList}>
            <tr>
              <td className={styles.courseNum}>Course Number</td>
              <td className={styles.courseName}>Course Name</td>
            </tr>
            <tr>
              <a href="/course_overview">
              <td>SWE4103</td>
              </a>
              <td>Software Quality and Project Management</td>

            </tr>
            <tr>
              <td>CS3413</td>
              <td>Operating System I</td>
            </tr>
            <tr>
              <td>ECE3221</td>
              <td>Computer Organization</td>
            </tr>
            <tr>
              <td>SWE4040</td>
              <td>Software Engineering Design Project</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

//when directed to this site, make xmlhttprequest to get course list.
function test(){
  var req = new XMLHttpRequest();
  req.open("GET", "api/courseList");
  //test to see if a fucntion is called on onLoad
  document.getElementById("testp").innerHTML = "test";
}
//var req = new XMLHttpRequest();
//alert(req.open("GET", api.courseList));



// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}

InstructorCourseList.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(InstructorCourseList);

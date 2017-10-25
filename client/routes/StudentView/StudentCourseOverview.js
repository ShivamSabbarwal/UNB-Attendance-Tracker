import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import CourseGrid from '../CourseOverview/CourseGrid';
// Import Style
import styles from '../../main.css';


export function StudentCourseOverview(props) {
debugger;
  var courseName = props.location.search;
  courseName = courseName.split("=")[1];

  var height = props.grid.length;
  var width = props.grid[0].length;

  return (
<div>

    <div className={styles.welcomeContainer}>
      <h2 className={styles.instructorName}>{courseName} Course Grid</h2>
      <Link to={"/student_home"}><h4>Home</h4></Link>
    </div>

    <div className={styles.courseGrid}>

      <CourseGrid name={courseName} grid={props.grid}/>

    </div>

    <div className={styles.reserveSeatBtn}>
     <button> RESERVE SEAT </button>
    </div>
  </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return{
    grid: [["", "Tony", "", "", "", "", "", "", "Shiv", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "Tristen", "", "", "", "", ""],
  ["", "Jean-Marc", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "Justin", ""],
  ["", "", "Jacob", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]]
};
}

StudentCourseOverview.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(StudentCourseOverview);

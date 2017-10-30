import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import CourseGrid from '../CourseOverview/CourseGrid';
// Import Style
import styles from '../../main.css';
import Header from '../Components/Header';

export function StudentCourseOverview(props) {
debugger;
  var courseName = props.location.search;
  courseName = courseName.split("=")[1];

  var height = props.grid.length;
  var width = props.grid[0].length;

  return (
<div>
    <Header/>
    <div className={styles.mainBody}>
      <h1 className={styles.mainBodyTitle}>{courseName}</h1>
        <div className={styles.mainBodyWrapper}>
          <div className={styles.courseGrid}>
            <CourseGrid name={courseName} grid={props.grid}/>
          </div>
        </div>
      </div>

    <div className={styles.footer} >
        <div className={styles.buttonWrapper}>
          <Link to="/create_course"><h3 className={styles.instructorButton}>Reserve Seat</h3></Link>
        </div>
    </div>
  </div>
  );
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
  ["", "", "", "", "", "", "", "", "", ""],
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

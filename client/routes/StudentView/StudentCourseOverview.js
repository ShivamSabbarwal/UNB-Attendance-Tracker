import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import CourseGrid from '../CourseOverview/CourseGrid';
// Import Style
import styles from '../../main.css';
import Header from '../Components/StudentHeader';

class StudentCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: []};
  }

  componentDidMount(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];

    var grid = [["", "Tony", "", "", "", "", "", "", "Shiv", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "Tristen", "", "", "", "", ""],
  ["", "Jean-Marc", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "Justin", ""],
  ["", "", "Jacob", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]];

  var output = <CourseGrid name={courseName} grid={grid}/>;

  this.setState({
    courseGrid: output
  })

  }

  render(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];

    return(
      <div>
        <Header/>
          <div className={styles.mainBody}>
            <h1 className={styles.mainBodyTitle}>{courseName}</h1>
              <div className={styles.mainBodyWrapper}>
                <div className={styles.courseGrid}>
                  {this.state.courseGrid}
                </div>
              </div>
            </div>

          <div className={styles.footer} >
              <div className={styles.buttonWrapper}>
                <Link to="/student_home"><h3 className={styles.instructorButton}>Reserve Seat</h3></Link>
              </div>
          </div>
      </div>
    )
  }

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

export default StudentCourseOverview;

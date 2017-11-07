import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl, Form, Col, Button, Image} from 'react-bootstrap';


import SvgIcon from 'react-icons-kit';
// Import Style
import styles from '../../main.css';
import Header from '../Components/InstructorHeader';
import PageNotFound from '../PageNotFound/PageNotFound';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");


export function CreateCourse(props) {

  //Justin - this is tedious. but it works
  if (isAdmin == "false" || username == "null"){
    return (
        <PageNotFound/>
    );
  }
  else{
  return (
    <div>
      <Header/>
      <div className={styles.mainBody}>
        <h1 className={styles.mainBodyTitle}>New Course Creation Form</h1>
          <div className={styles.mainBodyWrapper}>
            <div className={styles.formContainer}>
              <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Rows:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter the number of rows" id="gridRows"/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Columns:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter the number of columns" id="gridCols"/>
                  </Col>
                </FormGroup>
                <h3 className={styles.createGridButton} onClick={createGrid}>Show Grid</h3>
                <h4 className={styles.legendLabel}>Legend:
                            <label className={styles.legendLabel}><label className={styles.openSeatsIcon}>open</label>Open Seats</label>
                            <label className={styles.legendLabel}><label className={styles.closedSeatsIcon}>closed</label>Closed Seats</label>
                            <label className={styles.legendLabel}><label className={styles.auditableSeatsIcon}>auditable</label>Auditable Seats</label>
                </h4>
                <div id="gridWrapper"></div>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Course Name:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter course name" id="title"/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Professor Name:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter course instructor name" id="professor"/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Institution:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter name of the institution" id="institution"/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                    Location:
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter the room number where the lecture takes place in" id="location"/>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.buttonWrapper}>
              <h3 className={styles.instructorButton} onClick={submit}>Create a Course</h3>
            </div>
        </div>
    </div>
  );
  }
}

function createGrid(){
  var rows = document.getElementById('gridRows').value;
  var cols = document.getElementById('gridCols').value;
  var theader = '<table style="margin: 0 auto";>\n';
  var tbody = '';
  for (var i = 0; i < rows; i++){
    tbody += '<tr>';
    for (var j = 0; j < cols; j++){
      tbody += '<td style="background-color: white; width: 140px; height: 60px; border-width: 10px; border-color: #d9d9d9;">';
      tbody += '';//content;
      tbody += '</td>'
    }
    tbody += '</tr>\n';
  }
  var tfooter = '</table>';
  document.getElementById('gridWrapper').innerHTML = theader + tbody + tfooter;
}
function submit(){
  //creates variable to be passed in
  var courseName = document.getElementById("title").value;
  var prof = document.getElementById("professor").value;
  var inst = document.getElementById("institution").value;
  var room = document.getElementById("location").value;
  var row = document.getElementById('gridRows').value;
  var col = document.getElementById('gridCols').value;
  //xml request
  var req = new XMLHttpRequest();

  var params = '{"title":"' + courseName + '", "professor":"' + prof + '", "usernames":" ", "institution":"' + inst + '", "location":"' + room + '"}';
  req.open("POST", "api/course");
  req.setRequestHeader("Content-type", "application/json");
  //403 - not enough data provided / course already exists / title contains characters other than letter, numbers, -, _ and .
  //200 - course created successfully
  //above comments need to be implemented
  alert(courseName + " has been created successfully!");
  req.send(params);
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

CreateCourse.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(CreateCourse);

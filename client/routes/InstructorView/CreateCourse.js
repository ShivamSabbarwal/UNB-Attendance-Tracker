import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl, Form, Col, Button, Image} from 'react-bootstrap';
import CreateCourseGrid from './CreateCourseGrid';

import SvgIcon from 'react-icons-kit';
// Import Style
import styles from '../../main.css';
import Header from '../Components/InstructorHeader';
import PageNotFound from '../PageNotFound/PageNotFound';

var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

class CreateCourse extends Component{

  constructor(props){
    super(props);
    this.state = {gridWrapper: [], grid: []};
  }
  componentDidMount(){

  }

  render(){
    if (isAdmin == "false" || username == "null"){
      return (
          <PageNotFound/>
      );
    }
    return(
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
                  <h3 className={styles.createGridButton} onClick={createGrid.bind(this)}>Show Grid</h3>
                  <h4 className={styles.legendLabel}>Legend:
                              <label className={styles.legendLabel}><label className={styles.openSeatsIcon}>open</label>Open Seats</label>
                              <label className={styles.legendLabel}><label className={styles.closedSeatsIcon}>closed</label>Closed Seats</label>
                              <label className={styles.legendLabel}><label className={styles.auditableSeatsIcon}>auditable</label>Auditable Seats</label>
                  </h4>
                  <div id="gridWrapper" style={{marginBottom:"20px"}}>{this.state.grid}</div>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Course ID:
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Enter course ID" id="title"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Course Term:
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Enter the course term (fall, winter, summer)" id="term"/>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Your Email Format
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="example@unb.ca" id="emailFormat"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Notification to Students For Days Missed
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Enter some integer number!" id="numIn"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Lecture Time
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Ex: 10:30-11:20" id="timeIn"/>
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
    )
  }
}


function createGrid(){

  var rows = document.getElementById('gridRows').value;
  var cols = document.getElementById('gridCols').value;

  if (!rows || !cols ) {
    alert("Please type interger input! XD");
    return;
  }


  var output = <CreateCourseGrid rowIn={rows} colIn={cols}/>;
  this.setState({grid:output});

  /*
  var theader = '<table style="margin: auto";>\n';
  var tbody = '';
  for (var i = 0; i < rows; i++){
    tbody += '<tr>';
    for (var j = 0; j < cols; j++){
      tbody += '<td id="createGridCell[i][j]" value="R" onClick={change} style="background-color: white; width: 140px; height: 60px; border-width: 10px; border-color: #d9d9d9;">';
      tbody += '<span id="CAO" style=""></span>';//content;
      tbody += '</td>'
    }
    tbody += '</tr>\n';
  }
  var tfooter = '</table>';
  document.getElementById('gridWrapper').innerHTML = theader + tbody + tfooter;
  */
}

//1 click - closed Seat
//2 click - auditable Seat
//3 click - back to open seat
function change() {
  var rows = document.getElementById('gridRows').value;
  var cols = document.getElementById('gridCols').value;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var x = document.getElementById("createGridCell[i][j]");
      var y = x.getAttribute("value");

      if(y == "R") {
        x.setAttribute("value", "C");
        x.innerHTML ="C";
      }

      else if (y == "C") {
        x.setAttribute("value", "A");
        x.innerHTML ="A";
      }

      else {
        x.setAttribute("value", "R");
        x.innerHTML ="R";
      }

    }
  }
}


function submit(){
  //creates variable to be passed in
  var courseName = document.getElementById("title").value;
  var termIn = document.getElementById("term").value;
  var idIn = document.getElementById("id").value;
  var email = document.getElementById("emailFormat").value;
  var numberIn = document.getElementById("numIn").value;
  var time = document.getElementById("timeIn").value;
  var row = document.getElementById('gridRows').value;
  var col = document.getElementById('gridCols').value;

  //xml request
  var req = new XMLHttpRequest();

  var params = '{"title":"' + courseName + '", "term":"' + termIn + '", "gridsize":"[' + row + ',' + col + ']", "time":"' + timeIn + '", "courseGrid":"' +"" + '", "emailTemplate":"' + emailFormat + '", "numDays":"' + numIn+'"}';
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

export default CreateCourse;

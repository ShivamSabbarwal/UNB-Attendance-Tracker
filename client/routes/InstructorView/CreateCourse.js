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
    document.addEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e){
    if(e.keyCode == 13){
      submit();
    }
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
                  <FormGroup >
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Your Email Format
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Hello, [username]!" id="emailFormat"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={3} className={styles.controlLabel}>
                      Notification to Students For Days Missed
                    </Col>
                    <Col sm={9}>
                      <FormControl type="text" placeholder="Enter some integers number"id="numIn"/>
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
//1 click - closed Seat
//2 click - auditable Seat
//3 click - back to open seat
function createGrid(){

  var count = 0;

  var row = document.getElementById('gridRows').value;
  var col = document.getElementById('gridCols').value;
  if (!row || !col ) {
    alert("Please type interger input!");
    return;
  }

  if(isNaN(+row) || isNaN(+col)) {
    alert('Please only Type integer number!');
    return;
  }
  var output = <CreateCourseGrid rowIn={row} colIn={col}/>;
  this.setState({grid:output});

}



function submit(){
  //creates variable to be passed in
   var courseName = document.getElementById("title").value;
   var termIn = document.getElementById("term").value;
   var email = document.getElementById("emailFormat").value;
   var numIn = document.getElementById("numIn").value;
   var time = document.getElementById("timeIn").value;
   var row = document.getElementById('gridRows').value;
   var col = document.getElementById('gridCols').value;

   var grid = [];

   //Handling Error
   if (!courseName ) {
     alert("Please type your course ID Please!");
     return;
   }
   else if (!termIn){
     alert("Please type your term Please!");
     return;
   }
   else if (!email) {
     alert("Please type your email Please!");
     return;
   }

   else if (!grid) {
     alert("Please Check your grid!");
     return;
   }

   else if (!row || !col ) {
     alert("Please type interger input!");
     return;
   }

   else if (!numIn) {
     alert("Please type your notification number Please!");
     return;
   }


   //Parsing for number of days Missed
   var numbers = numIn.split(",");

   //Getting Grid for input
   for (var i = 0; i < row; i++){
     grid[i] = [];
     for (var j = 0; j < col; j++) {
       var cellRead = document.getElementById(i+''+j);
       if (cellRead.className.includes(styles.courseGridCell)) {
         grid[i][j] = "";
       }

       else if (cellRead.className.includes(styles.closedSeat)) {
         grid[i][j] = "-1";
       }

       else {
         grid[i][j] = "-2";
       }
     }
   }

  var gridIn = JSON.stringify(grid);
  var numberIn = JSON.stringify(numbers);
  var size = []
  size[0] = row;
  size[1] = col;
  var sizeIn = JSON.stringify(size);


  //xml request
  var req = new XMLHttpRequest();
  //NOT COMPLETE
  var params = '{"title":"' + courseName + '", "term":"' + termIn + '", "gridsize":'+ sizeIn+ ', "time":"' + time + '", "courseGrid":' + gridIn + ', "emailTemplate":"' + email + '", "numDays":' + numberIn+ '}';
  console.log(params);
  req.open("POST", "api/course");
  req.setRequestHeader("Content-type", "application/json");
  //403 - not enough data provided / course already exists / title contains characters other than letter, numbers, -, _ and .
  //200 - course created successfully
  //above comments need to be implemented
  req.onreadystatechange = function(){
    if (req.readyState == 4 && req.status == 200) {
        alert(courseName + " has been created successfully!");
        window.location.href ="/instructor_home";
    }
    else if(req.readyState == 4 && req.status == 403){
      alert('Input Error');
    }
  }
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

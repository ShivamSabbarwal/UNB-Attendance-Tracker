import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, ControlLabel, FormControl, Form, Col, Button} from 'react-bootstrap';


import SvgIcon from 'react-icons-kit';
// Import Style
import styles from '../../main.css';

export function CreateCourse(props) {
  return (
    <div>
      <div>
        <Navbar>
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
      </div>
      <div className={styles.sidenav}>
        <Link to={'/instructor_courses'}>Courses</Link>
        <a href="#">Nothing</a>
        <a href="#">Nothing</a>
        <a href="#">Nothing</a>
      </div>
      <div className={styles.formContainer}>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Course Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter course name" id="title"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Professor Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter course instructor name" id="professor"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Institution
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter name of the institution" id="institution"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Location
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter the room number where the lecture takes place in" id="location"/>
            </Col>
          </FormGroup>
          <FormGroup>
           <Col smOffset={2} sm={10}>
             <Button type="submit" onClick={submit}>
               Create
             </Button>
           </Col>
         </FormGroup>
        </Form>
      </div>
    </div>
  );
}

function submit(){
  //creates variable to be passed in
  var courseName = document.getElementById("title").value;
  var prof = document.getElementById("professor").value;
  var inst = document.getElementById("institution").value;
  var room = document.getElementById("location").value;

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

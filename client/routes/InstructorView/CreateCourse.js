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
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles.formContainer}>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Course Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter course name" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Professor Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter course instructor name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Institution
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter name of the institution" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Location
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Enter location of the institution" />
            </Col>
          </FormGroup>
          <FormGroup>
           <Col smOffset={2} sm={10}>
             <Button type="submit">
               Create
             </Button>
           </Col>
         </FormGroup>
        </Form>
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

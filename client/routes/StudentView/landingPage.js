import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
// Import Style
import styles from '../../main.css';

export function StudentHome(props) {
  return (
    <div>
      <Navbar style={{marginBottom:'0'}}>
        <Navbar.Header>
          <Navbar.Brand>
            UNB Attendance Service
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Student Home</NavItem>
          <NavItem href="#">Other thing</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/">Log out</NavItem>
        </Nav>
      </Navbar>
      <div className={styles.sidenav}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div className={styles.welcomeContainer}>
        <h2 className={styles.instructorName}>Welcome, Justin Lee</h2>
        <Image className={styles.instructorPic} src={require('../../images/png/profile-pictures.png')} rounded />
      </div>
      <div>
        <h1>This is a student page!</h1>
            <ul className ={styles.ulStyle}>
              <Link to={'/register_course'}>
                <li>Register and Search for classes</li>
              </Link>
                <li >View My Courses</li>
            </ul>

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

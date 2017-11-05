import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from '../../main.css';

export function InstructorHeader(props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerNav}>
        <h4 className={styles.logout} onClick={logout}>Logout</h4>
        <Link to={"/instructor_home"}><h4 className={styles.home}>Home</h4></Link>
      </div>
      <h1 className={styles.headerTitle}>UNB Attendance Services</h1>
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
function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}
InstructorHeader.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};
export default connect(mapStateToProps)(InstructorHeader);

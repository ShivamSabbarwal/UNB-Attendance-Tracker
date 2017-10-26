import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
import Background from "../../images/png/books.png";
import CloseButton from "../../images/png/close2.png";
// Import Style
import styles from '../../main.css';

export function CourseIcon(props) {

  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")"
  };

  return (
    <div className={styles.courseIcon} style = {backgroundStyle}>
        <Link to={'/course_overview_inst/?name=' + props.name}><label className={styles.courseTitle}> {props.name} </label></Link>
        <button className={styles.removeCourse}>&#10006;</button>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    courses: [['{"name":"SWE4103"}'],
              ['{"name":"ADM1213"}'],
              ['{"name":"ECE3221"}'],
              ['{"name":"ECE2701"}'],
              ['{"name":"CS3383"}'],
              ['{"name":"TME3413"}'],
              ['{"name":"HIST3925"}']]
    //post: getPost(state, props.params.cuid),
  };
}

CourseIcon.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(CourseIcon);

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
import Background from "../../images/png/books.png";
// Import Style
import styles from '../../main.css';

class StudentCourseIcon extends Component{

  constructor(props){
    super(props);
    this.state = {courses: []};
  }

  componentDidMount(){
    this.setState({
      courses: [['{"name":"SWE4103"}'],
                ['{"name":"ADM1213"}'],
                ['{"name":"ECE3221"}'],
                ['{"name":"ECE2701"}'],
                ['{"name":"CS3383"}'],
                ['{"name":"TME3413"}'],
                ['{"name":"HIST3925"}']]
    });
  }

  render(){

    var backgroundStyle = {
      backgroundImage: "url(" + Background + ")"
    };

    return(
      <div className={styles.courseIcon}>
          <button className={styles.removeCourse}>&#10006;</button>
          <div className={styles.courseIconBackground}></div>
          <div className={styles.courseNameWrapper}><Link to={'/course_overview_stu/?name=' + this.props.name}><label className={styles.courseTitle}> {this.props.name} </label></Link></div>
      </div>
    )
  }

}

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

export default StudentCourseIcon;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaBeer from 'react-icons/lib/fa/edit';
import Background from "../../images/png/books.png";
//confirmation box
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';
// Import Style
import styles from '../../main.css';

class StudentCourseIcon extends Component{

  constructor(props){
    super(props);
    this.state = {courses: []};

  }
  componentDidMount(){

  }

  removeCourse = () => {
    debugger;
    confirmAlert({
      title: 'Drop Course',
      message: 'Are you sure to drop '+this.props.name+'?',
      confirmLabel: 'Confirm',
      cancelLabel: 'Cancel',
      onConfirm: function(){
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
          if (req.readyState == 4 && req.status == 200) {
            window.location.reload();
          }
        }
        req.open("DELETE", "api/course/" + this.props.name + "/students");
        req.setRequestHeader("Content-type", "application/json");
        var params = '{"students":[""]}';

        req.send(params);
      }.bind(this),
    })
  };
  render(){

    var backgroundStyle = {
      backgroundImage: "url(" + Background + ")"
    };

    return(
      <Link to={'/course_overview_inst/?name=' + this.props.name}>
      <div className={styles.courseIcon}>
          <button onClick={this.removeCourse.bind(this)} className={styles.removeCourse}>&#10006;</button>
          <div className={styles.courseIconBackground}></div>
          <div className={styles.courseNameWrapper}><Link to={'/course_overview_stu/?name=' + this.props.name}><label className={styles.courseTitle}> {this.props.name} </label></Link></div>
      </div>
      </Link>
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

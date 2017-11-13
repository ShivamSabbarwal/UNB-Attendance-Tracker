import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from '../../main.css';


var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");

class InstructorHeader extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className={styles.header}>
        <div className={styles.headerNav}>
          <h4 className={styles.logout} onClick={logout}>Logout</h4>
          <Link to={"/instructor_home"}><h4 className={styles.home}>Home</h4></Link>
        </div>
        <h1 className={styles.headerTitle}>UNB Attendance Services</h1>
      </div>
    )
  }

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
  var sessionID = "sessionID=" + readCookie("sessionID");
  var req = new XMLHttpRequest();
  req.open("GET", "api/logout");
  document.cookie = "isAdmin=" + null;
  document.cookie = "username=" + null;

  //these two function allows cookie to be set inside the header
  //req.crossDomain = true;
  //req.withCredentials = true;

  req.setRequestHeader("Content-type", "application/json");
  //sene cookie to the header
  //req.setRequestHeader("Cookie", sessionID);
  req.onreadystatechange = function(){
    //debugger;
    if (req.readyState == 4 && req.status == 200){
      window.location.href="/";
    }
  }
  req.send();
}

export default InstructorHeader;

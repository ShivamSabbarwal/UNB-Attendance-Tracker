import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Checkbox, Col, ControlLabel,Form, FormGroup, FormControl, Glyphicon, HelpBlock, InputGroup, Radio } from 'react-bootstrap';


// Import Style
import styles from '../../main.css';

class Signup extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className={styles.page}>
        <div className={styles.Container}>
          <div className={styles.user}>
            <div className={styles.userHeader}>
              <h3 className={styles.userTitle}>Sign-up to use <span className={styles.appName}>UNB Attendance Service</span></h3>
              <form className={styles.form}>
                <input className={styles.input} type="text" name="username" id="username" placeholder="Username" />
                  <input className={styles.input} type="password" name="password" id="password" placeholder="Password" />
                  <input className={styles.email} type="email" name="Email" id="email" placeholder="Your Email" />
                  <label className={styles.emailTag}>(@unb.ca)</label>
              </form>
              <button className={styles.btn} onClick={submit}>Register</button>
            </div>
            <div className={styles.underBar}>
              <label>Already a User? <Link to={''}>Login Here</Link> </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function submit(){
  debugger;
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  var req = new XMLHttpRequest();

  var params = '{"username":"' + user + '", "password":"' + pass + '", "email":"' + email + '", "isAdmin":"false"}';

  req.open("POST", "api/signup");
  req.setRequestHeader("Content-type", "application/json");
  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

  req.onreadystatechange = function(){
    debugger;
    if(req.readyState == 4 && req.status == 200) {
	     document.cookie = "isAdmin=false";
		   window.location.href = "/student_home";
    }
  }

  req.send(params);

}

export default Signup;

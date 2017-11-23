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
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keypress", this.handleKeyPress.bind(this));
  }
  handleKeyDown(e){
    if(e.keyCode == 13){
      submit();
    }
  }
  //shift l -> login
  handleKeyPress(e){
    if (e.shiftKey && e.charCode == 76){
      window.location.href = '/';
    }
  }
  render(){
    return(
      <div className={styles.page}>
        <div className={styles.errorMessageWithBox}>
          <div className={styles.errorBoxTemplate} id="errorTemplateBox">holds height</div>
          <div className={styles.noInput} id="inputError">Do not leave input fields empty</div>
          <div className={styles.authenticationError} id="idTakenError">Username or email is already taken!</div>
          <div className={styles.successfulLogin} id="successfulError">Welcome to UNB Attendance Service!</div>
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
      document.getElementById("successfulError").style.visibility = "visible";
      document.getElementById("successfulError").style.display = "block";

      document.getElementById("errorTemplateBox").style.visibility = "hidden";
      document.getElementById("errorTemplateBox").style.display = "none";

      document.getElementById("inputError").style.visibility = "hidden";
      document.getElementById("inputError").style.display = "none";

      document.getElementById("idTakenError").style.visibility = "hidden";
      document.getElementById("idTakenError").style.display = "none";
       window.location.href = "/";
		}
    else if((req.readyState == 4 && req.status == 403) && (user == "" || pass == "" || email == "")) {
      document.getElementById("errorTemplateBox").style.visibility = "hidden";
      document.getElementById("errorTemplateBox").style.display = "none";

      document.getElementById("inputError").style.visibility = "visible";
      document.getElementById("inputError").style.display = "block";

      document.getElementById("idTakenError").style.visibility = "hidden";
      document.getElementById("idTakenError").style.display = "none";
		}
    else if((req.readyState == 4 && req.status == 403) && (user != "" && pass != "" && email != "")) {
      document.getElementById("errorTemplateBox").style.visibility = "hidden";
      document.getElementById("errorTemplateBox").style.display = "none";

      document.getElementById("inputError").style.visibility = "hidden";
      document.getElementById("inputError").style.display = "none";

      document.getElementById("idTakenError").style.visibility = "visible";
      document.getElementById("idTakenError").style.display = "block";
		}
  }

  req.send(params);
}

export default Signup;

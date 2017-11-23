import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {Link} from 'react-router';
// Import Style
import styles from '../../main.css';
import PageNotFound from '../PageNotFound/PageNotFound';
var username = readCookie("username");
var sessionID = readCookie("sessionID");
var isAdmin = readCookie("isAdmin");
var isNull = null;
class Login extends Component{


  constructor(props){
    super(props);
  }

  componentDidMount(){
      document.addEventListener("keypress", this.handleKeyPress);
      document.addEventListener("keydown", this.handleKeyDown);
      document.cookie = "isAdmin="+ isNull;
      document.cookie = "sessionID="+ isNull;
      document.cookie = "username="+ isNull;
      console.log("isAdmin: " + readCookie("isAdmin"));
      console.log("sessionID: "+ readCookie("sessionID"));
      console.log("username: "+ readCookie("username"));
  }

  //shift register -> register UAT
  handleKeyPress(e){
    if (e.shiftKey && e.charCode == 82){
      window.location.href = '/signup';
    }
  }
  //login
  handleKeyDown(e){
    if(e.keyCode == 13){
      submit();
    }
  }
  render(){
    return(
      <div className={styles.page}>
        <div className={styles.errorMessageWithBox}>
          <div className={styles.errorBoxTemplate} id="errorTemplateBox">holds height</div>
          <div className={styles.noInput} id="inputErrorBox">Do not leave username or password field empty</div>
          <div className={styles.authenticationError} id="authenticationErrorBox">Invalid username or password</div>
          <div className={styles.successfulLogin} id="successfulBox">Successful Login!</div>
          <div className={styles.Container}>
            <div className={styles.user}>
              <div className={styles.userHeader}>
                <h3 className={styles.userTitle}>Login to <span className={styles.appName}>UNB Attendance Services</span></h3>
                <form className={styles.form}>
                  <input className={styles.input} id="username" placeholder="Username"/>
                  <input className={styles.input} id="password" placeholder="Password" type="password"/>
                </form>
                <button type="submit" className={styles.btn} onClick={submit}> Submit</button>
              </div>
              <div className={styles.underBar}>
                <label>New User? <Link to={'/signup'}>Register Here</Link></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function submit(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  var req = new XMLHttpRequest();

  var params = '{"username":"' + user + '", "password":"' + pass + '"}';

  req.open("POST", "api/login");
  req.setRequestHeader("Content-type", "application/json");
  req.onreadystatechange = function(){
    //successful login
    if(req.readyState == 4 && req.status == 200) {
       document.getElementById("successfulBox").style.visibility = "visible";
       document.getElementById("successfulBox").style.display = "block";

       document.getElementById("errorTemplateBox").style.visibility = "hidden";
       document.getElementById("errorTemplateBox").style.display = "none";

       document.getElementById("inputErrorBox").style.visibility = "hidden";
       document.getElementById("inputErrorBox").style.display = "none";

       document.getElementById("authenticationErrorBox").style.visibility = "hidden";
       document.getElementById("authenticationErrorBox").style.display = "none";

	     var serverResponse = JSON.parse(req.responseText);
	     document.cookie = "isAdmin=" + serverResponse.isAdmin + "";
       document.cookie = "username=" + serverResponse.username + "";
	     if(serverResponse.isAdmin){
		       window.location.href = "/instructor_home";
	     }else{
		       window.location.href = "/student_home";
	     }
    }
    //empty input group, warning
    if(req.readyState == 4 && req.status == 403){
      if (user == "" || pass == ""){
        document.getElementById("errorTemplateBox").style.visibility = "hidden";
        document.getElementById("errorTemplateBox").style.display = "none";

        document.getElementById("inputErrorBox").style.visibility = "visible";
        document.getElementById("inputErrorBox").style.display = "block";

        document.getElementById("authenticationErrorBox").style.visibility = "hidden";
        document.getElementById("authenticationErrorBox").style.display = "none";
      }
    }
    //unauthorized validation, error
    else if (req.readyState == 4 && req.status == 401){
      document.getElementById("errorTemplateBox").style.visibility = "hidden";
      document.getElementById("errorTemplateBox").style.display = "none";

      document.getElementById("authenticationErrorBox").style.visibility = "visible";
      document.getElementById("authenticationErrorBox").style.display = "block";

      document.getElementById("inputErrorBox").style.visibility = "hidden";
      document.getElementById("inputErrorBox").style.display = "none";
    }
  }
  req.send(params);

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

export default Login;

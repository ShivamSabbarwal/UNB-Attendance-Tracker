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
console.log("username: "+ username);
console.log("sessionID: "+ sessionID);
console.log("isAdmin: "+isAdmin);

class Login extends Component{

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
              <h3 className={styles.userTitle}>Login to <span className={styles.appName}>UNB Attendance Services</span></h3>
              <form className={styles.form}>
                <input className={styles.input} id="username" placeholder="Username"/>
                <input className={styles.input} id="password" placeholder="Password" type="password"/>
              </form>
              <button className={styles.btn} onClick={submit}> Submit </button>
            </div>
            <div className={styles.underBar}>
              <label>New User? <Link to={'/signup'}>Register Here</Link> </label>
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
    if(req.readyState == 4 && req.status == 200) {
	     var serverResponse = JSON.parse(req.responseText);
	     document.cookie = "isAdmin=" + serverResponse.isAdmin + "";
       document.cookie = "username=" + serverResponse.username + "";
	     if(serverResponse.isAdmin){
		       window.location.href = "/instructor_home";
	     }else{
		       window.location.href = "/student_home";
	     }
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

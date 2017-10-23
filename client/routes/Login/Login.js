import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {Link} from 'react-router';
// Import Style
import styles from '../../main.css';

export function Login(props) {
  return (
    <div className={styles.page}>
      <div className={styles.Container}>
        <div className={styles.user}>
          <div className={styles.userHeader}>
            <h3 className={styles.userTitle}>Login to <span className={styles.appName}>UNB Attendance Services</span></h3>
            <form className={styles.form}>
              <input className={styles.input} id="username" placeholder="Username"/>
              <input className={styles.input} id="password" placeholder="Password" type="password"/>
              <button className={styles.btn} onClick={submit}> Submit </button>
            </form>
          </div>
          <div className={styles.underBar}>
            <label>New User? <Link to={'/signup'}>Register Here</Link> </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function submit(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  var req = new XMLHttpRequest();

  var params = '{"username":"' + user + '", "password":"' + pass + '"}';

  req.open("POST", "api/login");
  req.setRequestHeader("Content-type", "application/json");
  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

  req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200) {
	var serverResponse = JSON.parse(req.responseText);
	document.cookie = "isAdmin=" + serverResponse.isAdmin + "";
	if(serverResponse.isAdmin){
		window.location.href = "/instructor_home";
	} else{
		window.location.href = "/student_home";
	}
    }
  }

  req.send(params);

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

Login.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(Login);

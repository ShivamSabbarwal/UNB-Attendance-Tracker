import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './style.css';

export function Login(props) {
  return (
    <div className={styles.Page}>
      <div className={styles.Container}>
        <div className={styles.Login}>
          <h3>Login to UNB Attendance Services</h3>
          <input className={styles.Input} id="username" placeholder="Username"/>
          <br/>
          <input className={styles.Input} id="password" placeholder="Password"/>
          <br/>
          <button className={styles.Submit} onClick={submit}> Submit </button>
        </div>    
        <div className={styles.Signup}>
          <label>New User? <a href="#">Register Here</a>. </label>
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
        alert(window.location.pathname);
        window.location.href = "/home";
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

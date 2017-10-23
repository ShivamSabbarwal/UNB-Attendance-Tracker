import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Checkbox, Col, ControlLabel,Form, FormGroup, FormControl, Glyphicon, HelpBlock, InputGroup, Radio } from 'react-bootstrap';


// Import Style
import styles from '../../main.css';

export function Signup(props) {
  return (
    <div className={styles.page}>
      <div className={styles.Container}>
        <div className={styles.user}>
          <div className={styles.userHeader}>
            <h3 className={styles.userTitle}>Sign-up to use <span className={styles.appName}>UNB Attendance Service</span></h3>
            <form className={styles.form}>
              <input className={styles.input} type="text" name="username" id="username" placeholder="Username" />
                <input className={styles.input} type="password" name="password" id="password" placeholder="Password" />
                <input className={styles.input} type="email" name="Email" id="email" placeholder="Your Email" />
                <button className={styles.btn}>Register</button>
            </form>
          </div>
          <div className={styles.underBar}>
            <label>Already a User? <Link to={''}>Login Here</Link> </label>
          </div>
        </div>
      </div>
    </div>
  );
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

Signup.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(Signup);

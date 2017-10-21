import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Checkbox, Col, ControlLabel,Form, FormGroup, FormControl, Glyphicon, HelpBlock, InputGroup, Radio } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

// Import Style
import styles from '../../main.css';

export function Signup(props) {
  return (
    <div className={styles.page}>
      <div className={styles.signupContainer}>
        <div className={styles.user}>
          <div className={styles.user__header}>
            <h3 className={styles.user__title}>Sign-up to use <span className={styles.unb}>UNB Attendance Service</span></h3>
            <form className={styles.form}>
              <div className={styles.form__group}>
                <input className={styles.form__input} type="text" name="username" id="username" placeholder="Username" />
              </div>
              <div className={styles.form__group}>
                <input className={styles.form__input} type="password" name="password" id="password" placeholder="Password" />
              </div>
              <div className={styles.form__group}>
                <input className={styles.form__input} type="email" name="Email" id="email" placeholder="Your Email" />
              </div>
              <div className={styles.form__group}>
                <button className={styles.btn}>Register</button>
              </div>
            </form>
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

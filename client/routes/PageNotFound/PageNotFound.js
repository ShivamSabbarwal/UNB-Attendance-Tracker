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
            <h3 className={styles.userTitle}><span className={styles.appName}>UNB Attendance Services</span></h3>
            <div className={styles.notFoundMessage}>
              <h4>Error: Page Not Found</h4>
              <h4>This page does not exist, or you do not have permission to view it. Please navigate to the previous page in your browser. </h4>
            </div>
          </div>
          <div className={styles.underBar}>
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

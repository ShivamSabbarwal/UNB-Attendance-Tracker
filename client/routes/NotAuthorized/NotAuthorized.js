import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from '../../main.css';

export function NotAuthorized(props) {
  return (
    <div>
        <div>
          <h1> Not Authorized </h1>
          <h3> You are not authorized to access this page</h3>
        </div>
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {

  };
}

NotAuthorized.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(NotAuthorized);

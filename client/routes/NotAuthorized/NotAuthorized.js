import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from '../../main.css';

class NotAuthorized extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
          <div>
            <h1> Not Authorized </h1>
            <h3> You are not authorized to access this page</h3>
          </div>
      </div>
    )
  }

}

export default NotAuthorized;

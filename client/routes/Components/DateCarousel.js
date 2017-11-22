import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as utils from '../Utils/utils.js';

// Import Style
import styles from '../../main.css';

class DateCarousel extends Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){

  }

  render(){
    return(
      <div className={styles.dateCarousel}>
        <button className={styles.leftButton} />
        <div className={styles.weekSelect}>
          <label>DATE SELECTOR</label>
        </div>
        <button className={styles.rightButton} />
      </div>
    )
  }

}

export default DateCarousel;

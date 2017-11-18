import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import Header from '../Components/InstructorHeader';
import PageNotFound from '../PageNotFound/PageNotFound';
import styles from '../../main.css';
import * as utils from '../Utils/utils.js';

var username = utils.readCookie("username");
var sessionID = utils.readCookie("sessionID");
var isAdmin = utils.readCookie("isAdmin");

class StatisticsView extends Component{

  constructor(props){
    super(props);
  }
  ComponentDidMount(){

  }
  render(){
    if (isAdmin == "false" || username == "null"){
      return (
        <PageNotFound/>
      );
    }
    return(
      <div>
          <div className={styles.mainBody}>
            <h1 className={styles.mainBodyTitle}>{this.props.course} Attendance Statistics</h1>
            <div className={styles.mainBodyWrapper}>
              {this.props.studentName}
              {this.props.absentAmount}
              {this.props.date}
            </div>
            <div className={styles.footer}>
            </div>
          </div>
      </div>
    )
  }
}

export default StatisticsView;

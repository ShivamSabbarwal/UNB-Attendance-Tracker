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
  viewStatistics(){
    //get course attendance

    //var test = document.getElementById("asdf").innerHTML;
    /*var rfc2822Format = dateString.split('/');
    var date = new Date(rfc2822Format[2],rfc2822Format[0]-1,rfc2822Format[1]);
    console.log(date);*/
    /*var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      //successful
      if (req.readyState == 4 && req.status == 200) {
        var response = JSON.parse(req.responseText);
        var student = response.students;
      }
      //user not allowed
      else if (req.readyState == 4 && req.status == 403){
        alert("user is not allowed");
      }
      //unauthorized
      else if (req.readyState == 4 && req.status == 401){
        alert("you are unauthorized");
      }
      else if (req.readyState == 4 && req.status == 400){
        alert("please do not leave the date empty");
      }
      else if(req.readyState == 4 && req.status == 500){
        alert("please check your internet connection");
      }
    }
    req.open("GET", "/api/course/" + this.props.course + "/attendance?" + "date=");
    req.setRequestHeader("Content-type", "application/json");
    req.send();*/
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
            <h1 className={styles.mainBodyTitle}>{this.props.course}Attendance Statistics</h1>
            <div className={styles.mainBodyWrapper}>
            </div>
            <div className={styles.footer}>
            </div>
          </div>
      </div>
    )
  }
}


export default StatisticsView;

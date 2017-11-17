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
        <Header/>
          <div className={styles.mainBody}>
            <h1 className={styles.mainBodyTitle}>Attendance Stats</h1>
            <div className={styles.mainBodyWrapper}>

             <table className={styles.attendanceStatsTable}>
                <tbody>
                 <tr>
                   <td>Stu Name</td>
                   <td>Monday</td>
                   <td>Tuesday</td>
                   <td>Wednesday</td>
                   <td>Thursday</td>
                   <td>Friday</td>
                   <td>Total</td>
                 </tr>
                 <tr>
                   <td>Shivam</td>
                   <td>Present</td>
                   <td>fucking fuck this project</td>
                   <td>Present</td>
                   <td></td>
                   <td>Absent</td>
                   <td>1</td>
                 </tr>
                 <tr>
                   <td>Tris10</td>
                   <td>Absent</td>
                   <td></td>
                   <td>Absent</td>
                   <td></td>
                   <td>Absent</td>
                   <td>3</td>
                 </tr>

               </tbody>
             </table>
            </div>
            <div className={styles.footer}>
            </div>
          </div>
      </div>
    )
  }
}

export default StatisticsView;

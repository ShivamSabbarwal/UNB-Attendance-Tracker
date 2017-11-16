import React, { PropTypes, Component } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
 import CourseGrid from '../CourseOverview/CourseGrid';
 // Import Style
 import styles from '../../main.css';
 import Header from '../Components/InstructorHeader';

class InstructorCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: []}
  }

  componentDidMount(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        debugger;

        var response = JSON.parse(req.responseText);

        var grid = response.grid;

        var output = <CourseGrid name={courseName} grid={grid}/>;

        this.setState({
          courseGrid: output
        });

      }
    }.bind(this)

    req.open("GET", "/api/course/" + courseName + "/grid");
    req.setRequestHeader("Content-type", "application/json");

    req.send();

    var rows = ["Students:"];

    for(var i = 0; i < height; i++){

      var cell = [];

      for(var idx = 0; idx < width; idx++){

  	     var id = i*7 + idx;
        if(grid[i][idx] != ""){
  	       rows.push(<label className={styles.studentRowEntry}>{grid[i][idx]}</label>);
        }

      }

    }
  }

  render(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];
    return(
      <div>
       <Header/>
       <div className={styles.mainBody}>
         <h1 className={styles.mainBodyTitle}>{courseName}</h1>
           <div className={styles.mainBodyWrapper}>
          <div className={styles.courseGrid}>
            {this.state.courseGrid}
           </div>



           <div className={styles.statsTitle}> Attendance Statistics </div>
           <div className={styles.dateSelector}> Date Selector </div>
           <div className={styles.attendanceStatsTable}>
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
                   <td></td>
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

           </div>


            <div className={styles.footer}>
            <div className={styles.buttonWrapper}>
             <button> TRACK ATTENDANCE </button>
             </div>
            </div>

          </div>
       </div>
    )
  }

}

 function logout(){
   var req = new XMLHttpRequest();

   req.open("GET", "api/logout");
   req.setRequestHeader("Content-type", "application/json");
   //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
   //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

   req.onreadystatechange = function(){
     window.location.href="/";
   }

   req.send();
 }

 export default InstructorCourseOverview;

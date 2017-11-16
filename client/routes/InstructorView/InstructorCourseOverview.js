import React, { PropTypes, Component } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
 import InstructorCourseGrid from '../CourseOverview/InstructorCourseGrid';
 import DatePicker from 'react-datepicker';
 import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
 import '../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.min.css';
 // Import Style
 import styles from '../../main.css';
 import Header from '../Components/InstructorHeader';

class InstructorCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: []}
    this.startDate = "";
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

        var output = <InstructorCourseGrid name={courseName} grid={grid}/>;

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
         <DatePicker
             autoFocus
             selected={this.state.startDate}
             onChange={this.handleChange}
         />
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
              <h3 className={styles.instructorButton}>Track Attendance</h3>
             </div>
            </div>

          </div>
       </div>
    )
  }

}

 export default InstructorCourseOverview;

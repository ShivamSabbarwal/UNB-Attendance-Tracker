import React, { PropTypes, Component } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
 import InstructorCourseGrid from '../CourseOverview/InstructorCourseGrid';
 import DatePicker from 'react-datepicker';
 import DateCarousel from '../Components/DateCarousel';
 import '../../../node_modules/react-datepicker/dist/react-datepicker.min.css';
 import '../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.min.css';
 // Import Style
 import styles from '../../main.css';
 import Header from '../Components/InstructorHeader';
 import moment from 'moment';

class InstructorCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: [], startDate: moment()};
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(date){
    this.setState({
      startDate: date
    });
  }

  render(){

    var courseName = this.props.location.search;
    courseName = courseName.split("=")[1];
    return(
      <div>
       <Header/>
          <div className={styles.mainBody}>
               <DatePicker className={styles.datePicker}
                   autoFocus
                   selected={this.state.startDate}
                   onChange={this.handleChange}
               />
            <Link to={'/attendance_stats/?name=' + courseName}><h3 className={styles.statDirect}>View Attendance Statistics</h3></Link><br/><br/><br/>
            <h1 className={styles.mainBodyTitle}>{courseName}</h1>
            <div className={styles.mainBodyWrapper}>
              <div className={styles.courseGrid}>
                {this.state.courseGrid}
              </div>
            </div>


            <div className={styles.footer}>
              <div className={styles.buttonWrapper}>
                <h3 className={styles.instructorButton}>Submit Attendance</h3>
               </div>
            </div>
          </div>
       </div>
    )
  }

}

 export default InstructorCourseOverview;

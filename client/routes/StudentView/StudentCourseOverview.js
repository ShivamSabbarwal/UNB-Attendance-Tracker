import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import StudentCourseGrid from '../CourseOverview/StudentCourseGrid';
import * as utils from '../Utils/utils.js';
// Import Style
import styles from '../../main.css';
import Header from '../Components/StudentHeader';

class StudentCourseOverview extends Component{

  constructor(props){
    super(props);
    this.state = {courseGrid: []};
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
        console.log(grid);
        var output = <StudentCourseGrid name={courseName} grid={grid}/>;

        this.setState({
          courseGrid: output
        });

      }
    }.bind(this)

  req.open("GET", "/api/course/" + courseName + "/grid");
  req.setRequestHeader("Content-type", "application/json");

  req.send();
  }

  reserveSeat(){
    debugger;
    var grid = this.state.courseGrid.props.grid;
    var row = -1;
    var column = -1;
    for(var i = 0; i < grid.length; i++){
      for(var j = 0; j < grid[0].length; j++){
        var check = document.getElementById("" + i + "" + j + "");
        if(check.className.includes(styles.courseGridCellClicked)){
          row = i;
          column = j;
          break;
        }
      }
      if(row >= 0){
        break;
      }
    }
    if(row < 0){
      alert("Didn't select a seat!");
    } else{

      var courseName = this.props.location.search;
      courseName = courseName.split("=")[1];

      var username = utils.readCookie("username");

      var req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
          debugger;
          window.location.reload();
        }
      }.bind(this)

      req.open("PUT", "/api/course/" + courseName + "/seat");
      req.setRequestHeader("Content-type", "application/json");
      var params = '{"username": "' + username + '", "seat": [' + column + ',' + row + ']}';
      req.send(params);
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
              </div>
            </div>

          <div className={styles.footer} >
              <div className={styles.buttonWrapper}>
                <h3 onClick={this.reserveSeat.bind(this)} className={styles.instructorButton}>Reserve Seat</h3>
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
    debugger;
    window.location.href="/";
  }

  req.send();
}

export default StudentCourseOverview;

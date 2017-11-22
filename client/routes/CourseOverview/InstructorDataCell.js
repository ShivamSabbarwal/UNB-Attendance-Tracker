import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as utils from '../Utils/utils.js';
import InstructorCourseOverview from '../InstructorView/InstructorCourseOverview';

// Import Style
import styles from '../../main.css';

class InstructorDataCell extends Component{
  constructor(props){
    super(props);

    this.state = {name: props.name};
  }
  componentDidMount(){

  }
  clicked(){
    debugger;
    var y = document.getElementsByClassName(styles.courseGridCellClicked);
    if(document.getElementById(this.props.id).className.includes(styles.courseGridCellClicked)){
      document.getElementById(this.props.id).classList.remove(styles.courseGridCellClicked);
      var absentList =document.getElementById("absentStudents").innerHTML;
      absentList = absentList.replace(this.props.name+"," , " ");
      document.getElementById("absentStudents").innerHTML = absentList;
    } else{
      if(this.props.name != ""){
  		    document.getElementById(this.props.id).classList.add(styles.courseGridCellClicked);
          document.getElementById("absentStudents").innerHTML += this.props.name+',';
      }
  	}
  }

  render(){
      if(this.state.name == "-1") {
        return (<td className={styles.closedSeat2} id={this.props.id} onClick = {this.clicked.bind(this)}></td>)
      }
      else if (this.state.name == "-2") {
        return(<td className={styles.auditableSeat2} id={this.props.id} onClick = {this.clicked.bind(this)}></td>)
      }
      else{
        return (
          <td className={styles.courseGridCell} id={this.props.id} onClick = {this.clicked.bind(this)}> {this.state.name} </td>
        )
      }
  }
}

export default InstructorDataCell;

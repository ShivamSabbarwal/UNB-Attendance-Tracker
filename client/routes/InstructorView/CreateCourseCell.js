import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as utils from '../Utils/utils.js';

// Import Style
import styles from '../../main.css';

class CreateCourseCell extends Component{

  constructor(props){
    super(props);

    this.state = {name: props.name};
  }

  componentDidMount(){

  }

  clicked(){


    var x = document.getElementsByClassName(styles.courseGridCell);
    var y = document.getElementsByClassName(styles.closedSeat);
    var z = document.getElementsByClassName(styles.auditableSeat);
    document.getElementById(this.props.id).value = 0;

  	if(document.getElementById(this.props.id).className.includes(styles.courseGridCell)){
          document.getElementById(this.props.id).classList.remove(styles.courseGridCell);
  		    document.getElementById(this.props.id).classList.add(styles.closedSeat);
          document.getElementById(this.props.id).value = 1;
    }


    else if(document.getElementById(this.props.id).className.includes(styles.closedSeat)){
          document.getElementById(this.props.id).classList.remove(styles.closedSeat);
          document.getElementById(this.props.id).classList.add(styles.auditableSeat);
          document.getElementById(this.props.id).value = -1;
    }


    else {
          document.getElementById(this.props.id).classList.remove(styles.auditableSeat);
          document.getElementById(this.props.id).classList.add(styles.courseGridCell);
          document.getElementById(this.props.id).value = 0;
    }



  }

  render(){
    return(
      <td className={styles.courseGridCell} id={this.props.id} onClick = {this.clicked.bind(this)}> {this.state.name} </td>
    )
  }

}

export default CreateCourseCell;

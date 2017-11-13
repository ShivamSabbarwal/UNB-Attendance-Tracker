import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from '../../main.css';

class DataCell extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  clicked(){
  	if(!document.getElementById(this.props.id).className.includes(styles.courseGridCellClicked)){
  		document.getElementById(this.props.id).classList.add(styles.courseGridCellClicked);
  	} else{
  		document.getElementById(this.props.id).classList.remove(styles.courseGridCellClicked);
  	}
  }

  render(){
    return(
      <td className={styles.courseGridCell} id={this.props.id} onClick = {this.clicked.bind(this)}> {this.props.name} </td>
    )
  }

}

export default DataCell;

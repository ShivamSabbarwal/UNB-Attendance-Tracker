import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Import Style
import styles from '../../main.css';

export function DataCell(props) {

  function clicked(id){
	if(!document.getElementById(id).className.includes(styles.courseGridCellClicked)){
		document.getElementById(id).classList.add(styles.courseGridCellClicked);
	} else{
		document.getElementById(id).classList.remove(styles.courseGridCellClicked);
	}
  }

  return (

	<td className={styles.courseGridCell} id={props.id} onClick = {function(){clicked(props.id)}}> {props.name} </td>
  
	//<td className={styles.courseGridCell} id={props.id} onClick={() => alert(this.document.getElementById(props.id).className)}> {props.name} </td>
	//<td className={styles.courseGridCell} id={props.id} onClick={() => if(this.document.getElementById(props.id).className.includes("courseGridCell"))}> {props.name} </td>
  );
}

function onItemClick(){
		alert("was clicked");
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
	name: props.name,
	style: "courseGridCell"
  }
}

DataCell.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(DataCell);

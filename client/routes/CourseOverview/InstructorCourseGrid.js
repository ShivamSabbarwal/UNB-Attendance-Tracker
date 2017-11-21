import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import InstructorDataCell from './InstructorDataCell';

// Import Style
import styles from '../../main.css';

class InstructorCourseGrid extends Component{

  constructor(props){
    super(props);
    this.state = {gridVisual: []};
  }

  componentDidMount(){
    debugger;
    var height = this.props.grid.length;
    var width = this.props.grid[0].length;

    var rows = [];

    for(var i = 0; i < height; i++){

      var cell = [];

      for(var idx = 0; idx < width; idx++){

      	var id = "" + i + "" + idx + "";
      	cell.push(<InstructorDataCell name={this.props.grid[i][idx]} id={id} />);
      }

      rows.push(<tr>{cell}</tr>);
    }
    debugger;
    this.setState({
      gridVisual: rows
    })
  }

  render(){
    return(
      <div>
        <div className={styles.hiddenContainer}>
            <p id="absentStudents"></p>
        </div>
          <div className={styles.courseGrid}>
            <table className={styles.courseTable}>
              <tbody>
                {this.state.gridVisual}
              </tbody>
            </table>
          </div>
      </div>
    )
  }

}


export default InstructorCourseGrid;

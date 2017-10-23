import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DataCell from './DataCell';

// Import Style
import styles from '../../main.css';

export function CourseGrid(props) {

  var height = props.grid.length;
  var width = props.grid[0].length;

  var rows = [];

  for(var i = 0; i < height; i++){

    var cell = [];

    for(var idx = 0; idx < width; idx++){

	var id = i*100 + idx;
	cell.push(<DataCell name={props.grid[i][idx]} id={i*100 + idx} />);

    }

    rows.push(<tr>{cell}</tr>);

  }

  return (
<div>
    

    <div className={styles.courseGrid}>
    <h3>CS3383</h3>
    <table id="simple-board">
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
</div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    grid:      [["", "Tony", "", "", "", "", "", "", "Shiv", ""],
		["", "", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", ""],
		["", "", "", "", "Tristen", "", "", "", "", ""],
		["", "Jean-Marc", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "Justin", ""],
		["", "", "Jacob", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", "", "", ""]]
  };
}

CourseGrid.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(CourseGrid);

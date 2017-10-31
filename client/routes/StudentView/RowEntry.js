
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import {Grid, Row, Col, Image, Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from '../../main.css';

export function RowEntry(props){
  return (

    <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.professorname}</td>
    <td>{props.location}</td>
    </tr>

  );
}

function mapStateToProps(state, props) {
  return {

    //post: getPost(state, props.params.cuid),
  };
}
RowEntry.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};
export default connect(mapStateToProps)(RowEntry);

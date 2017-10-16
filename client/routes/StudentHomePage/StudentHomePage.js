import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router'; 

// Import Style
import styles from './style.css';
import style2 from './style2.css';

export function StudentHomePage(props) {
  return (
    <div >
      
      <title>UNB Attendance Checker - Homepage Student</title>
      <link rel="shortcut icon" type="image/png" href="../images/unb_logo.png"></link>
      <link rel="stylesheet" type="text/css" href="../css/style.css"/>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    

    
      <header>
        <img src="../images/unb_logo.png"/>
        <h1> UNB Attendance Checker</h1>
      </header>
      <div className = "container">
        <div >
          <label> Name</label>
          <label> Date</label>
          <button type="button">Logout</button>
        </div>
        <div>
          <ul>
            <li> <a href =""> Register For Classes </a></li>
            <li> <a href =""> View My Courses </a> </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
//HomePage.need = [params => {
  //return fetchPost(params.cuid);
//}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}

StudentHomePage.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(StudentHomePage);

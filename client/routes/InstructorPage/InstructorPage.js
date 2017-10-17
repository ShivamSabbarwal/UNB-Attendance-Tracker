import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

// Import Style
import styles from './instructorpagestyle.css';

export function InstructorPage(props) {
  return (
    <body>
      <ul>
        <li><Link to={'/create_course'}>Create Course</Link></li>
        <li><a href="/">instructor page1</a></li>
        <li><a href="/">instructor page 2</a></li>
        <li><a href="/">instructor page 3</a></li>
        <li><a href="/">log out?</a></li>
      </ul>
    </body>

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

InstructorPage.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(InstructorPage);

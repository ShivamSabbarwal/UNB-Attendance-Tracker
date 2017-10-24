import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

// Import Style
import styles from '../../main.css';

export function RegisterCourse(props) {
  return (

      <div className={styles.optionsContainer}>
         <input type="text" id="searchInput" name="search" placeholder="Serach.."/>
         <button onClick={myfunction}>search!</button>
          <p id="searchOutput"></p>
            <ul class="myUL">
            </ul>
      </div>
  );
}


function myfunction() {

    // Declare variables
    //hard coded data
    var classes = ["SWE4444", "PHIL1500", "MATH1000", "SCHI2000", "HIST2045", "CS1246", "HELLO"];
    var input = document.getElementById("username").value;
    //Change input to Upper Case
    var filter = input.value.toUpperCase();
    var count = classes.length;
    var match = [];

    // Loop through all list items, and see how many matching items there are
    for (i = 0; i < classes.length; i++) {
        if (classes[i].toUpperCase().indexOf(filter) > -1) {
            match.push(classes[i]);
        } else {
            count = count -1;
        }
    }

    for (i = 0; i < match.length; i++) {
      var li = "<li>" + match[i] + "</li>";
      document.getElementById("myUL").appendChild(li);
    }

    var text1 = document.getElementById("searchOutput")
    var text2 = document.createTextNode("You have " + count + " matching courses!");
    text1.appendChild(text2);
}

function mapStateToProps(state, props) {
  return {
    //post: getPost(state, props.params.cuid),
  };
}

RegisterCourse.propTypes = {
//  post: PropTypes.shape({
//    name: PropTypes.string.isRequired,
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    slug: PropTypes.string.isRequired,
//    cuid: PropTypes.string.isRequired,
//  }).isRequired,
};

export default connect(mapStateToProps)(RegisterCourse);

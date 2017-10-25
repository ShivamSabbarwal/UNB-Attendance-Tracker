import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

// Import Style
import styles from '../../main.css';

export function RegisterCourse(props) {
  return (
<div>
    <div className={styles.welcomeContainer}>
      <h2 className={styles.instructorName}>Register For A Course</h2>
      <Link to={"/student_home"}><h4>Home</h4></Link>
    </div>

      <div className={styles.optionsContainer}>
         <input type="text" id="searchInput" name="search" placeholder="Serach.."/>
         <button onClick={myfunction}>search!</button>
          <p id="searchOutput"></p>
            <ul id="myUL">
            </ul>
      </div>
      </div>
  );
}


function myfunction() {
  debugger;
    document.getElementById("searchOutput").innerHTML = "";
    document.getElementById("myUL").innerHTML = "";
    // Declare variables
    //hard coded data
    var classes = ["SWE4103", "CS1003", "CS1073", "CS1083", "CS2043", "CS2383", "CS3383", "CS3997", "CS1303", "SWE4203", "SWE4040", "SWE4403", "STAT2593", "ECE3221", "ECE2701", "ESCI1001"];
    var input = document.getElementById("searchInput").value;
    //Change input to Upper Case
    var filter = input.toUpperCase();
    var count = classes.length;
    var match = [];
    var i,j;
    // Loop through all list items, and see how many matching items there are
    for (i = 0; i < classes.length; i++) {
        if (classes[i].toUpperCase().indexOf(filter) > -1) {
            match.push(classes[i]);
        } else {
            count = count -1;
        }
    }

    for (j = 0; j < match.length; j++) {
      var node = document.createElement("LI");
      var li =  document.createTextNode(match[j]);
      node.appendChild(li);
      document.getElementById("myUL").appendChild(node);
    }

    var text1 = document.getElementById("searchOutput");
    var text2 = document.createTextNode("You have " + count + " matching courses!");
    text1.appendChild(text2);

}

function mapStateToProps(state, props) {
  return {
    courseList: ["SWE4103", "CS1003", "CS1073", "CS1083", "CS2043", "CS2383", "CS3383", "CS3997", "CS1303", "SWE4203", "SWE4040", "SWE4403", "STAT2593", "ECE3221", "ECE2701", "ESCI1001"]
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

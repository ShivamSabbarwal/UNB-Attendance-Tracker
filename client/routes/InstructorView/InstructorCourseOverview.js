import React, { PropTypes } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
 import CourseGrid from '../CourseOverview/CourseGrid';
 // Import Style
 import styles from '../../main.css';
 import Header from '../Components/InstructorHeader';

 export function InstructorCourseOverview(props) {
debugger;
   var courseName = props.location.search;
   courseName = courseName.split("=")[1];

   var height = props.grid.length;
   var width = props.grid[0].length;

   var rows = ["Students:"];

   for(var i = 0; i < height; i++){

     var cell = [];

     for(var idx = 0; idx < width; idx++){

 	     var id = i*7 + idx;
       if(props.grid[i][idx] != ""){
 	       rows.push(<label className={styles.studentRowEntry}>{props.grid[i][idx]}</label>);
       }

     }

   }

   return (
     <div>
      <Header/>
         <div className={styles.courseGrid}>
           <CourseGrid name={courseName} grid={props.grid} />
           <div className={styles.trackAttendanceBtn}>
            <button> TRACK ATTENDANCE </button>
           </div>

           <div className={styles.students}>
             <table>
                <tbody>
                  {rows}
               </tbody>
             </table>
           </div>
         </div>
      </div>
   );
 }

 // Retrieve data from store as props
 function mapStateToProps(state, props) {
   return {
     grid: [["", "Tony", "", "", "", "", "", "", "Shiv", ""],
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

 function logout(){
   var req = new XMLHttpRequest();

   req.open("GET", "api/logout");
   req.setRequestHeader("Content-type", "application/json");
   //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
   //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";

   req.onreadystatechange = function(){
     debugger;
     window.location.href="/";
   }

   req.send();
 }

 InstructorCourseOverview.propTypes = {
 //  post: PropTypes.shape({
 //    name: PropTypes.string.isRequired,
 //    title: PropTypes.string.isRequired,
 //    content: PropTypes.string.isRequired,
 //    slug: PropTypes.string.isRequired,
 //    cuid: PropTypes.string.isRequired,
 //  }).isRequired,
 };

 export default connect(mapStateToProps)(InstructorCourseOverview);

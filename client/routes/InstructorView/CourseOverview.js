import React, { PropTypes } from 'react';
 import { connect } from 'react-redux';
 import Helmet from 'react-helmet';
 import { FormattedMessage } from 'react-intl';
 import { Link } from 'react-router';
 import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
 import CourseGrid from '../CourseGrid/CourseGrid';
 // Import Style
 import styles from '../../main.css';


 export function CourseOverview(props) {

   return (
 <div>
  <div>
     <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           UNB Attendance Service
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
         <NavItem href="/instructor_home">Instructor Home</NavItem>
         <NavItem href="/instructor_home">Other thing</NavItem>
       </Nav>
       <Nav pullRight>
         <NavItem href="/">Log out</NavItem>
       </Nav>
     </Navbar>
    </div>
    <div className={styles.sidenav}>
      <Link to={'/instructor_courses'}>Courses</Link>
      <a href="#">Nothing</a>
      <a href="#">Nothing</a>
      <a href="#">Nothing</a>
    </div>
     <div className={styles.courseGrid}>

       <CourseGrid/>

     <table id="students" align="right">
       <tr><td>Students</td></tr>
       <tr><td>Tony</td></tr>
       <tr><td>Shiv</td></tr>
       <tr><td>Tristen</td></tr>
       <tr><td>Jean-Marc</td></tr>
       <tr><td>Justin</td></tr>
       <tr><td>Jacob</td></tr>
     </table>
     </div>
   </div>
   );
 }

 // Retrieve data from store as props
 function mapStateToProps(state, props) {

 }

 CourseOverview.propTypes = {
 //  post: PropTypes.shape({
 //    name: PropTypes.string.isRequired,
 //    title: PropTypes.string.isRequired,
 //    content: PropTypes.string.isRequired,
 //    slug: PropTypes.string.isRequired,
 //    cuid: PropTypes.string.isRequired,
 //  }).isRequired,
 };

 export default connect(mapStateToProps)(CourseOverview);

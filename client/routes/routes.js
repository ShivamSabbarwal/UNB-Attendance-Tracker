/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import App from '../App/App';
import CreateCourse from './CreateCourse/CreateCourse';
import Login from './Login/Login';
import StudentHomePage from './StudentHomePage/StudentHomePage';
import InstructorPage from './InstructorPage/InstructorPage';
import Signup from './Signup/Signup';
// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  //require('./modules/Post/pages/PostListPage/PostListPage');
  //require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./InstructorPage/InstructorPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute component = {Login} />
    <Route path="/student_home" component = {StudentHomePage} />
    <Route path="/instructor_page" component = {InstructorPage} />
    <Route path="/create_course" component = {CreateCourse} />
    <Route path="/sign_up" component = {Signup} />
  </Route>
);

/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import App from '../App/App';
import HomePage from './HomePage/HomePage';
import CreateCourse from './CreateCourse/CreateCourse';
import Login from './Login/Login';
import StudentHomePage from './StudentHomePage/StudentHomePage';

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
  require('./HomePage/HomePage');
}
 
// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute component = {Login} />
    <Route path="/home" component = {HomePage} />
    <Route path="/student_home" component = {StudentHomePage} />
    <Route path="/create_course" component = {CreateCourse} />
  </Route>
);

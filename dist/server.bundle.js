/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/edit");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var UserSchema = new Schema({
	  username: { type: 'String', required: true, unique: true },
	  email: { type: 'String', required: true, unique: true },
	  // This is very very not secure and definitely needs to be updated soon
	  password: { type: 'String', required: true, minlength: 6, maxlength: 20 },
	  isAdmin: { type: 'Boolean', default: false }
	});
	exports.default = _mongoose2.default.model('User', UserSchema);

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.CourseGrid = CourseGrid;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _DataCell = __webpack_require__(39);
	
	var _DataCell2 = _interopRequireDefault(_DataCell);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CourseGrid(props) {
	
	  var height = props.grid.length;
	  var width = props.grid[0].length;
	
	  var rows = [];
	
	  for (var i = 0; i < height; i++) {
	
	    var cell = [];
	
	    for (var idx = 0; idx < width; idx++) {
	
	      var id = i * 100 + idx;
	      cell.push(_jsx(_DataCell2.default, {
	        name: props.grid[i][idx],
	        id: i * 100 + idx
	      }));
	    }
	
	    rows.push(_jsx('tr', {}, void 0, cell));
	  }
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.courseGrid
	  }, void 0, _jsx('h3', {}, void 0, ' ', props.name, ' '), _jsx('table', {
	    id: 'simple-board'
	  }, void 0, _jsx('tbody', {}, void 0, rows))));
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CourseGrid);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.InstructorHome = InstructorHome;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _edit = __webpack_require__(7);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	var _InstructorCourseIcon = __webpack_require__(41);
	
	var _InstructorCourseIcon2 = _interopRequireDefault(_InstructorCourseIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/create_course'
	}, void 0, _jsx('button', {}, void 0, 'ADD A COURSE'));
	
	function InstructorHome(props) {
	
	  var courseIcons = [];
	
	  for (var i = 0; i < props.courses.length; i++) {
	
	    var courseInfo = JSON.parse(props.courses[i]);
	
	    courseIcons.push(_jsx(_InstructorCourseIcon2.default, {
	      name: courseInfo.name
	    }));
	  }
	
	  var username = readCookie("username");
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Welcome, ', username), _jsx(_reactBootstrap.Image, {
	    className: _main2.default.instructorPic,
	    src: "data:image/png;base64,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",
	    rounded: true
	  })), _jsx('div', {
	    className: _main2.default.courses
	  }, void 0, courseIcons), _jsx('div', {
	    className: _main2.default.addCourseBtn
	  }, void 0, _ref));
	}
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    courses: [['{"name":"SWE4103"}'], ['{"name":"CS1073"}']]
	  };
	}
	
	function readCookie(name) {
	  var nameEQ = name + "=";
	  if (typeof window !== 'undefined') {
	    var ca = document.cookie.split(';');
	
	    for (var i = 0; i < ca.length; i++) {
	      var c = ca[i];
	      while (c.charAt(0) == ' ') {
	        c = c.substring(1, c.length);
	      }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	    }
	  }
	  return null;
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InstructorHome);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var SessionSchema = new Schema({
	  username: { type: 'String', required: true },
	  sessionId: { type: 'String', required: true },
	  timestamp: { type: 'Date', default: Date.now }
	  // SCHEMA GOES HERE
	});
	
	exports.default = _mongoose2.default.model('Session', SessionSchema);

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _App = __webpack_require__(32);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _CreateCourse = __webpack_require__(40);
	
	var _CreateCourse2 = _interopRequireDefault(_CreateCourse);
	
	var _Login = __webpack_require__(44);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Signup = __webpack_require__(45);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _InstructorHome = __webpack_require__(13);
	
	var _InstructorHome2 = _interopRequireDefault(_InstructorHome);
	
	var _StudentHome = __webpack_require__(49);
	
	var _StudentHome2 = _interopRequireDefault(_StudentHome);
	
	var _CourseGrid = __webpack_require__(37);
	
	var _CourseGrid2 = _interopRequireDefault(_CourseGrid);
	
	var _InstructorCourseList = __webpack_require__(42);
	
	var _InstructorCourseList2 = _interopRequireDefault(_InstructorCourseList);
	
	var _InstructorCourseOverview = __webpack_require__(43);
	
	var _InstructorCourseOverview2 = _interopRequireDefault(_InstructorCourseOverview);
	
	var _StudentCourseOverview = __webpack_require__(48);
	
	var _StudentCourseOverview2 = _interopRequireDefault(_StudentCourseOverview);
	
	var _RegisterCourse = __webpack_require__(46);
	
	var _RegisterCourse2 = _interopRequireDefault(_RegisterCourse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
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
	  __webpack_require__(13);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  component: _Login2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/create_course',
	  component: _CreateCourse2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/signup',
	  component: _Signup2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/instructor_home',
	  component: _InstructorHome2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/student_home',
	  component: _StudentHome2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/course_grid',
	  component: _CourseGrid2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/instructor_courses',
	  component: _InstructorCourseList2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/course_overview_inst',
	  component: _InstructorCourseOverview2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/course_overview_stu',
	  component: _StudentCourseOverview2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/register_course',
	  component: _RegisterCourse2.default
	}));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(15);
	
	var _reduxThunk = __webpack_require__(70);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(50);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	} /**
	   * Main store function
	   */

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://swe4103:group1@ds149134.mlab.com:49134/swe4103',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';
	
	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';
	
	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
	
	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _post = __webpack_require__(55);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(8);
	
	var _course = __webpack_require__(51);
	
	var CourseController = _interopRequireWildcard(_course);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Add students to a specific course
	router.route('/course/:courseTitle/students').put(CourseController.addStudents);
	
	// Drop students from a specific course
	router.route('/course/:courseTitle/students').delete(CourseController.dropStudents);
	
	// Get list of courses
	router.route('/courseList').get(CourseController.courseList);
	
	// Add a new course
	router.route('/course').post(CourseController.createCourse);
	
	// Drop a course from the database
	router.route('/course').delete(CourseController.removeCourse);
	
	exports.default = router;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(8);
	
	var _email = __webpack_require__(52);
	
	var EmailController = _interopRequireWildcard(_email);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/email').post(EmailController.sendEmail);
	
	exports.default = router;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(8);
	
	var _login = __webpack_require__(53);
	
	var LoginController = _interopRequireWildcard(_login);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/login').post(LoginController.login);
	
	router.route('/logout').get(LoginController.logout);
	
	router.route('/signup').post(LoginController.generateUserAccount);
	
	exports.default = router;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(57);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(10);
	var cssnext = __webpack_require__(63);
	var postcssFocus = __webpack_require__(64);
	var postcssReporter = __webpack_require__(65);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://127.0.0.1:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }, {
	      test: /\.(woff|woff2|eot|ttf|svg)$/,
	      loader: 'url-loader?limit=100000'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _App = {
	  "navbar": "_1bwZm8NK9UDPb2iPjwmk7",
	  "badge": "nso1yGtymnZ4NCFWrQdJR",
	  "table": "_3qnxaJTMiLP4MUdvgXZsrE",
	  "table-bordered": "YN-471kzGUKC20Nr2Tauh",
	  "h1": "_9uvH_2ux61fb7Fp2iaPZa",
	  "h2": "_1hOKZMfBdZBAC2Q7TMdqwO",
	  "h3": "_1w55mTTLKZfaEXqY8GzB8M",
	  "h4": "_2YkE0qGScbo39jqeaeXdvH",
	  "h5": "_312D_MbLHyCNh7yrQNM3_X",
	  "h6": "jMO2V0_9D60_UGmbtTEC9",
	  "lead": "_3BEXw482Odwj6-p_MNgkvs",
	  "display-1": "_1Wg321wcXykBnyC4dkZ8DW",
	  "display-2": "_2uyrxzFl-jekVQBJBis4CB",
	  "display-3": "_3WM7DVUNHJH89bdkhxuY8",
	  "display-4": "_2bSPddu2aOzX77sbBitZg1",
	  "small": "_3GYeR7gaQU-NK4taM2IHbz",
	  "mark": "vsG48qcTJGQIumaLT5cQn",
	  "list-unstyled": "_3vnBksvIkIWm7XaqP3BGBK",
	  "list-inline": "_3oxdHa_MxPqZusZipgPc9w",
	  "list-inline-item": "wau6fxUAV11Ym1MrrA-Sq",
	  "initialism": "_3H8fugHHkZhapbuEz4oK-T",
	  "blockquote": "S1kG4tiS4Mh8mMd9vv8p",
	  "blockquote-footer": "JbSM5gmBWCVGPicI4BppX",
	  "img-fluid": "_2ng88Gep13RvNDHaeIOg-K",
	  "img-thumbnail": "_1Gg3XX6izcyN4qY_1lg-9D",
	  "figure": "_3iF8nlCasfaQCjl8GtkLF",
	  "figure-img": "yglgbGTsu4-3xhOR4FBn6",
	  "figure-caption": "B0ebbaowMbMbwXHETmo4q",
	  "pre-scrollable": "_1Y60FonVujfmJD09uq_xfy",
	  "container": "_3NU9m2jUENRiyurgqbP4Ve",
	  "container-fluid": "BCXJwHcxjAxJWb2QeT-HI",
	  "row": "_1QWLYCPD9Ftf16zsiX2KEA",
	  "no-gutters": "_1HGU6vI26UoVPzBJHM8R6h",
	  "col": "_33LVN31Qhfl-nxkGZ0DVu5",
	  "col-1": "_1ukUsPzsnvFSfleT7gX_E5",
	  "col-2": "_3PvI08vQcsaxlqf-2kCtIH",
	  "col-3": "_1qOAPvadr2XC_vocLNkNug",
	  "col-4": "_30P8pbb__c6ioxHld_ojbi",
	  "col-5": "jN4Itx9RAHcE-0BPk4U8M",
	  "col-6": "_2SfZ8_OByFWmtekXM1TQPy",
	  "col-7": "_18Cbn5FcIFuP_dMUqPggjP",
	  "col-8": "_3HqGHYckiIxkwiMfhqwpDB",
	  "col-9": "_3oJzLOxRcgrHa5aV9GAryC",
	  "col-10": "_3tE_DswNTq6lsNs9-56But",
	  "col-11": "_2oPDqVbGRR-IfUr1603kqx",
	  "col-12": "_1DYS3ApuwlqX4iG0a62m8k",
	  "col-auto": "_86NbEzzvO51EzlF3FpiZg",
	  "col-sm-1": "_1sPIj4miupC79dWTxRKZEW",
	  "col-sm-2": "_2uIvud1Gu5ofJdM-hKVvBd",
	  "col-sm-3": "_3l13UEiNF46juf6zy6uOom",
	  "col-sm-4": "_31vw7xquYUtPALsSNvVi7V",
	  "col-sm-5": "_2YEqyOZ6Ptcxv1NmajpSab",
	  "col-sm-6": "_1ADow_LpcpeCV9b2exWhVT",
	  "col-sm-7": "_1p5LRGkmkjUGlHKyfjWT5z",
	  "col-sm-8": "_1z-Thf4QzNchg94GUoSESR",
	  "col-sm-9": "_1iVbLbntnIxiJ0pJofgzXl",
	  "col-sm-10": "_38kwSnQUxcaqJ2XhzlqQjL",
	  "col-sm-11": "_13DwP38CmFCRQkFcUOOAMw",
	  "col-sm-12": "_3BDnszeEXCjWGJb8F_thh1",
	  "col-sm": "RoVevihxX0WpdTImk8yqz",
	  "col-sm-auto": "_2_yIIeAXfAIN4NmhfD0LoU",
	  "col-md-1": "QGPCSxgMlhXrOh5E19-Ud",
	  "col-md-2": "_1XF68UQDu4BetcRzdL551Z",
	  "col-md-3": "_368XRKnR4LO7EdZAW6ABrO",
	  "col-md-4": "_2ta1Vqd0b2GdCrI4ult2tk",
	  "col-md-5": "NlgzQvO1eK6hgvdiEYwLh",
	  "col-md-6": "_1GaDga1V4kR6kVB5PsyVzj",
	  "col-md-7": "_2J9AMqlaimv3YwWExDao0a",
	  "col-md-8": "_38jqzJ-ar5Xl94HG8fbabK",
	  "col-md-9": "_3IoIAUK_YhX_sYhHLDrULt",
	  "col-md-10": "_1Nk-M4PfNtDVZIf3IrZXgL",
	  "col-md-11": "_3pFXFExv1FUkB-okl044eu",
	  "col-md-12": "UAdISOcOSxquMo7cP8GTR",
	  "col-md": "_23uNBMVvT2OVnej12jsa7p",
	  "col-md-auto": "_15TdfuSUsBoW0AJboiQ_C-",
	  "col-lg-1": "_11ZjAMk5Bo469Qg-QaDJOT",
	  "col-lg-2": "_1q67irn2NnvXBCOc3FlPl1",
	  "col-lg-3": "lB-mRNZxVm3NmFawao7bf",
	  "col-lg-4": "_3ylj5HA4kHdBpy4XjBPMtA",
	  "col-lg-5": "_NOInV1m5tf2JKAZieIRL",
	  "col-lg-6": "_2dye8bnSOJ8sQFugOt-XHk",
	  "col-lg-7": "_01f01wfEE14Vy1MDPZs9",
	  "col-lg-8": "_1xB7b3WitpPyxxlL85Lz7Z",
	  "col-lg-9": "_1_M1y9dpVvQAiApvvwZfsl",
	  "col-lg-10": "_28ygTFSbENwK-JEh92ppPS",
	  "col-lg-11": "_3C1-hZsMk1h9x1yAvMHRR0",
	  "col-lg-12": "_11USDYx4bJcW4T8neuTRhD",
	  "col-lg": "_3LhXY57IxSa9m9_GIYjMLI",
	  "col-lg-auto": "_1EktTAXL2zQFt24j9OtgrH",
	  "col-xl-1": "W2b0Emb3EhJl1zg9Lt5o6",
	  "col-xl-2": "_1qLyUfzOHeT26V8mEO9hvt",
	  "col-xl-3": "_1oRN8iagXmKMSBXlrt-Xd-",
	  "col-xl-4": "_1albFP5jOjwnPc0WviZCyk",
	  "col-xl-5": "wyP2V_g9-HUddb9-HkNQA",
	  "col-xl-6": "_1MzRQKbAPa7RiOS07Hgl4C",
	  "col-xl-7": "_3b_GYcG0e1c2aH8XglETFY",
	  "col-xl-8": "_25A0jyNgqzucy534-Buu-6",
	  "col-xl-9": "_1QvjZnsJTpwGXoKAXZWauN",
	  "col-xl-10": "uRtsFx0GnrNIluPJkPMo4",
	  "col-xl-11": "Hjnul6hqDefZPZjNnKggT",
	  "col-xl-12": "_1O3PzVzmEIipkBY8_8FxG0",
	  "col-xl": "_18yLuFpjII8NKXOIucqrOk",
	  "col-xl-auto": "_1E2qxlXJDatdWDgntRV8PG",
	  "order-1": "_3-RbManB52zU3UlRu6qH4s",
	  "order-2": "_3yjK9SvgLkiAm2km8zVcIy",
	  "order-3": "_2ys5nvPKHyhQdXt7ksHe0F",
	  "order-4": "_2XxjG3jPb9_YxrskFWF0qG",
	  "order-5": "r4JITqysAiVD20tgvROp3",
	  "order-6": "_2Imvqqrf4r0gOc5SzTTYeE",
	  "order-7": "_346FvTGodd57KIehrvi-DY",
	  "order-8": "_3Wu-RrVgEmUPRVYbRE3GBR",
	  "order-9": "_1OXgc8Vnvhcr6UNir2fbYa",
	  "order-10": "tp8DJSwrskUlFypGRTOaG",
	  "order-11": "_3S2RLz96zu5pZqvkko1vFn",
	  "order-12": "_18fo13N71zGMRe_LULPxF2",
	  "order-sm-1": "_31jAMO9cNDJTCijHubKN3W",
	  "order-sm-2": "_3jUM-hYbAP-aswartiCO4U",
	  "order-sm-3": "_2go-cM9K-93Q93iUc898Ng",
	  "order-sm-4": "ohrgrOVjNe2ViSeli6EwS",
	  "order-sm-5": "_1K8C8HUYyhjbhYJu1D8eb8",
	  "order-sm-6": "yuj8pb034xaKliFA4nLJB",
	  "order-sm-7": "_3Q0MScRh2QfUo6IbXtHsS0",
	  "order-sm-8": "_3LGaPy1CyThXybNTNsg2o",
	  "order-sm-9": "_2T0eITo-Il2Rkuz-Fj2-el",
	  "order-sm-10": "_2LlTtevw-W3bsrwIiVIF8I",
	  "order-sm-11": "_2RptI3FvfdIWJaHEoWwsPk",
	  "order-sm-12": "_3UD62EnAPtXXJVbjRY9ykQ",
	  "order-md-1": "_380kCLd-VUzRF9vdKn-MHJ",
	  "order-md-2": "_1WtrRHd7ITwF4QqDTUX-kO",
	  "order-md-3": "_3tDsD-c3wbgKl26EdNQKQE",
	  "order-md-4": "_2-CKX1_0mUzTOM6TWqohCF",
	  "order-md-5": "_3xx21rByH1zCgU5QVu5jpg",
	  "order-md-6": "_1DM3YDMQ5RcbMwY7gWo5eX",
	  "order-md-7": "_1WYmRooGCy2P-wDangFbFb",
	  "order-md-8": "_24oR7RfvjXwTtXixAEJkxS",
	  "order-md-9": "_2168kOy97ZVBWC318ewKek",
	  "order-md-10": "_1WQRSKkfY0eJ9YaX-YR2N3",
	  "order-md-11": "_1tSUn9BBT1Xuz6X--JW0lC",
	  "order-md-12": "_3Vxx3I-iclQZlm3SeHIWmI",
	  "order-lg-1": "_3a7A4p_zs_1XvXiGcC6Mhj",
	  "order-lg-2": "_1caBbg4qkDTSVTfSjRDPi2",
	  "order-lg-3": "_11WiOSuyb47Kpw9mqjfsVS",
	  "order-lg-4": "YfXr6sy2mntvbDezwxsP7",
	  "order-lg-5": "AuWOPoFwFBmxKpOual23i",
	  "order-lg-6": "ryPglGiS88f3-aq6cr3ys",
	  "order-lg-7": "sGVxEpIfsyQSFM53iEUN2",
	  "order-lg-8": "_39wQVepSfVdS6IYtTYVWJI",
	  "order-lg-9": "_2LN42QZazspqTE79x9qwrY",
	  "order-lg-10": "_25Uuz5mfEnXaCNOG0wwoO8",
	  "order-lg-11": "fwSlINSsew76lVTmy6vr5",
	  "order-lg-12": "_2nED2_tiMzxRFQe_M27iWY",
	  "order-xl-1": "_1p0ZVsPVxOninqcB9U8qvk",
	  "order-xl-2": "rcnwAbv35gVczWxr221GT",
	  "order-xl-3": "_1d2O_kk0BUpzZSdSlbTWpM",
	  "order-xl-4": "_29x5pOabC3RB4W49FHvFuk",
	  "order-xl-5": "_2_lJhFK2b6bhGDUocCawKn",
	  "order-xl-6": "_1nFI1frk7Y3siPAk8jDmCR",
	  "order-xl-7": "_1Gc3iwLkLR8oppDZz7JYa1",
	  "order-xl-8": "_2o3AwqOZYIQnEZ6yR8uAcn",
	  "order-xl-9": "_-DX-EMUroFSI7zFqN3tS7",
	  "order-xl-10": "YQQuLT0UO7mmOrNdHYmjO",
	  "order-xl-11": "_1-vAHuBBCL08Rr7imQKQFF",
	  "order-xl-12": "ExzyQL4lKwk8rI345Ho6I",
	  "table-sm": "_3LVGZu3VTsRPppzPuN3mzT",
	  "table-striped": "_3NSFWDgr5AMwbwTcx5X0Mw",
	  "table-hover": "_3C6pRqiboFPW8_ukHh2M6F",
	  "table-primary": "_3vlNizidHHfNQMQp7z5xu4",
	  "table-secondary": "_1urgYwRjkg_nU5TLJnol0H",
	  "table-success": "_3z-XYdVVBDrhetMBJe_Hfj",
	  "table-info": "_2fExD_sBIYCl1RCn8kJUy7",
	  "table-warning": "az4EFQLhhxNzwKQ71tqQI",
	  "table-danger": "_3JhH9yJG3b6UNo4QDdUlfa",
	  "table-light": "_3fIrBoYHHKEs2FMKtU5Pcg",
	  "table-dark": "_3_pRnuX9kBvfRQ1GrNYswf",
	  "table-active": "_2Uvufs2b2Wr7i6_Z3RZZAL",
	  "thead-inverse": "_RlOhwux_zE6ftWNuyC_i",
	  "thead-default": "_2DCrmdj1S1nqErOYXkebVH",
	  "table-inverse": "tBqU0ahf32gDD5dWpETEd",
	  "table-responsive": "_2bFPgSzFds-c4PE52cA1VS",
	  "form-control": "_1YWAaY5k2SjO-Xic0ILsoH",
	  "form-control-file": "_2nNu84aA5gtfesjX_iq_hG",
	  "form-control-range": "Raamgb8Hvrp9reIjlWyK5",
	  "col-form-label": "_15vEZeqlF6ci7DAkd8hM5t",
	  "col-form-label-lg": "_1hrNYZ57jvjZKAEkdR6ysV",
	  "col-form-label-sm": "_1KLjBInkRn3NGQxmwBOUCO",
	  "col-form-legend": "KdSO8pqUXVu7TnhzUzgGj",
	  "form-control-plaintext": "w7DyplMqR_MkfG5hGyLJa",
	  "form-control-sm": "_2pNDJJLfGocIuPHlznRXJz",
	  "input-group-sm": "_29P28_g6o0fmZmh6DaWwE4",
	  "input-group-addon": "_2QHFnKiOvIrgThBFdWBmxo",
	  "input-group-btn": "_244jkx4Iq_ldjiRNOPlzZT",
	  "btn": "_2WJiRJ-8_nH8nzFMfmiiMZ",
	  "form-control-lg": "_3ck8JomTAXjnQMuO-VfZxU",
	  "input-group-lg": "_3a78shfGLN3Meq5VGnj7I3",
	  "form-group": "_31HC4k611QRNvNml58hWv5",
	  "form-text": "_2PiKLPCYNBgBicLCp0anY4",
	  "form-row": "_2AzTEhqFE2-6TGKPZTBNWV",
	  "form-check": "_2THk4BHH4Tp0iIUUFo6xPH",
	  "disabled": "_19w0Cu8rQ6gltunaZ24vTJ",
	  "form-check-label": "_22xwudXKzE02I-eX5WXypa",
	  "form-check-input": "BMxlG8IDr7N-_ximdBh6f",
	  "form-check-inline": "_2IT-PnOj2JP88P-mlJ-FA8",
	  "invalid-feedback": "Hhj4LTegbGyGgWc7xBctT",
	  "invalid-tooltip": "htSUjz8nOcfo6OpXY1xTt",
	  "was-validated": "_2v7W_ib-AklpkNa8DLlgoK",
	  "is-valid": "_3xPGaBGyCMwWCri61s4wzC",
	  "custom-select": "_14hO0gc_KdKfN9qY0C2kou",
	  "custom-control-input": "_1FWmCJNST9FJydCQUTCv4L",
	  "custom-control-indicator": "_3q6PNchlIAKBpbw_OgXBFs",
	  "custom-control-description": "_2WVc0H5_va9s1oWhTBgEdx",
	  "custom-file-input": "_3vEV3SoGkjzseKk6rwfcpT",
	  "custom-file-control": "_2eme_ZBa0PsTiSHD66ddHh",
	  "is-invalid": "_2uIQaYrwBZkaNU1-V5PeJH",
	  "form-inline": "_1jX3LQ6jlEz6eR7MmzAkcX",
	  "input-group": "pAGGclitD16kpIg2vyBjo",
	  "form-control-label": "_2kk1vHA9muFLNB8iq9ynGu",
	  "custom-control": "_3Jp_DIueEhOTRTlIE5UOcv",
	  "has-feedback": "_2e8NJaMjSF6XpBmCJe5Mf4",
	  "form-control-feedback": "uOwAXzqhXMHwCnEfuaxGd",
	  "focus": "_3SDhSAehNy6KOxaJcHbv4u",
	  "active": "FKd5PRy5WTYxiAkFgtBE9",
	  "btn-primary": "coPxXTc2XQa857P2fQh2O",
	  "show": "_3h1Bpco3D9UiUpjcl9LHbm",
	  "dropdown-toggle": "z7QPOpjCNQSkxUyJNgD4-",
	  "btn-secondary": "_1ByAbxpzTfsic0hzRC1iu2",
	  "btn-success": "_34AX_i7vV9GjNnq1XD44QD",
	  "btn-info": "_1HSN78XFI7BhkUBnbQb8N6",
	  "btn-warning": "_3FltwST8pndl9I7eaLTDME",
	  "btn-danger": "_5uzNe-jWdxNNyRkNConer",
	  "btn-light": "_31G5ifF6jEc5gjNpg4ZltL",
	  "btn-dark": "_3JU1JRgAhGwTAvltzwgWab",
	  "btn-outline-primary": "_2gctPO59YlqLgd-os59qrf",
	  "btn-outline-secondary": "_2FNlspipGBjpU-qxULbqE_",
	  "btn-outline-success": "_2kqw5dIQ6lxvV2J1FxR_BS",
	  "btn-outline-info": "bOeuvBoT4xdz9XgS8wtBc",
	  "btn-outline-warning": "_3VoFQgtWQOQeqydA3s27V2",
	  "btn-outline-danger": "_3hk14UXi-TzB2IP89Y3toR",
	  "btn-outline-light": "_3eZM5dTLMqBS14myvcgGWc",
	  "btn-outline-dark": "_31ylm4ElwJajeKO6kZ4mtr",
	  "btn-link": "_16sK6LN1CWOeB2XwHYT8mJ",
	  "btn-lg": "_3eEo9XfTVpjOeSQUlyNRDN",
	  "btn-group-lg": "_1hLTURTaXTjGafKyGLariN",
	  "btn-sm": "fuTOLWSc3aVaJ3kyS2S-e",
	  "btn-group-sm": "_2mlWd80wRQ6ch6YwpsaAly",
	  "btn-block": "_2q0Mo-QwSQanNBzWwL67Tb",
	  "fade": "_6krgfmDjTkuP2W2qYPHia",
	  "collapse": "_28KUbtQRuy4dh9kk0mPMAa",
	  "collapsing": "_3stElu8lp20iOVnLgzE3Te",
	  "dropup": "_3HGoG6voS4jT7RMoQbDzvT",
	  "dropdown": "_1c41kqzmE_w9wSe3PdsCcD",
	  "dropdown-menu": "_3herhQoemTvIkcYPulmxhC",
	  "dropdown-divider": "_2Cd65IACDbT6m0VmegysKm",
	  "dropdown-item": "_1eHdvWlB7_Q8OJMNJhSD8m",
	  "dropdown-header": "_2anObzIj1INCN_eE8i5kPD",
	  "btn-group": "_2jznPuTMBTPsdEHxds2ZT0",
	  "btn-group-vertical": "pDDbBmeZ-e1pC1SvK7Tnz",
	  "btn-toolbar": "_19m5uAVxL8eweTS5dWIa-9",
	  "dropdown-toggle-split": "_2nxfFciAngEJ4re7una9eq",
	  "custom-checkbox": "zuAmd65nZX0bfuXQL2yLH",
	  "custom-radio": "_eMzxtvJrDkTW3GXOZs9R",
	  "custom-controls-stacked": "_2BphpokTuo1A3yYdiWqltN",
	  "custom-select-sm": "_1IELCRiIBCsa48PxNnQxz5",
	  "custom-file": "_1WfwPC6xPgBomSTyAVonfq",
	  "nav": "_3M63_7ibZ5PFrK1ADBWr6d",
	  "nav-link": "_21UjYUgyFO9skMmBSoH-il",
	  "nav-tabs": "_2uA6Sbn7i0J9LIXuCWxr-v",
	  "nav-item": "_1ppTmoZfo5OkImPOLOYBKp",
	  "nav-pills": "VDBZ6Lbf8RL7QGyfCU6_w",
	  "nav-fill": "_1oE5dGIZAwMvbuqN9H_xeg",
	  "nav-justified": "mJv0HhnHhTJBm5wI5XcP2",
	  "tab-content": "_178lkgWMKry-zkwyINgRHu",
	  "tab-pane": "nYR-42BiEAlwzs1cXD4cR",
	  "navbar-brand": "_3bH9ZL91ZrI4NmP8UTw2UM",
	  "navbar-nav": "_2czRd8DQQmoQInsiLaHfV-",
	  "navbar-text": "_1pDV93dJbUiIpmRhCL1uet",
	  "navbar-collapse": "_3Df9K1UJ8bvG9dO7C-FZDo",
	  "navbar-toggler": "_1LrLzNpl_yVBDV2__gpKWn",
	  "navbar-toggler-icon": "_3Jdg-SSOcH2OzcI-BrnRgc",
	  "navbar-expand-sm": "_16iDyp0SNjfgGDhFsnUV0a",
	  "dropdown-menu-right": "_2D-FVPq0xvB-5zDKaRbviB",
	  "navbar-expand-md": "_2-vlcB6NaiZUOq6UVLYpXP",
	  "navbar-expand-lg": "_2DI7qQ3qhS-Q1a27DtTJrk",
	  "navbar-expand-xl": "_333x_e5PJUGR2KjCVFmLug",
	  "navbar-expand": "_3eauQGb2ZXlX7uHh1I4btM",
	  "navbar-light": "_36dmm6YqfHB-nTYdFFj_mc",
	  "navbar-dark": "_3Dw1toXuSY-_KoHW19g-N0",
	  "card": "_2QW0gQDq-zD-1CyHkzTOof",
	  "card-body": "_1udzYXA7xdARgSIi7RZVA7",
	  "card-title": "_1Je9cV3XJr5kQIGo3UGUN0",
	  "card-subtitle": "EdBoSG2E4hNJ5VGNnlQQa",
	  "card-text": "_1agsnFTHQLfgDLOUN_8yiO",
	  "card-link": "_1qZnZniRNPb0K51hDMNJiW",
	  "list-group": "BKptfR-CnOiHeN-CS0tZG",
	  "list-group-item": "ULjHm2aSXbamw_59zKUon",
	  "card-header": "_1WV3oTSCTUeJ0MRKr0nNNT",
	  "card-footer": "_1fGJuHbW83joEEauNuf2DP",
	  "card-header-tabs": "_1ZGXCJIun4rZAlPgu1ELOg",
	  "card-header-pills": "_1mMoTwvNlok_Pbc4Zp73_B",
	  "card-img-overlay": "_1cmSoiCsV1P6vbxMVle969",
	  "card-img": "_1_6NRF_wRtGIVjqbIC8quC",
	  "card-img-top": "_2Bd6OcQsjLIp2TI15rtr5Z",
	  "card-img-bottom": "_1oLyKUmRrWmLDJIyo4f3Op",
	  "card-deck": "NybSSy7LLN7CoJ2jWHdJL",
	  "card-group": "rG8Hnq8FnHdKsCdN-vDcB",
	  "card-columns": "_2uSbCcqeCmHL8uJdMeR3Sh",
	  "breadcrumb": "_3ipbtk3noBat4iK8MgLVZj",
	  "breadcrumb-item": "_1ao1XU13205NezOj2X1Xa3",
	  "pagination": "_3rENjw5i3NSQRmTXQMlyQc",
	  "page-item": "_2zObsxNfzG9DqSyYOOM9aj",
	  "page-link": "_vyTm2zhLhKxFNBcdMVtp",
	  "pagination-lg": "_1TgXWo2IfJ7vWXKyUJQwsk",
	  "pagination-sm": "_3AtH8Cad4cF21ypDrM5Wx",
	  "badge-pill": "rVbnUo1h57GzeGDwF27Rn",
	  "badge-primary": "_1uhhsq5Fvl5NByTXqRvSFO",
	  "badge-secondary": "_220QUxSO2bx7bgpKaUQ9N",
	  "badge-success": "_1hMHAQeN0kSpdAvYN_Fd4",
	  "badge-info": "c7-rqSF_b0_e8vhMyFTMN",
	  "badge-warning": "_3ehPrJZPYOzBqQLD-xE99i",
	  "badge-danger": "_1YlPiIK9A7geMHBHk0ilWm",
	  "badge-light": "k5FZV_w7ctEJumuKqxpI9",
	  "badge-dark": "_2VKaZI5PthmsqsRs_riarg",
	  "jumbotron": "SjSz_V3sTChC1XGPl9OEC",
	  "jumbotron-fluid": "_2uu2cXQGIurIoD8-bX2x3S",
	  "alert": "_36v8_jQKePR7dy-MN934og",
	  "alert-heading": "_23sBU8yxbFzYK76GAvvosE",
	  "alert-link": "_2D2kdgm0EDQVyKjyg2boH",
	  "alert-dismissible": "_1DEa_YmcAurXrdRFpsL7Kp",
	  "close": "_39_SkC1TnYtGir8-Xqsf8w",
	  "alert-primary": "_1lv8wCWyBIzzraEdXml_tE",
	  "alert-secondary": "k_ZwLDcfSMagBcO9LR5xI",
	  "alert-success": "_3xKCSE6QI0CNLRZE4V_WTc",
	  "alert-info": "_2lqXM4xtDpUfv2gtVu5Rx1",
	  "alert-warning": "KnfZ-yZc3ouCOl6PH5MVP",
	  "alert-danger": "_31Fqi3UkYuhLRsMVX8kXfF",
	  "alert-light": "_3aKALhomYrACkdrfIJM0B7",
	  "alert-dark": "_2d4-SNx4mC1b3xfpg4fH7l",
	  "progress": "_2P7kxG4hNsgV6agmnxbbu5",
	  "progress-bar": "_3UTxeJYslI0xdZGu4wQfBk",
	  "progress-bar-striped": "ng-WN6CsyZ2Ee6YCqvPI3",
	  "progress-bar-animated": "_1fKuR5bY-NfNrYVLeHWvux",
	  "progress-bar-stripes": "_1UbGNlRteGrP1mQEKpi_Zi",
	  "media": "YqolP9rhpKCKeX96mo1ze",
	  "media-body": "_3ksOphX60B2B9TuVUTOArI",
	  "list-group-item-action": "u3Pua8bzHekgiyG6iRvpZ",
	  "list-group-flush": "XdSHUdgqe1Tw2lZRUQBR-",
	  "list-group-item-primary": "_1KblXNsa3UddiP6RjSArSu",
	  "list-group-item-secondary": "_3v7t9zsXKU6FK7Mc2D1Y07",
	  "list-group-item-success": "_15INlRvHzWQC81trGtXzFw",
	  "list-group-item-info": "_3TpLFtGl43IwDriAw4d33_",
	  "list-group-item-warning": "_3gSIBeoWFS-uT47HKRjdUF",
	  "list-group-item-danger": "_1pZl0_zxRrfBpq3m0JkBqJ",
	  "list-group-item-light": "_2wVokfYH2YpeSftEXX3SQF",
	  "list-group-item-dark": "_3qIWlumCREdncWP5l8OeUZ",
	  "modal-open": "TjPTfZS2AvMDLnAslkeTs",
	  "modal": "_25ObKB9_z7S89kEBzCykZm",
	  "modal-dialog": "_2zHbguDvBFGAmMhhxYHmW2",
	  "modal-content": "_2XX4P48dAcNsIz_qsbLy8U",
	  "modal-backdrop": "NWBKMlzH7QSUqbUahV-HR",
	  "modal-header": "_3cEit_bLgdZNtAxYgDoDl7",
	  "modal-title": "WO08lTtDSOng_ID6h0dj6",
	  "modal-body": "_2QIwAr6_4dZ-RhVHpn4bHB",
	  "modal-footer": "_3r78_q0sjV6bsYss5dGzI9",
	  "modal-scrollbar-measure": "_1d_lZ67pA6TPo7VY9W_azt",
	  "modal-sm": "_3Mf1rpi2u9zCd9YnWtY4mp",
	  "modal-lg": "_1u1F13GT8QJVZh3z_YKRfM",
	  "tooltip": "tX8zr5jhWIWemM7Op2sHy",
	  "arrow": "_28oNVcu2UxUcflgSjirik_",
	  "bs-tooltip-top": "yq9X1AipE5uBO-T8Mbt3l",
	  "bs-tooltip-auto": "_-yv41g1XO5RNNsMYygIoO",
	  "bs-tooltip-right": "_1whogEp51-g-isH7mBXM0V",
	  "bs-tooltip-bottom": "z5yuwFPukfj-Di8PgOat0",
	  "bs-tooltip-left": "_3MSDNBWlPkhbrNzR6HXbhK",
	  "tooltip-inner": "ca4W2Kb5wty3C4psvS_UH",
	  "popover": "WUikc6TV7wQJgc0oacBRR",
	  "bs-popover-top": "_3QoHWGvR0U3QI2jqN4dmbM",
	  "bs-popover-auto": "_1h7UvD8nzjb2jG6pj6Po0n",
	  "bs-popover-right": "_3tSmnGKf5KNDhSrpvGYjU4",
	  "bs-popover-bottom": "_2X_mKclox2vZtPtiTmaPoK",
	  "popover-header": "_2BRgSOOYduFya02UsYyGT9",
	  "bs-popover-left": "lHrHbiKaFGx-dwWoLpuRs",
	  "popover-body": "_1nr-6PdrYjzpL7Brr1CxEP",
	  "carousel": "_294ODzvYugwq5LzzdPm4__",
	  "carousel-inner": "_1fNihjnfFyoWyK4RhqnQlT",
	  "carousel-item": "_1ffYGaabfokvHeJiJXF59W",
	  "carousel-item-next": "_1_xlaeaf1h5-r_jiMbSmOl",
	  "carousel-item-prev": "_2q8JbhkSqvfXP5OK3z-2tZ",
	  "carousel-item-left": "_2VFo1cZq1P9O_pK9GKvX1A",
	  "carousel-item-right": "_2EryOrUmwFFSohv71DxMXD",
	  "carousel-control-prev": "_1izKgEUKMViRHsM5PGGWOX",
	  "carousel-control-next": "P6wjx5UcHffuKbTLZ-Wbe",
	  "carousel-control-prev-icon": "_3uyuQ3xklWmKTXJDjMC0H0",
	  "carousel-control-next-icon": "_3K5nOXR0H8NXee0p0p6Bnc",
	  "carousel-indicators": "_19TuQJ8wanN8yq4LnBLUnw",
	  "carousel-caption": "_383XJIXgGWuRYtDaW5K4x2",
	  "align-baseline": "_3lWif_B6JDoHNjCj-9Lbc-",
	  "align-top": "_1iXRaZ1QumLxwdxcC1BJnx",
	  "align-middle": "_3aw0zTi98RQzFbAzB4mtsh",
	  "align-bottom": "lTQ9hlcNbBXKz5G9C8cFi",
	  "align-text-bottom": "_3AjU0ATY3fx8vTENvRZwZh",
	  "align-text-top": "_14VIkbRtyi-ObImP5EDIua",
	  "bg-primary": "_2tt942l2OiaEV-p-4p4Vb6",
	  "bg-secondary": "_3ZGvU2M_V5FS68BHJLPBzj",
	  "bg-success": "_3Ozr3hC0Jaf5ATJAX7Sggo",
	  "bg-info": "_360UQiDA79LfOEYhNI0tqD",
	  "bg-warning": "_3-bXRiWeC0N9qLsXUTpKbM",
	  "bg-danger": "_1AMQ0OoVzENVNoMCdWysBN",
	  "bg-light": "_12mS40dZE_Cu4bpw_KlRhH",
	  "bg-dark": "_2WeKzG2GNVM1yWak495D74",
	  "bg-white": "_1OBCcgJEivlr33cofSrkts",
	  "bg-transparent": "_2gy1-KgcODf592a2_KvXEm",
	  "border": "_3n2hK7S3G-u5P0sxle02t9",
	  "border-0": "_2S9OHkaI30SlkACv_uvR3h",
	  "border-top-0": "_3myYQZLoZK_G37n_p6ulY3",
	  "border-right-0": "_1EG0gsNmkxqUrA7N33F1-U",
	  "border-bottom-0": "_3b-H_xcda31VM_-y_vW3fs",
	  "border-left-0": "_3ArJKwUi22py3eEu7-9bm8",
	  "border-primary": "ee-r8rtnu5CzfneHoW30m",
	  "border-secondary": "_3OofrEbXuRH_PKEW1QeGSY",
	  "border-success": "erjEOdzjvBCju-Qsx64G_",
	  "border-info": "_2eOT2z7y1nSbvOnyvoNfYp",
	  "border-warning": "_1mHVf_YnQf9qRsCM2Y6P4S",
	  "border-danger": "_1cKawlAW6ywc-gVCJDUpJQ",
	  "border-light": "nbRQZrs-OnnKqOMi6KgC3",
	  "border-dark": "oKO71jtZFD91-p7cFMdkq",
	  "border-white": "_2wJ88D_livOsSm1WKP62w7",
	  "rounded": "_2j6phgHdV11nJqYYYqB2Q9",
	  "rounded-top": "pDycfgvmJtbAbIbtLbUXD",
	  "rounded-right": "_2v4j_RrdmA-puHCnQ07C78",
	  "rounded-bottom": "e7e7jkZge-5y5s1vZe0s5",
	  "rounded-left": "wEulyjQqWMHn6E8Ej0Y0r",
	  "rounded-circle": "_3oCCK1ISwmddKlRHs0eOv-",
	  "rounded-0": "_2HXsVYgQi79zrUG67O6T1j",
	  "clearfix": "_2ljQLOG2EpId3U4Mu82B8u",
	  "d-none": "_3DoodW6V26pCgKXoiBuseI",
	  "d-inline": "_1VbLys2yYmLA3AaUfWFDSc",
	  "d-inline-block": "_3WHLrwGYygfWMXorcmuPmU",
	  "d-block": "_1SsNcXPnOO3Mo6Pc0_X_NB",
	  "d-table": "_3cRVMz8K_Jd_B2Fye9mbhw",
	  "d-table-cell": "_2VgNfOIliojfE6Cs9rQNWF",
	  "d-flex": "gjSPv-tpMLck0lGMWKPy2",
	  "d-inline-flex": "_24JcveqMcpWMMEM0hD3w_8",
	  "d-sm-none": "_1Yxcl9sXDKRrbc8I_uMPcA",
	  "d-sm-inline": "_1oJqksVhk38J9zDPSHSKck",
	  "d-sm-inline-block": "_3ThkuQboNHHTrS3I336Kvw",
	  "d-sm-block": "_16bXJMl4hEhuDKQjtbALLN",
	  "d-sm-table": "_18-E5agHO2UQeDq7pByOmK",
	  "d-sm-table-cell": "_1Fsn8qMXuDNMBiJduC8Xxs",
	  "d-sm-flex": "_3oeBTw4pHIWaTGvYX9a1sL",
	  "d-sm-inline-flex": "_2Y5347TJpDoXNjZnWdWSPY",
	  "d-md-none": "_3DjgSiCwQycf4zvDR1yEW0",
	  "d-md-inline": "_1pjhpZ5RbA7RhDHQFX9jOS",
	  "d-md-inline-block": "_3AbYxANPAB4GTz33rvAq-r",
	  "d-md-block": "_1mUW6uzessmcwnNpdahqwu",
	  "d-md-table": "_2vGo9iGB6fCC7Cnspsjbfi",
	  "d-md-table-cell": "_2_gwZWIb0yW6CkLF5PBCvH",
	  "d-md-flex": "_3EqXGIHdHzPoN5yPvSDv45",
	  "d-md-inline-flex": "_3DAS4_DCXdm5x_Uo_8QVl3",
	  "d-lg-none": "_3hqgQ8k3QaxhVUkdb1vNR",
	  "d-lg-inline": "_15f1oMwK4nlCtIxA2iiy7c",
	  "d-lg-inline-block": "_16b014NMIGpi0MZ6uuCk-i",
	  "d-lg-block": "_3daf3L-MGvGC18Wr8awdKe",
	  "d-lg-table": "mRwUI-VVRkeGg3__6_r_j",
	  "d-lg-table-cell": "_1vnCVYREsYoN_OWMHvWskv",
	  "d-lg-flex": "_34-sg9SWtuYhUiEBN5QTYG",
	  "d-lg-inline-flex": "_1bXtAB1ByxjQHHeNk5TXOn",
	  "d-xl-none": "_3bUFbE-B1HlkD90UVepGk9",
	  "d-xl-inline": "_1_b6QI3WcGpEJKAEx3D_Ng",
	  "d-xl-inline-block": "_1mv5Z77J4Zvu641jt_3_LA",
	  "d-xl-block": "lnafnISrQh0HwPmMVnKUS",
	  "d-xl-table": "_2nWvA8PKsFXHo6LV8hYS8N",
	  "d-xl-table-cell": "_3fWVhqjRw40AQx9oJtW-z",
	  "d-xl-flex": "_2ziE2TjDf3FHYd8EFZn8wm",
	  "d-xl-inline-flex": "_1f_A4HcIFzBD7KFP60iFDe",
	  "d-print-block": "ZIAZ94S6gQnUDnQaaRltz",
	  "d-print-inline": "_2NhWxIYxmtlcBkz7wh57vZ",
	  "d-print-inline-block": "_2qXuDN7gvclu9mBhUbz2ll",
	  "d-print-none": "_2L5u2rmCpMtm9cM2xHHymC",
	  "embed-responsive": "_1Ror_OneoVsc7vnwp72xvu",
	  "embed-responsive-item": "_1ufOhqI68rTdahEJ7JjWAY",
	  "embed-responsive-21by9": "_3pMtaO13W64cADKPtWZXdd",
	  "embed-responsive-16by9": "_13NjpiqGD1Z1AOSBjlAPph",
	  "embed-responsive-4by3": "dfC2sPQRejayb7Sb0ENmr",
	  "embed-responsive-1by1": "_2uK7_ydVD9PEXIv5FVqCQR",
	  "flex-row": "xYL3bWTechw7WOKGrKEPs",
	  "flex-column": "_2KdtDer-FBeKvv1BKTWSsJ",
	  "flex-row-reverse": "_1t2qTPpwBJmWnA41UibAkA",
	  "flex-column-reverse": "_1oX6MPQFQ_gtPP1qFxWZD",
	  "flex-wrap": "BZj9azt31LZNX9jpoCxPX",
	  "flex-nowrap": "_2cLoOUdgKTPN_MVAj92tzs",
	  "flex-wrap-reverse": "_1ORVAagHorKEymhOEbinad",
	  "justify-content-start": "_3cqbXdfjRVR3GPZnNt8eKm",
	  "justify-content-end": "ds8IZDeYkK7lBq4eoRnq4",
	  "justify-content-center": "_20AWSbAZglL82Eu9ggt0nA",
	  "justify-content-between": "_38bmomGtmezTMb_Xucknz7",
	  "justify-content-around": "_1axJb_zQpfj7Zf13J9a7ZS",
	  "align-items-start": "_2HgPApi2jILdUOUODKguJT",
	  "align-items-end": "_1rXCeC0BPb1DOL6BeJPUgR",
	  "align-items-center": "_1vkxtIfufE73y4u2YphHhX",
	  "align-items-baseline": "_2JcxOH3TSPRErKUg-G1I2Z",
	  "align-items-stretch": "_3tWv65DbrIh_Re6mma1QMc",
	  "align-content-start": "_1Bcx1OhpCGj8FM6docRvtS",
	  "align-content-end": "_2yVnVrDbTdp3kfhDleOvkh",
	  "align-content-center": "_3D0OoGYuNlhsg53lr_ImL0",
	  "align-content-between": "C33l3f8cJMz5fJlwFwfBs",
	  "align-content-around": "_1RfzMunDp1q6DLgNwS7gPD",
	  "align-content-stretch": "_19BTEZj819bfEyycxW5b3F",
	  "align-self-auto": "_2WOdHeBw8H_9bYfPtk8sIA",
	  "align-self-start": "_25QMn83P97z45xQ6Lpqg7j",
	  "align-self-end": "_22lAswRYgXyqSca2mybeK4",
	  "align-self-center": "_31mw4i3z9AQ34YPv2URtwT",
	  "align-self-baseline": "_6rt9TwQTHG0oFdKoU2EkF",
	  "align-self-stretch": "_1xdXK_HpuyDQplARPkrleV",
	  "flex-sm-row": "_1DlN0PCEZN8J4VAdzEGq6s",
	  "flex-sm-column": "_2IkaIU44FcYeE180XDrwYT",
	  "flex-sm-row-reverse": "_3Fc_YjG6pd5OY7MGj4PUGS",
	  "flex-sm-column-reverse": "_2VPzKwmF5C97S4FFlI2wn-",
	  "flex-sm-wrap": "_36TWdfjqwMKQr-qoAVDAfO",
	  "flex-sm-nowrap": "jwqPF3bj72aH_ByhybJlX",
	  "flex-sm-wrap-reverse": "_1uqXnsCINkBMx6wf2ht9MD",
	  "justify-content-sm-start": "_1VipkTBIouuEPf3V2EDQR7",
	  "justify-content-sm-end": "_1sznBV5cZ_-r9hSh_2Gi-S",
	  "justify-content-sm-center": "_24ILhUQ5P4uxYDqO7mr2qD",
	  "justify-content-sm-between": "_3S4iRJm9u39QByHU_gS14n",
	  "justify-content-sm-around": "Y-VqhQIL5FtXwW0NGpE2X",
	  "align-items-sm-start": "_1tUPkcRxefbv20fcAfShnb",
	  "align-items-sm-end": "_30-Bm2DdBw1lca6ZplQrp9",
	  "align-items-sm-center": "_388KFh5kZVxPGFfgq7cooD",
	  "align-items-sm-baseline": "_1Px4I7TUO7zSGPPbvPSPML",
	  "align-items-sm-stretch": "_3bPtu6NwS5Cu4S6cJ6ravC",
	  "align-content-sm-start": "_3Y5jAdMB3JpS0eZ9HvT2VM",
	  "align-content-sm-end": "_3HnvDUbOhp2D_CBb6yuZv5",
	  "align-content-sm-center": "_2PRThaLqj4oBnJDsSwksF5",
	  "align-content-sm-between": "Xa0ech1axWFO9L4gEHXCX",
	  "align-content-sm-around": "_3NE5H4J3xxt8G5hwQdga6e",
	  "align-content-sm-stretch": "_3qn_FgiwMy6WR9GKFMxLVI",
	  "align-self-sm-auto": "_2l2SKVmnDvts0tlOp99jy1",
	  "align-self-sm-start": "_1s7YJs2YFaPC0d5dZBA9Wl",
	  "align-self-sm-end": "_1b9PQQG_JMtsGHGQjFdj5Y",
	  "align-self-sm-center": "_2jHsvc-8U-ke5nLlEHDELm",
	  "align-self-sm-baseline": "_1B4ACQPCJggCR3_AXRv1Jm",
	  "align-self-sm-stretch": "_KQHiZLBdCzt9mNxb_dUY",
	  "flex-md-row": "_1OWFFH2wTYtIAeq9p0s2Hi",
	  "flex-md-column": "_2lJbjXlPYBPZtLGkNZp85C",
	  "flex-md-row-reverse": "Y-De03ywb3PpvTC40yoM7",
	  "flex-md-column-reverse": "_2WLvfQHBVIx7Vlqq_YWROm",
	  "flex-md-wrap": "l7LYe3ctOpwCptm0ul_-z",
	  "flex-md-nowrap": "_3xvh2ohAt7hPZlO6rnEEOm",
	  "flex-md-wrap-reverse": "_3SgVf-HoCuN0OoKbRn2IPA",
	  "justify-content-md-start": "_1dzTnamEvf8Win2kcP68T0",
	  "justify-content-md-end": "qPEuEMkNL3eNQEbQX7A71",
	  "justify-content-md-center": "EtpTjPJWQij_J2qumtC_5",
	  "justify-content-md-between": "_10RuM6QZoTKC_i29kN-HSF",
	  "justify-content-md-around": "_32SknLU9ViRq8Gtw5QkvVT",
	  "align-items-md-start": "FvUz2WXN3lviNKT6FRtaF",
	  "align-items-md-end": "_1YtR4d5VlogpqEahX4_hAd",
	  "align-items-md-center": "_3kzoxF2B0kZ3Xa2r-NzPZg",
	  "align-items-md-baseline": "_3UssSSTJkyVhuBmKluvVWW",
	  "align-items-md-stretch": "_3GMLd2qT8Dn71219N3b6Ko",
	  "align-content-md-start": "KdlhNVgKwM7rw3LUf4U6P",
	  "align-content-md-end": "bwnM_W8T92L2DoY_qYJM6",
	  "align-content-md-center": "gc2yUzb7lxlCtT_EEncU2",
	  "align-content-md-between": "_38lRemJRRAuuIRMhlZupYO",
	  "align-content-md-around": "CfE6J4ILFfZjWnZW8OZLo",
	  "align-content-md-stretch": "Bnnma_MW-MXgBTAgUviBW",
	  "align-self-md-auto": "_3nBk9QShkrA38x27NdK-jM",
	  "align-self-md-start": "_1gxxQLBCy5u5TQotVWQKPv",
	  "align-self-md-end": "cFqy6qQzPghE6P6N9Rk0O",
	  "align-self-md-center": "_607u6LOEQzxHnFFDcvR3Z",
	  "align-self-md-baseline": "YksQjRKWvJMU5iHhv78vp",
	  "align-self-md-stretch": "sFhLZ_KBZUeP4n_-KolAP",
	  "flex-lg-row": "_2UQZZBsSTFGC8kwzDhQsxL",
	  "flex-lg-column": "_2lOXPtmJRHEhlrWcERL3nk",
	  "flex-lg-row-reverse": "fWwolWS-gnRO9puak4uQh",
	  "flex-lg-column-reverse": "_3bKNpM8zk3fWiA5oFsdgVf",
	  "flex-lg-wrap": "_21YSMTxlCGh98PPn-vDalz",
	  "flex-lg-nowrap": "_2fSw0ePg4HePbtd7v44L4z",
	  "flex-lg-wrap-reverse": "pJr3mw9suSSQzJ2oG9Q7K",
	  "justify-content-lg-start": "_-FPKJuMgs-HXxuLWNemx-",
	  "justify-content-lg-end": "_3sIwI6BtR2si5VDUTkDtd0",
	  "justify-content-lg-center": "LEgBKVLSuaMBV27LQz6ir",
	  "justify-content-lg-between": "_1GbC8jzBVhAnNXMQXFyCsa",
	  "justify-content-lg-around": "_35dgBrVRcsKKbt8vBfgrUF",
	  "align-items-lg-start": "_9tlUdcp1QjKmEfv8Xb8D0",
	  "align-items-lg-end": "hMZ6sNL_ucsNgGacfCO4x",
	  "align-items-lg-center": "_1VGBxSl22XELNURRQyzTmz",
	  "align-items-lg-baseline": "_1Huy1e5cuwZgL8GbgDwrgj",
	  "align-items-lg-stretch": "_1Wu6c5zJ9ApKFqo4qjACVZ",
	  "align-content-lg-start": "_1zzVanlzFDMYFlPwQNWTkR",
	  "align-content-lg-end": "_1rujMZZ12ahid5cSRQt4aj",
	  "align-content-lg-center": "_184Yc5AkbN8G-D1lG5ifQO",
	  "align-content-lg-between": "_30E3Go6ExeFCQ4563uWF5Z",
	  "align-content-lg-around": "_1oMUVw6bUhwTPdL45IBR1G",
	  "align-content-lg-stretch": "_2SIa9y9tmlyr1pgSmEMUZw",
	  "align-self-lg-auto": "_1pXmXKDS3geWYJEg1_57Sl",
	  "align-self-lg-start": "_1Q9P2Axv0hQAkumJ9YFh6t",
	  "align-self-lg-end": "_4JUXkzZEjKV67g6Oluo9v",
	  "align-self-lg-center": "_3cOXlZxUz6xHFnWFBRIPX6",
	  "align-self-lg-baseline": "_2gXj9C_cJEGQ2LrsfzXAJ1",
	  "align-self-lg-stretch": "_37aIoKWZARBtlH9u0VWNLa",
	  "flex-xl-row": "_3Rb8iVd5NHsW2eemi6JQsd",
	  "flex-xl-column": "GkXQoXEaj9G-dCIeXQa9K",
	  "flex-xl-row-reverse": "_19N6RHFIbaR_Sr2lzX-Z7q",
	  "flex-xl-column-reverse": "_23urN24xTNHMgbd7hpuMeL",
	  "flex-xl-wrap": "_8eYL6UJwU3snwqu23cwWR",
	  "flex-xl-nowrap": "_1YoHFT4wk8ccLx_3tgmEf6",
	  "flex-xl-wrap-reverse": "_26XFZNdK_V3lxtlcvwH1B4",
	  "justify-content-xl-start": "_2HL2vsWWfi_FPEy-9cg8fE",
	  "justify-content-xl-end": "_3mciUYczp_R-UcDYVbKNuL",
	  "justify-content-xl-center": "t8HsSoKUHiBAN3qSzqUWT",
	  "justify-content-xl-between": "_2nt8HCUsNeiJ9A5rvBCcP4",
	  "justify-content-xl-around": "_1mLjuIVJfPi-JTe1HwRH1s",
	  "align-items-xl-start": "_1MfAa-jkVmEb2IpDyHAFZ-",
	  "align-items-xl-end": "_5mnpqESsNl5SXOta89_su",
	  "align-items-xl-center": "_1d_qa1zMKfAU4gIroDTC5j",
	  "align-items-xl-baseline": "b8JtBS0Z1dRpCoYi7uP8q",
	  "align-items-xl-stretch": "_1XRhXwpTqJOiLXSGAmW9U4",
	  "align-content-xl-start": "_17HGGjJr3W5gtqeZ3bsIEu",
	  "align-content-xl-end": "HOd9QGd2kcLr5n2Xrednj",
	  "align-content-xl-center": "_2xRoQ3UtoTdpyL13pYNkHr",
	  "align-content-xl-between": "_2qtVGN-Dmkrggw57FYtgC7",
	  "align-content-xl-around": "wnr6plpsz6eITZEKtPLBo",
	  "align-content-xl-stretch": "_2HXocUn_4yuT-ksbGvP-j2",
	  "align-self-xl-auto": "_7Q2FacDzgZ0AvC_78693A",
	  "align-self-xl-start": "khgdR-DyOaB6h3f22_Vsy",
	  "align-self-xl-end": "_2Uh6zPu2hShpM1COCaZL4K",
	  "align-self-xl-center": "Nicwsbbf8H2-UqXcrWuL1",
	  "align-self-xl-baseline": "_25zda4HsM5-r5Zoeh0AXcQ",
	  "align-self-xl-stretch": "_3zG6ws9PKYerpWKN0w1r2y",
	  "float-left": "_17Wg6dDKd0TzN70oyEWozs",
	  "float-right": "_25B0y4aInXUUvViWnMA_U_",
	  "float-none": "_1qmg3ZhR2hDzVR3VYl_L8W",
	  "float-sm-left": "_PjN-I1TDrjr97KpGU2Kj",
	  "float-sm-right": "_1T0V1XXkHGWykVxi4NOnvV",
	  "float-sm-none": "_1bEXvWCa3MZbWca5aP9aUA",
	  "float-md-left": "HCw-Ojt_k0J7-tBAGHlzG",
	  "float-md-right": "_3CVbjOcbLPbINKZS3MZvm6",
	  "float-md-none": "_3OSEQ4-QbgidmzxshbYfJ-",
	  "float-lg-left": "_2Q6r--GZsrLbJEzMBEnJPi",
	  "float-lg-right": "_2dC8eWu25A5TuexfCHPza-",
	  "float-lg-none": "_2XF2My7BOROLU0s83mERuA",
	  "float-xl-left": "_1quP38DNn3nbWCbdfLqcJW",
	  "float-xl-right": "_1APTBCKCKmMDHSKS26zHdX",
	  "float-xl-none": "dt86Q1sbCf4I3Vlej6P1k",
	  "fixed-top": "_1L-nIi6Bs0P0RizVuDINck",
	  "fixed-bottom": "_2pxKQoJkkGFqC84qdQR6tZ",
	  "sticky-top": "_3EC85JY-hoV97B18CUpKNf",
	  "sr-only": "A69b1Z4RTzUENNQmg0lI1",
	  "sr-only-focusable": "_1kdm5CjFp4k9MhpSFEnLZm",
	  "w-25": "_2bkzYP4A6R9VmeAbWpNvFu",
	  "w-50": "_1GM0FIQFhEg2qCJ3pCcqmh",
	  "w-75": "_39oEf8yxpgeR-bzGlXzgYe",
	  "w-100": "_3WhBQTL3IXGNEp7vORaLiy",
	  "h-25": "ErgNWGZqNLPpDd0OC7hLN",
	  "h-50": "_2rjeyHyOGuW5tsHlWK0Srk",
	  "h-75": "_2yTAzUw5QMNXfqnvducjju",
	  "h-100": "_1tQhMYM28R7I-j9UU8EMmj",
	  "mw-100": "_2F__wSpa9kac40lpEHET1M",
	  "mh-100": "_2c0J3NN5hP8lt-Pvkp2jH",
	  "m-0": "_2yAeIOXhZFPLn4noQsIoJS",
	  "mt-0": "EVbEwzbqccb-s3hpYsUKN",
	  "mr-0": "_3SC6986rEBytNAwrl2aYmF",
	  "mb-0": "H9VnhxI47FIAtzLIpGvDP",
	  "ml-0": "_24ghqg2MGdnBWcA8QH0T9x",
	  "mx-0": "_1oKIDEtEEIDsW4wqYiXUNl",
	  "my-0": "_2JvmPjqc_eQyJKT_n_pily",
	  "m-1": "_1y29mpGnnwt1PKay4M5ka2",
	  "mt-1": "_1Fdgy4aCibhMUQGYFJnm7b",
	  "mr-1": "_1uUZfvDLpPVWPUxYDjYD8b",
	  "mb-1": "_2quQie-Yh7mxAfuOZW3pJb",
	  "ml-1": "_1MdyjbMEhFhXEfFqafsUkU",
	  "mx-1": "_3QsBugcJr-kl7ThoG8dbQf",
	  "my-1": "_3ibU1pvCEdNmW6v265KcKx",
	  "m-2": "_3lS4BqDZxJ3DHb35RKIFOw",
	  "mt-2": "_1GtXKBFpzUt83YH-FqRpPM",
	  "mr-2": "_2MYfSZA-fFwFdZC0lHH1an",
	  "mb-2": "_1H-yqdDf529Ot_lDhWWHdD",
	  "ml-2": "_1IY5I7G_s6ZWGZRfPQxgpa",
	  "mx-2": "_3wDNtB6gzT9kUGpl2XGOhJ",
	  "my-2": "_3A0vbLUcDU0c1gYSIkQby2",
	  "m-3": "_2dJLvMSNNa1hDckKjzWaf6",
	  "mt-3": "NFOQYnb5jf2m71jnmsc7s",
	  "mr-3": "_1ibC9YDeS61HQUiA00LDpI",
	  "mb-3": "IKb2FrCCDmo0RbzyWNE5E",
	  "ml-3": "_32b0y1323KV7p1JnRAnw_B",
	  "mx-3": "_2NCOLVfC6AJPHTKYaTmOeL",
	  "my-3": "_1nG1n3doMxaqipmoQC6wDB",
	  "m-4": "_3uCtn4c4-LVSBRYdHwRjR6",
	  "mt-4": "_3pu35N9AEmjmOVCvioPYpf",
	  "mr-4": "_3PBTgujWb0nit4XGH3RaGR",
	  "mb-4": "_3jlKl4T-D-lI9B9Iq1QrpE",
	  "ml-4": "_11HSl6rVEwhRhGySN8x513",
	  "mx-4": "_2M7Qdx9WKyGivBfnfFODf5",
	  "my-4": "IHBSRM4HUxxIyOAxrHBdL",
	  "m-5": "_1-iljox7Z43FERNpZsFAJR",
	  "mt-5": "a1s-gfKVuSSKc_kgqfljD",
	  "mr-5": "I23AAA-5DpbAUxQ5THkuX",
	  "mb-5": "_3N3007rQDsP4Ng7r9uiuzF",
	  "ml-5": "_3KNXJIRL2BlEnfYmkWOyc6",
	  "mx-5": "_3FaKP2YcbkHjYZfawLdOtr",
	  "my-5": "_1jw4lWkGCyWU5KiP80Z9pu",
	  "p-0": "_3qSDQknmvLyDh2531v5kn4",
	  "pt-0": "_3AxwrvSx6fAIxu4wvtFBSX",
	  "pr-0": "_2Oe1zeQBsaGRmGKnvialkS",
	  "pb-0": "izHe6NVmwkvKib3hItEOy",
	  "pl-0": "tYcBEu1CORTM8pvIPzLZX",
	  "px-0": "_1p32rK2bGJmrtGIKoR2wnX",
	  "py-0": "_39HpjLq8jhEl3LP3cgwBAc",
	  "p-1": "_3m6NrEP6f3DKUy4jgciKet",
	  "pt-1": "_1RmWx7-AerDN9u4053vbSh",
	  "pr-1": "GOG-Za14mxV_s8z_HkyTy",
	  "pb-1": "_6v2mNYQx-v7IkP7fmX62a",
	  "pl-1": "_3g-igKpffonmYEBiETeS02",
	  "px-1": "nUCEWY0BasT8W3lF4u7pL",
	  "py-1": "_3bVT4if2ewiCH2ptR1TFQF",
	  "p-2": "_3GtmPXDXpNQ5Sd6XycThSQ",
	  "pt-2": "_1XnxVbx19gJFXb8uz9Saed",
	  "pr-2": "_1dTvKoqFkaxRL_9M5pIoKY",
	  "pb-2": "_2BwrvMUEFEJa_SzJiJ7Jc_",
	  "pl-2": "yKv4Is8wARGwvqO-WlEWD",
	  "px-2": "_3D3X9GVlD0513GZIsHEdnu",
	  "py-2": "_1JTkTh6u-8WNyRu99a9MCP",
	  "p-3": "_2TUQgaRpt9Uvc4zPTd0VYD",
	  "pt-3": "_1O6nJqpDQysSJylR5bdyyZ",
	  "pr-3": "v7gOV6KvMfXtKjF2SbD3q",
	  "pb-3": "_3zYln81_3fmeNYEg9gbTBD",
	  "pl-3": "gEJS8Qc3DhY6q8-GkTtHK",
	  "px-3": "_37FPTzmK6kIZ4KQk5qbDK2",
	  "py-3": "DWRNb1pkXxy-0_KJbDJFH",
	  "p-4": "oHwyEkXtwblJptngsKXLS",
	  "pt-4": "MRfNs3c6veemBiReDxC7y",
	  "pr-4": "_3HmOJ-YcQgY2s72WcktTU",
	  "pb-4": "_2Ij1U95xnu4E9uD1XtVD8e",
	  "pl-4": "_3oI6lh8Ze9-e8pVHWdkmTu",
	  "px-4": "tC6KFUhVx7jEa_3w-29mA",
	  "py-4": "_1c7Ok09gLvmqECW3K8CWvi",
	  "p-5": "_1qvQ-SyK-qcNz_R2r4HN46",
	  "pt-5": "_1nsuY5vEDxOEggLfopT5ns",
	  "pr-5": "_3kKNOYVYYPsuXPQLn5Yotn",
	  "pb-5": "wNcPL2QOQ-0wrmi8IJ-X3",
	  "pl-5": "_3Mt3RrjuY_pQ8g2jZOBUD3",
	  "px-5": "_3xaBNM0YZ-YuQ8SZl8shJS",
	  "py-5": "_1pc4-YmDE4NzjZoQLfdg7c",
	  "m-auto": "_1hN551r77PecAAx3AXLsTJ",
	  "mt-auto": "_1lmOktnaaeHl8Q7fRxOPYw",
	  "mr-auto": "ZW86yL1L7aKAAS_mx5Q07",
	  "mb-auto": "_2XxC2APixzBqZ3oSrFQn5t",
	  "ml-auto": "_2qPuboz2IXL6zOKN6e0AdG",
	  "mx-auto": "_1JHuArCmTdkcat5zSn_s2t",
	  "my-auto": "_2U7Vq9_3IqZLD_CkrrYF8m",
	  "m-sm-0": "_21V9yZkJWTXeRs0n6mUSJ4",
	  "mt-sm-0": "wA_fUacnVl92mDazBPql9",
	  "mr-sm-0": "_1GD1LNz5FU8MG58WBXnN_a",
	  "mb-sm-0": "uARtH70q22BLthju3Qko8",
	  "ml-sm-0": "_3QJIA8wUh6fLGCaVf5_3tB",
	  "mx-sm-0": "_2UUSA_dBYnL0O8w-E7az4A",
	  "my-sm-0": "RD-66a9QXyghyBwltb1rw",
	  "m-sm-1": "_13M_5N5GSCRHAUVqxyf4rf",
	  "mt-sm-1": "XIoOLsesxQgzMtTXryXdz",
	  "mr-sm-1": "_3sDknyJdFdYF-4EoBDGued",
	  "mb-sm-1": "_7l3W5C4Pvqbw6VIn17aNQ",
	  "ml-sm-1": "_1jzCKCTeryfUxiFamJSuBO",
	  "mx-sm-1": "hHhE3vWvKWBqjWp_aDXJa",
	  "my-sm-1": "_2KQfB6spB4rtEZXUVh8F3m",
	  "m-sm-2": "_2Ibkp53bhudUf_N2YpxA7d",
	  "mt-sm-2": "WaMQ2hkq3EB2qKFEN3yC4",
	  "mr-sm-2": "_1092NeRNw5vctzDh6Aoyj0",
	  "mb-sm-2": "_2zVLy9Nekbe8A6xLMOWrwj",
	  "ml-sm-2": "_1h5C5t27Nv7G64KtKAtgzF",
	  "mx-sm-2": "_2-Bc7IVG6em0eodivqmi0N",
	  "my-sm-2": "_7dPiapL9phzQSo493auHZ",
	  "m-sm-3": "_3k8jrX2tC9XAFvZ-5fmVwM",
	  "mt-sm-3": "_36zq_mQhWz-7jKKOuI_Ftk",
	  "mr-sm-3": "Q_H2lVKHUprVr4rWIJiNE",
	  "mb-sm-3": "sNokCtvN9GPawku2c7Q32",
	  "ml-sm-3": "xMTAS_aw2hb9wZN4W2U1J",
	  "mx-sm-3": "_3gMzoxcKvHrSHZYjpZuPYU",
	  "my-sm-3": "_2nefoZcXfzroiPMcs_0m6v",
	  "m-sm-4": "_32w2L4NPZhqBqTv9CedNo4",
	  "mt-sm-4": "_3FpcaYQfpqxwfMJ-DiTdPW",
	  "mr-sm-4": "TKncLlHTicCj1MvmJ12dO",
	  "mb-sm-4": "_1wqsDVUCChlzlXV1LrP7N1",
	  "ml-sm-4": "_3DVUtGf6VBpYnoSPzcKpJU",
	  "mx-sm-4": "_31vEy56ycmWwfZFrP8Th--",
	  "my-sm-4": "_1XY5Qq6Et7goL49WiupKxa",
	  "m-sm-5": "_1747yhGJUW64GJBPpTOXkU",
	  "mt-sm-5": "_380Cv7VBBYUtGT7BI52cp_",
	  "mr-sm-5": "_1eQWlXbbDpi6yo3Kj4auZ2",
	  "mb-sm-5": "_2RZEt9qMDrO5kF4xKEPehB",
	  "ml-sm-5": "_24BxgxSYbK4NacSJnZMkvo",
	  "mx-sm-5": "_3mg6xm9zXVCUfw66T6Wbv7",
	  "my-sm-5": "_33Ucz_QAl5frKWk0A9HVli",
	  "p-sm-0": "_2uM5mnm6lCoT1az26h2LcH",
	  "pt-sm-0": "_3Cu4TGmA6Wl2keTpJfJwur",
	  "pr-sm-0": "n8rlC8vt5BGmrk5gw8fFG",
	  "pb-sm-0": "_3avfTM6SQf-4Jf9ZvYMk0i",
	  "pl-sm-0": "Z8ZdkOBh5KgF-g66SD3lx",
	  "px-sm-0": "Sy4jj-PnhmCvC63j5dAti",
	  "py-sm-0": "KGstQVNyaxka7SWn6WLkf",
	  "p-sm-1": "_25uwtUFnVhYFMve6qXrnr7",
	  "pt-sm-1": "_1xfQBeJ7Ew1x8XHcjkGEeg",
	  "pr-sm-1": "_1qVytn8WHeCCVfoRSQHB64",
	  "pb-sm-1": "b1eh3iJFILaRpgDzqusFU",
	  "pl-sm-1": "_3tlTxmIlqawuqfw4_cw0YP",
	  "px-sm-1": "_1CfL4Yv2jHnV_4k2agw2rK",
	  "py-sm-1": "mNtwgODWVYfDouFPPELhy",
	  "p-sm-2": "saIvlFJXIqJy38XqbRpAk",
	  "pt-sm-2": "gIVoJw6idloTmUeFBm0uj",
	  "pr-sm-2": "_3eeOp_wFSGIkh7sra7qzED",
	  "pb-sm-2": "_1prdny3X5LOxE8bQV0p7oT",
	  "pl-sm-2": "_3xooV9tYWbFaFlc4fHhV7S",
	  "px-sm-2": "xiU7g_HVVfvQIBtQTJWia",
	  "py-sm-2": "_15l-paIAF0fwbl0m_zZjaV",
	  "p-sm-3": "_1Q0sk8tCgm3AbXmOAk8pse",
	  "pt-sm-3": "_3qorerLah0sNksaf3ZNgPQ",
	  "pr-sm-3": "_12ZCnK3jCCKfpbc1VO-CZJ",
	  "pb-sm-3": "_37lvhBbP2_JVwvJubxJoQD",
	  "pl-sm-3": "B3CYg0F499dPNBhGXtQNz",
	  "px-sm-3": "_1QG1TdV9x88mKeG1Tp_5-H",
	  "py-sm-3": "_1lXUcMLSVH5ZKXaGkdWOsc",
	  "p-sm-4": "_3V2aclOZ1VamdJZsxP_H8s",
	  "pt-sm-4": "_1e4QvaFboyUARKbUIWiStA",
	  "pr-sm-4": "_2Ec4VlDR3hmvuiYxXIMoa9",
	  "pb-sm-4": "_3QCTOfwmMQBDI77n06PvZr",
	  "pl-sm-4": "_2LGJ6u0niJptU5dr3JCXy6",
	  "px-sm-4": "_3dDyMJfSFYsNp4LstRNcIP",
	  "py-sm-4": "_2oFtP72B-hUiruiyKG-13J",
	  "p-sm-5": "iL9gK-wTkAz_3ZyecyXsv",
	  "pt-sm-5": "_2aBMYrSusyzrxnc1YX5wBB",
	  "pr-sm-5": "yJkPXLWQMlVpm_J4GEG6l",
	  "pb-sm-5": "_20jWxqz1ob1azPrE4Yu0Fm",
	  "pl-sm-5": "_35DXJbWbeZOttAxsUSKXdN",
	  "px-sm-5": "_2HHXp7bg1KNkJQhXYWiw5k",
	  "py-sm-5": "_3w4BqVSYaKgIKgwFfExOI0",
	  "m-sm-auto": "_34KzmWaP1grboBaTNIiPUn",
	  "mt-sm-auto": "_3DgeIDG6KhtshXErA2Vf_D",
	  "mr-sm-auto": "_3OVg_n9yLMovF0YpcuX3Bq",
	  "mb-sm-auto": "_2RGU2Ap0QKilKz06Wu8D7g",
	  "ml-sm-auto": "_1WJMQUnVpE2P0NnibBKMu_",
	  "mx-sm-auto": "_7115GGGCm0Pb9NFzpJdN1",
	  "my-sm-auto": "_3aqqzaMNpshpX1KDgz1CjK",
	  "m-md-0": "_2jMo8KIB2351VevMSjTYWs",
	  "mt-md-0": "_3p5cIsDEaix8lI-Txalw4T",
	  "mr-md-0": "_3QnkGaxwQvSWQcS1lOxJrY",
	  "mb-md-0": "_2dDu1iKmF7XJzIsEaqVJnU",
	  "ml-md-0": "_1NB-aBsHzOel8GwA-gCADu",
	  "mx-md-0": "_2EMy_KbAZJ7qBYgr24mCDZ",
	  "my-md-0": "Jh9EUrtQosuNLZHoMw_wv",
	  "m-md-1": "_2g7x8Ws_cdKtJmUR8xi7mQ",
	  "mt-md-1": "_3ZzApkS3otN_flxNAzbwFr",
	  "mr-md-1": "_2TP9fDKuH6nLL6NfGMP4gu",
	  "mb-md-1": "_3KB2m3UmkSHIlv42ZyelvZ",
	  "ml-md-1": "_Q4qg56cHfT9Z_moyGIVS",
	  "mx-md-1": "_3TrJ-BwVSv_cJ9JSWJHwvG",
	  "my-md-1": "_2OgbesJc74QruC6elq9sFI",
	  "m-md-2": "VD93XS8pv0Cl98vx3obdj",
	  "mt-md-2": "bfT-VkOz1MDqHtxvZDtz8",
	  "mr-md-2": "_2vqxYuMMjXu2ITCWb25EIq",
	  "mb-md-2": "_32G3YayyeiuVFsBIVGJ1e3",
	  "ml-md-2": "_2ioCPslrKpytvGJIEd-U4o",
	  "mx-md-2": "ADiAyUxW00r_fn9y6jvmP",
	  "my-md-2": "_31-UWOVYBg4qrXnxjcshHk",
	  "m-md-3": "_2ZkPTQ63QZ5EXgTNwWhja-",
	  "mt-md-3": "l23bY2cGOONW2bQt-QMaT",
	  "mr-md-3": "_-yxO86uvHevauRkNAfOet",
	  "mb-md-3": "_3s7AYUAqn8cDUbQIpoZjYL",
	  "ml-md-3": "_1RWEtqqEcLSsNKXORKmegY",
	  "mx-md-3": "S_9cOACGtLesL4Q-pZbrl",
	  "my-md-3": "uzkDyTex75NOeVQOxspB6",
	  "m-md-4": "TWUwnRgrPLIF78qN63nD0",
	  "mt-md-4": "_2rSFODfpH3FXEUfjVuZW_N",
	  "mr-md-4": "_2G5ev3492WKVwpMbp1U-8o",
	  "mb-md-4": "_3ryCkiHy1oqbGL9nuZl0MG",
	  "ml-md-4": "_2dQnEV_iyKpLwbMfbO2he8",
	  "mx-md-4": "_3kWYi5amNPZOTFv4ETYUn",
	  "my-md-4": "_2gqfL30WnhJ1x1lJ6h099o",
	  "m-md-5": "_2hJxdqxyjpoIYPSF1orJO7",
	  "mt-md-5": "_2SEx5IbUgWqZrzL9IqNbuV",
	  "mr-md-5": "_3sLlR5ZP00yenhRIJ3aMYE",
	  "mb-md-5": "_10z5dHRlIoXM55Tf7BMB6Q",
	  "ml-md-5": "aaAshTeCL3M1IHoR3fNcu",
	  "mx-md-5": "_3puCmaMI47AGZqVLXbduOR",
	  "my-md-5": "_2simUlyD6VmNrI8sWdiM6d",
	  "p-md-0": "_1MLtDk6kgYoDg33a7ZyrN-",
	  "pt-md-0": "_2WcyT_gThjdhTU0179l9jk",
	  "pr-md-0": "dOr4cN1PciIUvDs5iEr0X",
	  "pb-md-0": "YA93mZqSluTVeJbj4zEGi",
	  "pl-md-0": "_2IF2GPar1sEivF64ObAVsY",
	  "px-md-0": "JDTnN0Nax6J_HRMJISZz8",
	  "py-md-0": "U4IKSHF9r-xFtF3Adlc0I",
	  "p-md-1": "_3vznseKkBgKJB0GdDQaX2Q",
	  "pt-md-1": "_2G3KN9Crq8v9vgwDST5ojO",
	  "pr-md-1": "_3OkGavauTQg9bTtNAvaKeU",
	  "pb-md-1": "_11bQXBLm0-MQhLgK2Han-A",
	  "pl-md-1": "_1U58tc7OX5QEXv6jKsHRtk",
	  "px-md-1": "ScpDBf-Bs3QAyr9M56Qh6",
	  "py-md-1": "mb3MoJ97AnX20t_ZRo1Ze",
	  "p-md-2": "_2yjxgNplwxSN747d47YauH",
	  "pt-md-2": "HB0iehqPMk8SrZUO0swFi",
	  "pr-md-2": "_1hKM_T3OXtzjLaItHpbWKQ",
	  "pb-md-2": "_3ltfbAMLqE5KVYwqnczhBB",
	  "pl-md-2": "xvAkjte7Q9_2nXsHWo9Qw",
	  "px-md-2": "_2FVIpzsUk0YKHd91cULOWl",
	  "py-md-2": "US9LqfvkorAjT5UvR9m8U",
	  "p-md-3": "_1hu0tz9rfbmePQhbb6GhY7",
	  "pt-md-3": "rN-Iinw8kj0wbJybtez2W",
	  "pr-md-3": "igOd_TvTxkKYEiEIGnInf",
	  "pb-md-3": "_2z8epJpCgzm1btS19vaXTu",
	  "pl-md-3": "_2FqgKPK9hpSu1MI9F3fV-w",
	  "px-md-3": "OivCocwTi3sCWQDOyersn",
	  "py-md-3": "_27GsNRAYMPUhML284zl4td",
	  "p-md-4": "_1BkmJAChU4XgCPKgbhLJCK",
	  "pt-md-4": "_1K_3OvVk0Wxdsh0T1mmSNi",
	  "pr-md-4": "L3etYiGzxXx5x3HJSaSmh",
	  "pb-md-4": "_1ku_ijk48_cQb8SJ2R5fNW",
	  "pl-md-4": "_3rolhijPUfxU6etyG-y-fM",
	  "px-md-4": "_2wXagUcatslfweS1Y9slPs",
	  "py-md-4": "QEzubzmD4f0c9NMyC2yKY",
	  "p-md-5": "_1CHRAyqCfqBcWBDJIa5cTI",
	  "pt-md-5": "cQg9g45gnWcPemJG7Wplv",
	  "pr-md-5": "_34mY_9bBak8KDNQAqwS6cq",
	  "pb-md-5": "_2lqvetJsmdAbLXbFWU_77B",
	  "pl-md-5": "_1aVDKLpIVcyk8wHwYzKJP9",
	  "px-md-5": "_1VTaarKrAYrzgXchiMrd5W",
	  "py-md-5": "_3jxE8lqdlP4gTgskvOg9a-",
	  "m-md-auto": "HZd4-Rkmn7iVn4nULE6EN",
	  "mt-md-auto": "_3rHGXxzO9FMNyGMdToP6tl",
	  "mr-md-auto": "_1UMr5Plfh27_qTOPuaorid",
	  "mb-md-auto": "_3bic1YbkcwqkXRn6eN-kKf",
	  "ml-md-auto": "_2yfBHlyHa6Ji3j4MPXbkEu",
	  "mx-md-auto": "_3nq2igJks_jCd1ENd5ZV6i",
	  "my-md-auto": "_3sCTO3NwdLRHymzOs_9nvT",
	  "m-lg-0": "_2nWu8aKTqTzy5dUtvL9cjV",
	  "mt-lg-0": "_2hqtOdyttphW4wHeiZkIHz",
	  "mr-lg-0": "_3mdeEXNtir6_D9A_Dz-u7q",
	  "mb-lg-0": "_2zxq0NJvZzv98EypnlxxBg",
	  "ml-lg-0": "_1YaNGxjLbn_QXZU4xKBZWX",
	  "mx-lg-0": "_3HeKnj7a7dmKfj-JbVFrp2",
	  "my-lg-0": "_3I66ehyccJ4J-yOlYJ4tDw",
	  "m-lg-1": "_1KJbGzrah2Sm1Gf3A1sscz",
	  "mt-lg-1": "_1Fwc3-Mh4VrwI61XviBvDW",
	  "mr-lg-1": "_1hvSA_7Y95gU5UFvMFIDTO",
	  "mb-lg-1": "_2Lij2bmbiaumL-FOO9kMLS",
	  "ml-lg-1": "_3sme-pe_JgRZMwgXB0Fe4R",
	  "mx-lg-1": "_3eajH6RJfGsrUPyn-SPYe2",
	  "my-lg-1": "_14oiHbQIiMOm2472pTOPE_",
	  "m-lg-2": "cEgap2v_7g94qSJNP8Yr8",
	  "mt-lg-2": "_3jQYU9IP7uvpZ7OiHyOavC",
	  "mr-lg-2": "nujlz-SjqchHzHrTg_0nA",
	  "mb-lg-2": "bin9Pwi3St7NdbCFP-Duz",
	  "ml-lg-2": "_1dfWd1iRkSJ-uke9NgkQpb",
	  "mx-lg-2": "_3UsBoEipECNNEy3ZCY1N9i",
	  "my-lg-2": "sYjxtE-O51vC1unOUA9O7",
	  "m-lg-3": "_1LYeZ4znVg-vRqSlXKb4N-",
	  "mt-lg-3": "_3BHepuu89WNm7vmq0-qOoG",
	  "mr-lg-3": "bqCa-8c1LtHinYiotPU1V",
	  "mb-lg-3": "_6qxnTlw5zyjJAblAQr0m",
	  "ml-lg-3": "_25aqfA_6DnMlajCtkUoDlL",
	  "mx-lg-3": "_2b3lsEOxdVITVIfD2jeiFl",
	  "my-lg-3": "_1zogIQY5Oxzsh2uLs3mQto",
	  "m-lg-4": "_1E4xEw8nWnVLvk0-KydrF7",
	  "mt-lg-4": "_13CCLiLYwubWcR2qLJVM8_",
	  "mr-lg-4": "_17Xb9ICMLeDaKrU7F5KE1X",
	  "mb-lg-4": "_2IopYCVP4RdWcgAvl-j5Gl",
	  "ml-lg-4": "B_zMW4IoplGHmRvRQ47xg",
	  "mx-lg-4": "bvPEAZPuCjS5eELbtluXy",
	  "my-lg-4": "_2YVTLj9Fb9RzDsQDyTLxso",
	  "m-lg-5": "_3hgatJSxVASdIl9U-DNl47",
	  "mt-lg-5": "_3luPaB08hO6kqeXVHPc-zf",
	  "mr-lg-5": "_2D64Vp8cljZkw-z5GLfDwl",
	  "mb-lg-5": "_2jgI_Im4Tn_WkGsZO-mLYb",
	  "ml-lg-5": "_3gwM2CsCAryEmymrvJGVIo",
	  "mx-lg-5": "_3WPcy57zLG26KlMrlXUg1a",
	  "my-lg-5": "EuLvwD5WlXvYHsHk0WRtP",
	  "p-lg-0": "KtsEmWohX02Sgpbk-DLGu",
	  "pt-lg-0": "_2FFsjRvAa2IhABVU5GEgn-",
	  "pr-lg-0": "st4Nl8r6OGI8Gmj6tDIOT",
	  "pb-lg-0": "_14fb8Q_qarqhSiXVsJ6ZVP",
	  "pl-lg-0": "PU2AdBTImBPbVLFaEJjzP",
	  "px-lg-0": "_2-ztInutGrVNIuZwU9wdu4",
	  "py-lg-0": "_3WAg0EKXFFOP9tysl4Qpfd",
	  "p-lg-1": "nhUqdv5Pa4ly_rYPMWq1u",
	  "pt-lg-1": "_31kRKDVsiCjRj2R7r_1vZm",
	  "pr-lg-1": "dSnrj6mNxg9U8KCPxMQDt",
	  "pb-lg-1": "_3Khxkg66OuoN3QWPb5RPI5",
	  "pl-lg-1": "_2S2IbQnTz0xGDq_McszxS7",
	  "px-lg-1": "_1vcAF6ixRxvDEzSK30t2tN",
	  "py-lg-1": "_2kqLnKdDvPGzLGV-ywSXut",
	  "p-lg-2": "_1yPo1aA6YYWJSJ0klnuE_D",
	  "pt-lg-2": "_1cXubMv86z_qZQM7zX5LY4",
	  "pr-lg-2": "_1Riscsimb0PjudjNCkmQyB",
	  "pb-lg-2": "_3lQGOCSWZ2y9lRpwsrwkOr",
	  "pl-lg-2": "v3lTU_dO2GRW2HmrJEB45",
	  "px-lg-2": "_3yOptr-fCfIUFXHRpH21MP",
	  "py-lg-2": "_3MJRCup7ZAJszVXMn0PPg9",
	  "p-lg-3": "_2264uGMeJnfR1VXbtwcLOn",
	  "pt-lg-3": "_1MAhFW1XM7L9zZTp0NffTA",
	  "pr-lg-3": "gbZfLV1mXg9sIgmsuepQj",
	  "pb-lg-3": "_3_QT3TTr1Ja9VZcZ9ZloqQ",
	  "pl-lg-3": "_2Pd8Jalo4zXw0GwCfOEHMW",
	  "px-lg-3": "_1q8Z8o-Qd3D43OpGFYSVmm",
	  "py-lg-3": "_2CBBfT-htVwHSzHDFTxLcE",
	  "p-lg-4": "_1WqKVQzNhY32RvQIbKmJCZ",
	  "pt-lg-4": "_1SKpA7yHJheZ1Y_dKOZfVG",
	  "pr-lg-4": "aEAhtPrvengauLAhh_YMc",
	  "pb-lg-4": "_3sNcr5B_sbJJjwlwmyYcpx",
	  "pl-lg-4": "ys26f7lq5uqAMVzHlHeE0",
	  "px-lg-4": "_1BPDX5WcAFkAUk4EwC-tGM",
	  "py-lg-4": "_1Ebg_xFN_4hTOn82tRRTrK",
	  "p-lg-5": "qeHM1yddLvplIIIOT2dBu",
	  "pt-lg-5": "_2AFd0aoI4rvdaT2HxN07u5",
	  "pr-lg-5": "_3Kz_IbIsc_Sho6lIPvqxG2",
	  "pb-lg-5": "_23ipIasukDr9Ze9bz43PVQ",
	  "pl-lg-5": "oOaaKkL-Ysb1YkbA50ceR",
	  "px-lg-5": "_1tfilQzSISdQuc1ZfpFgso",
	  "py-lg-5": "_1qIbNnyIa0xjiq699dLukv",
	  "m-lg-auto": "_3EkmpvHDUoRmTWEt1QrcpG",
	  "mt-lg-auto": "_1ZVC-8Xn4IMm2LCYaYJXOR",
	  "mr-lg-auto": "_2CcaWHNJmZVQEjftsN0R7H",
	  "mb-lg-auto": "V15B71Ekd2De9UtveWcNz",
	  "ml-lg-auto": "_2sprvhVpBFpuMQjrnT0dKV",
	  "mx-lg-auto": "_1DIKKsUuPb6_gWMhiOAJNA",
	  "my-lg-auto": "_2YyFmfYsUt0iPbuAoxylTQ",
	  "m-xl-0": "_3vR0BZtxQhLxL_aAnpd306",
	  "mt-xl-0": "_2rn6dRlGzHHUcB13KTu_-G",
	  "mr-xl-0": "_2559A18Bmo2xYZOTrUcb9C",
	  "mb-xl-0": "_1WMU6lUszuGmkjX8K8Uk9g",
	  "ml-xl-0": "_2oMVqsw-J4JA148q7qsHAq",
	  "mx-xl-0": "_2D7AwI_AuSDy2tvTCpYnNm",
	  "my-xl-0": "_1KmBYCI_64OFeztH6NORZY",
	  "m-xl-1": "_1HPP_KJwPgKeb-ZwasDUEh",
	  "mt-xl-1": "_2YtvFVnOjM4aN_u61vcSn6",
	  "mr-xl-1": "_2Mqky6WvdVMczsxFG0tm79",
	  "mb-xl-1": "_3bbW2ul6pQ9FP2F3_gdCed",
	  "ml-xl-1": "_1GrOiVrMloyUqIhI-piwQ_",
	  "mx-xl-1": "_1IpOqQWP4H5-nds38h6JOr",
	  "my-xl-1": "d37G7E---Sqvb_2hzMEZZ",
	  "m-xl-2": "_2ye8jpD5qSisrgc371zlp6",
	  "mt-xl-2": "_1m6PIwTigYBPhTKSbCJH4W",
	  "mr-xl-2": "_3p4a7iez4aWZvdNNTyZjxv",
	  "mb-xl-2": "_1vLiXXTS7kgGDbDrbbdRea",
	  "ml-xl-2": "_2lgfqUudFDnYIg3r6wHY3o",
	  "mx-xl-2": "_2gegvNlX2Dc1bPpOb51Tmc",
	  "my-xl-2": "_1Bf2ip5ligIk8H14y17zAs",
	  "m-xl-3": "_3-_0nR-wYXysyNoICsh9QS",
	  "mt-xl-3": "_3D9CrM8XCyAlt_eHryHWJW",
	  "mr-xl-3": "_2c8A8Gi38vYB2IvmNscu3s",
	  "mb-xl-3": "_1pUE-YNJ2iGhosrAzwJsMq",
	  "ml-xl-3": "f3qJYK2knK7e9w5hKhd8J",
	  "mx-xl-3": "_2m2oW0P-8HO35tL2wyHs10",
	  "my-xl-3": "_1KR7UC0hZ7hMQiqA4t-WgC",
	  "m-xl-4": "R4seSsoT5hXejhSwtJY1R",
	  "mt-xl-4": "bqfwqHHs4MIG1CnTa-S8J",
	  "mr-xl-4": "_2LoRbkgYyTTkZEvcZr3ld3",
	  "mb-xl-4": "_2CIOY20Yb5xaJhH5tO3icq",
	  "ml-xl-4": "_2gQ_w87f8tijcr1mKkxjFm",
	  "mx-xl-4": "_3_BitLUaX7wRwlHdF4-Qyp",
	  "my-xl-4": "_392MZqyyZ4HE1CBgn6zk7B",
	  "m-xl-5": "_18tnhzdvfwdSjDBQTXqd1K",
	  "mt-xl-5": "_1EVBJSlt3EDTQX0ol5K5l8",
	  "mr-xl-5": "WDMzT2z_HL2GQmWRwDiui",
	  "mb-xl-5": "_2AaNmMnDtavN2R3WwjJsP9",
	  "ml-xl-5": "_2m3_9HOLVP84V8_m22BiKs",
	  "mx-xl-5": "_1uh3XspIiqtIcl8-mxyvlQ",
	  "my-xl-5": "_3gJvReToYId2cuD_qXJd5Z",
	  "p-xl-0": "tTmCdWSwmwnrLBAQhd4fY",
	  "pt-xl-0": "_-fM-wfQ7QvFkdZQ4xkrEq",
	  "pr-xl-0": "_35qKBRWqVf-lLKAAhk11ve",
	  "pb-xl-0": "D4K7s6YkD5GJFDgb__5Nx",
	  "pl-xl-0": "lma4z6sUWaZjmJ9CbC5xj",
	  "px-xl-0": "_3ptxWlNZ7kqtrp80qH0Q82",
	  "py-xl-0": "_2YUYF7rwMw05cN2usAaoNb",
	  "p-xl-1": "_30IiF_mn4Py9hPeUY9Rcdg",
	  "pt-xl-1": "_3MqX2Gl5ehTVAyb6geVyij",
	  "pr-xl-1": "_2zbby_iKyl8ooT4_9tx9eZ",
	  "pb-xl-1": "_3dODKBZq2cZ7MaK3zjrmtj",
	  "pl-xl-1": "iH4ujcrxIZ5ACFSVYVvzp",
	  "px-xl-1": "_8bu0C-uBOtjREHHpSMKm7",
	  "py-xl-1": "Xw-MTaDMLq-_7KXees5F-",
	  "p-xl-2": "_2C01miAnRFnAso49uWT-jW",
	  "pt-xl-2": "_2OsEHtZyb_IK33yXzhq0lr",
	  "pr-xl-2": "_2v6DtCx1NQmfxuPAsrAHbx",
	  "pb-xl-2": "_12kqvC_GkXdwLY33RpDvRS",
	  "pl-xl-2": "dIjrmZGWL2SWA2VwleIuv",
	  "px-xl-2": "_35xOcJh0z7KlMF8ONYz0aV",
	  "py-xl-2": "_3PUl_FTc0uZgCmGVXUK4ih",
	  "p-xl-3": "_2Wnpa-dVkr5xAMw-3QYpQ2",
	  "pt-xl-3": "_2HkVfURDy2NzalumYQtBBn",
	  "pr-xl-3": "_3fxZzOYT2TMgWR5yPMP-Bj",
	  "pb-xl-3": "_1a7IhFHCv-OZ6c2UtTUZJZ",
	  "pl-xl-3": "_2Uf5yQHcEUzCtSobGb27o",
	  "px-xl-3": "_1BU8Bg2ief-dH-fsCyvzhw",
	  "py-xl-3": "K6gfE0fQndhWsqjuxIwYw",
	  "p-xl-4": "_14Ia-rj6eAUxCb3UM02Kse",
	  "pt-xl-4": "_2tzXomiStdHsw7hqWLrzT0",
	  "pr-xl-4": "_292Wq-H7U9oSyhZlR22E3U",
	  "pb-xl-4": "_3qtLnYzgpRZ4YK8U5ipJA5",
	  "pl-xl-4": "_1A43paLvaUkKmQM4HnJGET",
	  "px-xl-4": "dAGUo0gx_jEjvEkERhb8",
	  "py-xl-4": "ZAHnzv22dQaTE9byCccB8",
	  "p-xl-5": "_3qZPSV5cysCqiXq5OF8tzM",
	  "pt-xl-5": "_1Ts7h3gWkoU2wpH_-BDHNT",
	  "pr-xl-5": "Vm9KssE2xTBkk6UC6bnwt",
	  "pb-xl-5": "_3hQLPuhLnjFLrWsrq7cn-S",
	  "pl-xl-5": "_3TtD-1I0ij_lSb7gXgC7Tc",
	  "px-xl-5": "_1bEwBZSGLQNZ_nNPDPUAKB",
	  "py-xl-5": "_2YmCFUOKxZM_0tMtwBTgRM",
	  "m-xl-auto": "sP_qXa1lG4gDytZJzFCHv",
	  "mt-xl-auto": "_1dwJitTfFf85mPPu2RgG6u",
	  "mr-xl-auto": "d1gUHcd0weBn0hXzVpT20",
	  "mb-xl-auto": "_2Kol3Un-TGtdpVJr60QyFo",
	  "ml-xl-auto": "_3t1o1_JlktmIqy-QpsBV0W",
	  "mx-xl-auto": "_3ozDbVTffqW2_IstBPj86n",
	  "my-xl-auto": "_163HeWzASWAwTybKq55a94",
	  "text-justify": "_2aR-5uXvpqwQzL2Pa-XOsD",
	  "text-nowrap": "F20Yz2_ZaQ873v-UqgPqc",
	  "text-truncate": "jotm1bxB5y7l4Eoo8XHyx",
	  "text-left": "nwDav6xktEcET50g77fDw",
	  "text-right": "H6ldSevMK6lEbhG-vTx27",
	  "text-center": "_36a8J3OViaHsla3cipendT",
	  "text-sm-left": "_3mS-kxgSRvNI2n8-pQPY5C",
	  "text-sm-right": "_2VhDO2pKXzTKaKmeoR5ePM",
	  "text-sm-center": "_1jpoMZTdYXzS5vNNkYB6f1",
	  "text-md-left": "_2zLjhyUHhVTfzXIfvPOd3f",
	  "text-md-right": "_jTtM0OQo4_2nrzJzp8sI",
	  "text-md-center": "_2OKHBq6xUQVcPAxFhaTpCs",
	  "text-lg-left": "xJ-3TyLopMcNf-EMI7mAM",
	  "text-lg-right": "_3wTGr0WGVSm1jpGfswTt4b",
	  "text-lg-center": "DcdB2DUof7qZsThuz8AST",
	  "text-xl-left": "_1532omar-dPm1pfPfG0caC",
	  "text-xl-right": "_2_saNGIB4m1-N8GOp1h7NJ",
	  "text-xl-center": "cy2tYwum6pbeLJRsbrXjh",
	  "text-lowercase": "_3y0jldWR20x737jxJkfXk-",
	  "text-uppercase": "_3dWNMxdn3FUywoiGaPMEXd",
	  "text-capitalize": "_2D-ILhQKNu8ZZDpQMH2b_A",
	  "font-weight-normal": "_2C10LjltzQ8IvFNe5h2xiq",
	  "font-weight-bold": "_4OSL68EKDKXHixOJgHGts",
	  "font-italic": "_1KkHJO4_ePg7DNZywmbd3K",
	  "text-white": "_3HJwuR_qNg_5X0dQ6zuGy",
	  "text-primary": "_3Efw66lspWolT6qLSvhinX",
	  "text-secondary": "_1XxQ0aU1TUhGFQoQC0YKhO",
	  "text-success": "_3WgL5QHpe1L3Chk_iDcdTS",
	  "text-info": "_1I9gQBluym1DuRfL6e8Bk3",
	  "text-warning": "_3R6N5dj2Z-1KtbMgIauq4C",
	  "text-danger": "X2rnKCKF_KkW50KY_uTR8",
	  "text-light": "_1a5neGI3MWy724eGMj6_69",
	  "text-dark": "_1gn8PlSxESSeHxXpFGXTaP",
	  "text-muted": "_1O3wvQJcitwW4xQiJb17Ji",
	  "text-hide": "lKGcYyeOiW1S3mjEGgd2r",
	  "visible": "gQaoRTM52DjuipsQYFZL",
	  "invisible": "_1xQ-G3OcAxUqrda7RnVwMC"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(34);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(36);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(35);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _reactRouter = __webpack_require__(1);
	
	var _AppActions = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	
	    //toggleAddPostSection = () => {
	    //  this.props.dispatch(toggleAddPost());
	    //};
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.props.children);
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	//App.propTypes = {
	//  children: PropTypes.object.isRequired,
	//  dispatch: PropTypes.func.isRequired,
	//  intl: PropTypes.object.isRequired,
	//};
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(store) {
	  return {
	    //intl: store.intl,
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(11);
	
	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions
	
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(67);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(69);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(68);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(4);
	
	var _Footer = {
	  "footer": "bo3HgOxwnMCxuEAKXkA9_"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, 'SWE4103 Group 1');
	
	function Footer() {
	  return _jsx('div', {
	    className: _Footer2.default.footer
	  }, void 0, _ref);
	}
	
	exports.default = Footer;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactIntl = __webpack_require__(4);
	
	var _Header = {
	  "header": "_3ouKIGZiS3ur4UPJ_9nWcl",
	  "content": "_2SYqncTfJJyuDBm8bHMnyC",
	  "site-title": "B77JbkhyZLhDr0C6wXfu",
	  "add-post-button": "_1t7ghrM-KB2hzLjGyVNTpf",
	  "language-switcher": "_2i_FIPgrhKPVL7zUw0Qt-",
	  "selected": "_5YxoyrchZjMwYg6Sl9b4f"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('ul', {}, void 0, _jsx('li', {}));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'siteTitle'
	}));
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'addPost'
	});
	
	function Header(props, context) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _jsx('li', {
	      onClick: function onClick() {
	        return props.switchLanguage(lang);
	      },
	      className: lang === props.intl.locale ? _Header2.default.selected : ''
	    }, lang, lang);
	  });
	
	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default['language-switcher']
	  }, void 0, _ref), _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, _ref2), context.router.isActive('/', true) ? _jsx('a', {
	    className: _Header2.default['add-post-button'],
	    href: '#',
	    onClick: props.toggleAddPost
	  }, void 0, _ref3) : null));
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = Header;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.CourseGrid = CourseGrid;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _DataCell = __webpack_require__(38);
	
	var _DataCell2 = _interopRequireDefault(_DataCell);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('h3', {}, void 0, 'CS3383');
	
	function CourseGrid(props) {
	
	  var height = props.grid.length;
	  var width = props.grid[0].length;
	
	  var rows = [];
	
	  for (var i = 0; i < height; i++) {
	
	    var cell = [];
	
	    for (var idx = 0; idx < width; idx++) {
	
	      var id = i * 100 + idx;
	      cell.push(_jsx(_DataCell2.default, {
	        name: props.grid[i][idx],
	        id: i * 100 + idx
	      }));
	    }
	
	    rows.push(_jsx('tr', {}, void 0, cell));
	  }
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.courseGrid
	  }, void 0, _ref, _jsx('table', {
	    id: 'simple-board'
	  }, void 0, _jsx('tbody', {}, void 0, rows))));
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    grid: [["", "Tony", "", "", "", "", "", "", "Shiv", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "Tristen", "", "", "", "", ""], ["", "Jean-Marc", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "Justin", ""], ["", "", "Jacob", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]]
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CourseGrid);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.DataCell = DataCell;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _main = {
		"navbar": "_2WVXw0v9fciz6QMs16OXQq",
		"sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
		"page": "_2UbYb8a84j4Lao1llfzi0X",
		"Container": "_3MxuE7bxEkBo89hzDOp_gR",
		"appName": "ZkqPKEQkVPJO1JA1UYCZS",
		"userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
		"userTitle": "_3UioGCgYmlJWwM-moubXgQ",
		"user": "_1xY800K06kSGP6VS3nJ4B1",
		"input": "_24Rsr0jLNLE_aq_f0MbrAv",
		"email": "_3qyEGgcylDQE_JuFqVpWUk",
		"emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
		"underBar": "_2DX0Buf8GrkKsGry40sIQZ",
		"btn": "_22cYRKnsVbWwfqJ9cXbIdH",
		"form": "_2_1AfN4JWlmndss0G_ast0",
		"optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
		"courses": "_20H1Dh_tUL6p23vwTHz-tj",
		"courseBackground": "_11HApIfr-1A_4pindgs8Iv",
		"courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
		"courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
		"addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
		"trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
		"removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
		"courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
		"courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
		"studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
		"students": "MKTSv4MTd_M0nejo4l84r",
		"courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
		"welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
		"instructorPic": "Eend0tmRCtdI8WE2IrNNe",
		"instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
		"formContainer": "lwX4GAmW4zdHK4L1yami0",
		"instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
		"instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
		"instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
		"instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
		"courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
		"courseName": "_3AN8zLWsCKDlf4SLo2axSw",
		"reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DataCell(props) {
	
		function clicked(id) {
			if (!document.getElementById(id).className.includes(_main2.default.courseGridCellClicked)) {
				document.getElementById(id).classList.add(_main2.default.courseGridCellClicked);
			} else {
				document.getElementById(id).classList.remove(_main2.default.courseGridCellClicked);
			}
		}
	
		return _jsx('td', {
			className: _main2.default.courseGridCell,
			id: props.id,
			onClick: function onClick() {
				clicked(props.id);
			}
		}, void 0, ' ', props.name, ' ')
		//<td className={styles.courseGridCell} id={props.id} onClick={() => alert(this.document.getElementById(props.id).className)}> {props.name} </td>
		//<td className={styles.courseGridCell} id={props.id} onClick={() => if(this.document.getElementById(props.id).className.includes("courseGridCell"))}> {props.name} </td>
		;
	}
	
	function onItemClick() {
		alert("was clicked");
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
		return {
			name: props.name,
			style: "courseGridCell"
		};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(DataCell);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.DataCell = DataCell;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _main = {
		"navbar": "_2WVXw0v9fciz6QMs16OXQq",
		"sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
		"page": "_2UbYb8a84j4Lao1llfzi0X",
		"Container": "_3MxuE7bxEkBo89hzDOp_gR",
		"appName": "ZkqPKEQkVPJO1JA1UYCZS",
		"userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
		"userTitle": "_3UioGCgYmlJWwM-moubXgQ",
		"user": "_1xY800K06kSGP6VS3nJ4B1",
		"input": "_24Rsr0jLNLE_aq_f0MbrAv",
		"email": "_3qyEGgcylDQE_JuFqVpWUk",
		"emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
		"underBar": "_2DX0Buf8GrkKsGry40sIQZ",
		"btn": "_22cYRKnsVbWwfqJ9cXbIdH",
		"form": "_2_1AfN4JWlmndss0G_ast0",
		"optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
		"courses": "_20H1Dh_tUL6p23vwTHz-tj",
		"courseBackground": "_11HApIfr-1A_4pindgs8Iv",
		"courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
		"courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
		"addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
		"trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
		"removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
		"courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
		"courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
		"studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
		"students": "MKTSv4MTd_M0nejo4l84r",
		"courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
		"welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
		"instructorPic": "Eend0tmRCtdI8WE2IrNNe",
		"instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
		"formContainer": "lwX4GAmW4zdHK4L1yami0",
		"instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
		"instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
		"instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
		"instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
		"courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
		"courseName": "_3AN8zLWsCKDlf4SLo2axSw",
		"reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function DataCell(props) {
	
		function clicked(id) {
			if (!document.getElementById(id).className.includes(_main2.default.courseGridCellClicked)) {
				document.getElementById(id).classList.add(_main2.default.courseGridCellClicked);
			} else {
				document.getElementById(id).classList.remove(_main2.default.courseGridCellClicked);
			}
		}
	
		return _jsx('td', {
			className: _main2.default.courseGridCell,
			id: props.id,
			onClick: function onClick() {
				clicked(props.id);
			}
		}, void 0, ' ', props.name, ' ')
		//<td className={styles.courseGridCell} id={props.id} onClick={() => alert(this.document.getElementById(props.id).className)}> {props.name} </td>
		//<td className={styles.courseGridCell} id={props.id} onClick={() => if(this.document.getElementById(props.id).className.includes("courseGridCell"))}> {props.name} </td>
		;
	}
	
	function onItemClick() {
		alert("was clicked");
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
		return {
			name: props.name,
			style: "courseGridCell"
		};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(DataCell);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.CreateCourse = CreateCourse;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _reactIconsKit = __webpack_require__(66);
	
	var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: "/instructor_home"
	}, void 0, _jsx('h4', {}, void 0, 'Home'));
	
	function CreateCourse(props) {
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Create a Course'), _ref), _jsx('div', {
	    className: _main2.default.formContainer
	  }, void 0, _ref2));
	}
	
	function submit() {
	  //creates variable to be passed in
	  var courseName = document.getElementById("title").value;
	  var prof = document.getElementById("professor").value;
	  var inst = document.getElementById("institution").value;
	  var room = document.getElementById("location").value;
	
	  //xml request
	  var req = new XMLHttpRequest();
	
	  var params = '{"title":"' + courseName + '", "professor":"' + prof + '", "usernames":" ", "institution":"' + inst + '", "location":"' + room + '"}';
	  req.open("POST", "api/course");
	  req.setRequestHeader("Content-type", "application/json");
	  //403 - not enough data provided / course already exists / title contains characters other than letter, numbers, -, _ and .
	  //200 - course created successfully
	  //above comments need to be implemented
	  alert(courseName + " has been created successfully!");
	  req.send(params);
	}
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	// Retrieve data from store as props
	
	var _ref2 = _jsx(_reactBootstrap.Form, {
	  horizontal: true
	}, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Course Name'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter course name',
	  id: 'title'
	}))), _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Professor Name'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter course instructor name',
	  id: 'professor'
	}))), _jsx(_reactBootstrap.FormGroup, {
	  controlId: 'formHorizontalEmail'
	}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Institution'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter name of the institution',
	  id: 'institution'
	}))), _jsx(_reactBootstrap.FormGroup, {
	  controlId: 'formHorizontalEmail'
	}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Location'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter the room number where the lecture takes place in',
	  id: 'location'
	}))), _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  smOffset: 2,
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.Button, {
	  type: 'submit',
	  onClick: submit
	}, void 0, 'Create'))));
	
	function mapStateToProps(state, props) {
	  return {
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateCourse);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.CourseIcon = CourseIcon;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _edit = __webpack_require__(7);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function CourseIcon(props) {
	
	  return _jsx('div', {
	    className: _main2.default.courseIcon
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/course_overview_inst/?name=' + props.name
	  }, void 0, _jsx('label', {
	    className: _main2.default.courseTitle
	  }, void 0, ' ', props.name, ' ')), _jsx('button', {
	    className: _main2.default.removeCourse
	  }));
	}
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	function readCookie(name) {
	  var nameEQ = name + "=";
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1, c.length);
	    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	  }
	  return null;
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    courses: [['{"name":"SWE4103"}'], ['{"name":"ADM1213"}'], ['{"name":"ECE3221"}'], ['{"name":"ECE2701"}'], ['{"name":"CS3383"}'], ['{"name":"TME3413"}'], ['{"name":"HIST3925"}']]
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CourseIcon);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.InstructorCourseList = InstructorCourseList;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _edit = __webpack_require__(7);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, 'UNB Attendance Service'));
	
	var _ref2 = _jsx(_reactBootstrap.Nav, {}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Instructor Home'), _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Other thing'));
	
	var _ref3 = _jsx(_reactBootstrap.Nav, {
	  pullRight: true
	}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/'
	}, void 0, 'Log out'));
	
	var _ref4 = _jsx(_reactRouter.Link, {
	  to: '/instructor_courses'
	}, void 0, 'Courses');
	
	var _ref5 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref6 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref7 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref8 = _jsx('h3', {}, void 0, 'UNB Course List');
	
	var _ref10 = _jsx('tr', {}, void 0, _jsx('a', {
	  href: '/course_overview'
	}, void 0, _jsx('td', {}, void 0, 'SWE4103')), _jsx('td', {}, void 0, 'Software Quality and Project Management'));
	
	var _ref11 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'CS3413'), _jsx('td', {}, void 0, 'Operating System I'));
	
	var _ref12 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'ECE3221'), _jsx('td', {}, void 0, 'Computer Organization'));
	
	var _ref13 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'SWE4040'), _jsx('td', {}, void 0, 'Software Engineering Design Project'));
	
	function InstructorCourseList(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {
	    style: { marginBottom: '0' }
	  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref4, _ref5, _ref6, _ref7), _jsx('div', {
	    className: _main2.default.instructorCourseContainer
	  }, void 0, _jsx('div', {
	    className: _main2.default.instCourseHeader
	  }, void 0, _ref8, _ref9), _jsx('div', {
	    className: _main2.default.instCourseListContainer
	  }, void 0, _jsx('table', {
	    className: _main2.default.instCourseList
	  }, void 0, _jsx('tr', {}, void 0, _jsx('td', {
	    className: _main2.default.courseNum
	  }, void 0, 'Course Number'), _jsx('td', {
	    className: _main2.default.courseName
	  }, void 0, 'Course Name')), _ref10, _ref11, _ref12, _ref13))));
	}
	
	//when directed to this site, make xmlhttprequest to get course list.
	function test() {
	  var req = new XMLHttpRequest();
	  req.open("GET", "api/courseList");
	  //test to see if a fucntion is called on onLoad
	  document.getElementById("testp").innerHTML = "test";
	}
	//var req = new XMLHttpRequest();
	//alert(req.open("GET", api.courseList));
	
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	// Retrieve data from store as props
	
	var _ref9 = _jsx('p', {
	  id: 'testp',
	  onLoad: test
	}, void 0, 'test');
	
	function mapStateToProps(state, props) {
	  return {
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InstructorCourseList);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.InstructorCourseOverview = InstructorCourseOverview;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _CourseGrid = __webpack_require__(12);
	
	var _CourseGrid2 = _interopRequireDefault(_CourseGrid);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: "/instructor_home"
	}, void 0, _jsx('h4', {}, void 0, 'Home'));
	
	var _ref2 = _jsx('button', {}, void 0, ' TRACK ATTENDANCE ');
	
	function InstructorCourseOverview(props) {
	  debugger;
	  var courseName = props.location.search;
	  courseName = courseName.split("=")[1];
	
	  var height = props.grid.length;
	  var width = props.grid[0].length;
	
	  var rows = ["Students:"];
	
	  for (var i = 0; i < height; i++) {
	
	    var cell = [];
	
	    for (var idx = 0; idx < width; idx++) {
	
	      var id = i * 7 + idx;
	      if (props.grid[i][idx] != "") {
	        rows.push(_jsx('label', {
	          className: _main2.default.studentRowEntry
	        }, void 0, props.grid[i][idx]));
	      }
	    }
	  }
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, courseName, ' Course Grid'), _ref), _jsx('div', {
	    className: _main2.default.courseGrid
	  }, void 0, _jsx(_CourseGrid2.default, {
	    name: courseName,
	    grid: props.grid
	  }), _jsx('div', {
	    className: _main2.default.trackAttendanceBtn
	  }, void 0, _ref2), _jsx('div', {
	    className: _main2.default.students
	  }, void 0, _jsx('table', {}, void 0, _jsx('tbody', {}, void 0, rows)))));
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    grid: [["", "Tony", "", "", "", "", "", "", "Shiv", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "Tristen", "", "", "", "", ""], ["", "Jean-Marc", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "Justin", ""], ["", "", "Jacob", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]]
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InstructorCourseOverview);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.Login = Login;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('label', {}, void 0, 'New User? ', _jsx(_reactRouter.Link, {
	  to: '/signup'
	}, void 0, 'Register Here'), ' ');
	
	function Login(props) {
	  return _jsx('div', {
	    className: _main2.default.page
	  }, void 0, _jsx('div', {
	    className: _main2.default.Container
	  }, void 0, _jsx('div', {
	    className: _main2.default.user
	  }, void 0, _jsx('div', {
	    className: _main2.default.userHeader
	  }, void 0, _jsx('h3', {
	    className: _main2.default.userTitle
	  }, void 0, 'Login to ', _jsx('span', {
	    className: _main2.default.appName
	  }, void 0, 'UNB Attendance Services')), _jsx('form', {
	    className: _main2.default.form
	  }, void 0, _jsx('input', {
	    className: _main2.default.input,
	    id: 'username',
	    placeholder: 'Username'
	  }), _jsx('input', {
	    className: _main2.default.input,
	    id: 'password',
	    placeholder: 'Password',
	    type: 'password'
	  })), _jsx('button', {
	    className: _main2.default.btn,
	    onClick: submit
	  }, void 0, ' Submit ')), _jsx('div', {
	    className: _main2.default.underBar
	  }, void 0, _ref))));
	}
	
	function submit() {
	  debugger;
	  var user = document.getElementById("username").value;
	  var pass = document.getElementById("password").value;
	
	  var req = new XMLHttpRequest();
	
	  var params = '{"username":"' + user + '", "password":"' + pass + '"}';
	
	  req.open("POST", "api/login");
	  req.setRequestHeader("Content-type", "application/json");
	  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
	  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";
	
	  req.onreadystatechange = function () {
	    debugger;
	    if (req.readyState == 4 && req.status == 200) {
	      var serverResponse = JSON.parse(req.responseText);
	      document.cookie = "isAdmin=" + serverResponse.isAdmin + "";
	      document.cookie = "username=" + serverResponse.username + "";
	      if (serverResponse.isAdmin) {
	        window.location.href = "/instructor_home";
	      } else {
	        window.location.href = "/student_home";
	      }
	    }
	  };
	
	  req.send(params);
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Signup = Signup;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('label', {}, void 0, 'Already a User? ', _jsx(_reactRouter.Link, {
	  to: ''
	}, void 0, 'Login Here'), ' ');
	
	function Signup(props) {
	  return _jsx('div', {
	    className: _main2.default.page
	  }, void 0, _jsx('div', {
	    className: _main2.default.Container
	  }, void 0, _jsx('div', {
	    className: _main2.default.user
	  }, void 0, _jsx('div', {
	    className: _main2.default.userHeader
	  }, void 0, _jsx('h3', {
	    className: _main2.default.userTitle
	  }, void 0, 'Sign-up to use ', _jsx('span', {
	    className: _main2.default.appName
	  }, void 0, 'UNB Attendance Service')), _jsx('form', {
	    className: _main2.default.form
	  }, void 0, _jsx('input', {
	    className: _main2.default.input,
	    type: 'text',
	    name: 'username',
	    id: 'username',
	    placeholder: 'Username'
	  }), _jsx('input', {
	    className: _main2.default.input,
	    type: 'password',
	    name: 'password',
	    id: 'password',
	    placeholder: 'Password'
	  }), _jsx('input', {
	    className: _main2.default.email,
	    type: 'email',
	    name: 'Email',
	    id: 'email',
	    placeholder: 'Your Email'
	  }), _jsx('label', {
	    className: _main2.default.emailTag
	  }, void 0, '(@unb.ca)')), _jsx('button', {
	    className: _main2.default.btn,
	    onClick: submit
	  }, void 0, 'Register')), _jsx('div', {
	    className: _main2.default.underBar
	  }, void 0, _ref))));
	}
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	function submit() {
	  debugger;
	  var user = document.getElementById("username").value;
	  var pass = document.getElementById("password").value;
	  var email = document.getElementById("email").value;
	
	  var req = new XMLHttpRequest();
	
	  var params = '{"username":"' + user + '", "password":"' + pass + '", "email":"' + email + '", "isAdmin":"false"}';
	
	  req.open("POST", "api/signup");
	  req.setRequestHeader("Content-type", "application/json");
	  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
	  //document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";
	
	  req.onreadystatechange = function () {
	    debugger;
	    if (req.readyState == 4 && req.status == 200) {
	      document.cookie = "isAdmin=false";
	      window.location.href = "/student_home";
	    }
	  };
	
	  req.send(params);
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Signup);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.RegisterCourse = RegisterCourse;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: "/student_home"
	}, void 0, _jsx('h4', {}, void 0, 'Home'));
	
	var _ref2 = _jsx('input', {
	  type: 'text',
	  id: 'searchInput',
	  name: 'search',
	  placeholder: 'Serach..'
	});
	
	var _ref4 = _jsx('p', {
	  id: 'searchOutput'
	});
	
	var _ref5 = _jsx('ul', {
	  id: 'myUL'
	}, void 0);
	
	function RegisterCourse(props) {
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Register For A Course'), _ref), _jsx('div', {
	    className: _main2.default.optionsContainer
	  }, void 0, _ref2, _ref3, _ref4, _ref5));
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
	  var i, j;
	  // Loop through all list items, and see how many matching items there are
	  for (i = 0; i < classes.length; i++) {
	    if (classes[i].toUpperCase().indexOf(filter) > -1) {
	      match.push(classes[i]);
	    } else {
	      count = count - 1;
	    }
	  }
	
	  for (j = 0; j < match.length; j++) {
	    var node = document.createElement("LI");
	    var li = document.createTextNode(match[j]);
	    node.appendChild(li);
	    document.getElementById("myUL").appendChild(node);
	  }
	
	  var text1 = document.getElementById("searchOutput");
	  var text2 = document.createTextNode("You have " + count + " matching courses!");
	  text1.appendChild(text2);
	}
	
	var _ref3 = _jsx('button', {
	  onClick: myfunction
	}, void 0, 'search!');
	
	function mapStateToProps(state, props) {
	  return {
	    courseList: ["SWE4103", "CS1003", "CS1073", "CS1083", "CS2043", "CS2383", "CS3383", "CS3997", "CS1303", "SWE4203", "SWE4040", "SWE4403", "STAT2593", "ECE3221", "ECE2701", "ESCI1001"]
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegisterCourse);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.StudentCourseIcon = StudentCourseIcon;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _edit = __webpack_require__(7);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function StudentCourseIcon(props) {
	
	  return _jsx('div', {
	    className: _main2.default.courseIcon
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/course_overview_stu/?name=' + props.name
	  }, void 0, _jsx('label', {
	    className: _main2.default.courseTitle
	  }, void 0, ' ', props.name, ' ')));
	}
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	function readCookie(name) {
	  var nameEQ = name + "=";
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1, c.length);
	    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	  }
	  return null;
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    courses: [['{"name":"SWE4103"}'], ['{"name":"ADM1213"}'], ['{"name":"ECE3221"}'], ['{"name":"ECE2701"}'], ['{"name":"CS3383"}'], ['{"name":"TME3413"}'], ['{"name":"HIST3925"}']]
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StudentCourseIcon);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.StudentCourseOverview = StudentCourseOverview;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _CourseGrid = __webpack_require__(12);
	
	var _CourseGrid2 = _interopRequireDefault(_CourseGrid);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: "/student_home"
	}, void 0, _jsx('h4', {}, void 0, 'Home'));
	
	var _ref2 = _jsx('button', {}, void 0, ' RESERVE SEAT ');
	
	function StudentCourseOverview(props) {
	  debugger;
	  var courseName = props.location.search;
	  courseName = courseName.split("=")[1];
	
	  var height = props.grid.length;
	  var width = props.grid[0].length;
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, courseName, ' Course Grid'), _ref), _jsx('div', {
	    className: _main2.default.courseGrid
	  }, void 0, _jsx(_CourseGrid2.default, {
	    name: courseName,
	    grid: props.grid
	  })), _jsx('div', {
	    className: _main2.default.reserveSeatBtn
	  }, void 0, _ref2));
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    grid: [["", "Tony", "", "", "", "", "", "", "Shiv", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "Tristen", "", "", "", "", ""], ["", "Jean-Marc", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "Justin", ""], ["", "", "Jacob", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]]
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StudentCourseOverview);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.StudentHome = StudentHome;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _edit = __webpack_require__(7);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2WVXw0v9fciz6QMs16OXQq",
	  "sidenav": "_1nJ0JQiBI1zISuvcol3eMU",
	  "page": "_2UbYb8a84j4Lao1llfzi0X",
	  "Container": "_3MxuE7bxEkBo89hzDOp_gR",
	  "appName": "ZkqPKEQkVPJO1JA1UYCZS",
	  "userHeader": "_1by6m3YY6HXZ6TH9VRoJaI",
	  "userTitle": "_3UioGCgYmlJWwM-moubXgQ",
	  "user": "_1xY800K06kSGP6VS3nJ4B1",
	  "input": "_24Rsr0jLNLE_aq_f0MbrAv",
	  "email": "_3qyEGgcylDQE_JuFqVpWUk",
	  "emailTag": "_28VOR3t5D9U7A0wM8NqhDX",
	  "underBar": "_2DX0Buf8GrkKsGry40sIQZ",
	  "btn": "_22cYRKnsVbWwfqJ9cXbIdH",
	  "form": "_2_1AfN4JWlmndss0G_ast0",
	  "optionsContainer": "_3ulUidPgZQ4OVjM2Rtdn6O",
	  "courses": "_20H1Dh_tUL6p23vwTHz-tj",
	  "courseBackground": "_11HApIfr-1A_4pindgs8Iv",
	  "courseIcon": "_1wTxF__7ViH0eX0W6t6Cqq",
	  "courseTitle": "_3wdRlFL4amOD2ZADxzuZd2",
	  "addCourseBtn": "_33W-c-MNsm-sbPsNfrOCq3",
	  "trackAttendanceBtn": "_1mucnRIy3NFwJzFAOjUqDz",
	  "removeCourse": "_88ATnCQdNbFcL-Z_JkxH0",
	  "courseGridCell": "_2xqMXqJiB_JmrFQ14Ea7VS",
	  "courseGridCellClicked": "_2noRhapg3V7Mymzeq9_yKv",
	  "studentRowEntry": "_23BmwGb5q9i0w3oRQ5q_Ts",
	  "students": "MKTSv4MTd_M0nejo4l84r",
	  "courseGrid": "_1rTJ4GGeEJz1RSeU1TCHKe",
	  "welcomeContainer": "_3840uD5nkljWtc4SlcLzgQ",
	  "instructorPic": "Eend0tmRCtdI8WE2IrNNe",
	  "instructorName": "_1ikX0TsOcyzimgIpfHQkXY",
	  "formContainer": "lwX4GAmW4zdHK4L1yami0",
	  "instructorCourseContainer": "_3pd687dVLFSD5_d2lO0P_R",
	  "instCourseHeader": "DkcUZJ0tL4NI6EZeQKlCI",
	  "instCourseListContainer": "_1Dk9dlTIDfpq8Nf9GfgaUc",
	  "instCourseList": "_2ZaSt5SjPLH4SINaC2jIRT",
	  "courseNum": "_2cVZ0gqMOXvng5cZcSuyx2",
	  "courseName": "_3AN8zLWsCKDlf4SLo2axSw",
	  "reserveSeatBtn": "QGF8i7_xBP_rEEXcq2o9v"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	var _StudentCourseIcon = __webpack_require__(47);
	
	var _StudentCourseIcon2 = _interopRequireDefault(_StudentCourseIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/register_course'
	}, void 0, _jsx('button', {}, void 0, 'REGISTER FOR A COURSE'));
	
	function StudentHome(props) {
	
	  var courseIcons = [];
	
	  for (var i = 0; i < props.courses.length; i++) {
	
	    var courseInfo = JSON.parse(props.courses[i]);
	
	    courseIcons.push(_jsx(_StudentCourseIcon2.default, {
	      name: courseInfo.name
	    }));
	  }
	
	  var username = readCookie("username");
	
	  return _jsx('div', {}, void 0, _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Welcome, ', username), _jsx(_reactBootstrap.Image, {
	    className: _main2.default.instructorPic,
	    src: "data:image/png;base64,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",
	    rounded: true
	  })), _jsx('div', {
	    className: _main2.default.courses
	  }, void 0, courseIcons), _jsx('div', {
	    className: _main2.default.addCourseBtn
	  }, void 0, _ref));
	}
	
	// Actions required to provide data for this component to render in sever side.
	//HomePage.need = [params => {
	//return fetchPost(params.cuid);
	//}];
	
	function readCookie(name) {
	  var nameEQ = name + "=";
	  if (typeof window !== 'undefined') {
	    var ca = document.cookie.split(';');
	
	    for (var i = 0; i < ca.length; i++) {
	      var c = ca[i];
	      while (c.charAt(0) == ' ') {
	        c = c.substring(1, c.length);
	      }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	    }
	  }
	  return null;
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    courses: [['{"name":"SWE4103"}'], ['{"name":"ADM1213"}'], ['{"name":"ECE3221"}'], ['{"name":"ECE2701"}'], ['{"name":"CS3383"}'], ['{"name":"TME3413"}'], ['{"name":"HIST3925"}']]
	    //post: getPost(state, props.params.cuid),
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StudentHome);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(15);
	
	var _AppReducer = __webpack_require__(33);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addStudents = addStudents;
	exports.dropStudents = dropStudents;
	exports.courseList = courseList;
	exports.createCourse = createCourse;
	exports.removeCourse = removeCourse;
	
	var _course = __webpack_require__(54);
	
	var _course2 = _interopRequireDefault(_course);
	
	var _user = __webpack_require__(9);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _sessionUtils = __webpack_require__(58);
	
	var _sessionUtils2 = _interopRequireDefault(_sessionUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var async_f = __webpack_require__(59);
	var await_f = __webpack_require__(60);
	
	function checkRequestSanity(req, res) {
	  return new Promise(function (fulfill, reject) {
	    // make sure that the session is valid
	    _sessionUtils2.default.isValidSession(req.cookies.sessionID).then(function (isValid) {
	      if (isValid !== true) {
	        res.status(401).end();
	        fulfill(false);
	      } else {
	        // make sure that this sessionID belongs to an Admin
	        //TODO: we need to check that this admin is the owner of the course
	        _sessionUtils2.default.isAdmin(req.cookies.sessionID).then(function (isAdmin) {
	          if (isAdmin !== true) {
	            res.status(401).send("This API endpoint requires Admin capability").end();
	            fulfill(false);
	          } else {
	            // make sure that the request contains a course title
	            if (!req.params.courseTitle) {
	              res.status(403).send("Invalid course title").end();
	              fulfill(false);
	            }
	            // make sure the courseTitle is valid
	            // TODO Important :: we need to make sure that the course title is alphanumeric and doesn't contain special characters
	
	            // make sure that the request format is correct
	            if (!req.body.students) {
	              res.status(403).send("Invalid request").end();
	              fulfill(false);
	            }
	
	            // make sure that the request size > 0
	            if (!Array.isArray(req.body.students) || req.body.students.length <= 0) {
	              res.status(403).send("Invalid request (Array of students is expected)").end();
	              fulfill(false);
	            }
	
	            fulfill(true);
	          }
	        });
	      }
	    });
	  });
	}
	
	/**
	* This function add a list of students to a specific Course
	* It requires admin access
	* @author Gehad
	* @param HTTP req
	* @param HTTP res
	* @returns void
	*/
	function addStudents(req, res) {
	  checkRequestSanity(req, res).then(function (accept) {
	    if (accept) {
	      var checkAndSend = function checkAndSend() {
	        if (DBSuccesses + DBfails === numberOfStudents) {
	          res.status(200).send({
	            Inserted: DBSuccesses,
	            Failed: DBfails
	          }).end();
	        }
	      };
	
	      // add students to the database
	
	
	      var numberOfStudents = req.body.students.length;
	      var DBSuccesses = 0;
	      var DBfails = 0;
	      _course2.default.findOne({ 'title': req.params.courseTitle }, 'title', function (err, course) {
	        if (course === null) {
	          res.status(403).send("Invalid request (Course not found)").end();
	        } else {
	          req.body.students.map(function (student) {
	            return student.email;
	          }).filter(function (student_email) {
	            // TODO: We need to check if this user exists in the User collection before registering them to the course (Integrity)
	            // TODO: We need to check if this user is added to this course before??
	            // Will just return true for all now; need to be fixed
	            return true;
	          }).forEach(function (student_email) {
	            if (typeof student_email == 'undefined') {
	              DBfails = DBfails + 1;
	              checkAndSend();
	            } else {
	              _course2.default.updateOne({ _id: course._id }, { $push: { usernames: student_email } }, function (err, raw) {
	                if (err !== null) {
	                  console.log(err);
	                  DBfails = DBfails + 1;
	                } else {
	                  DBSuccesses = DBSuccesses + 1;
	                }
	                checkAndSend();
	              });
	            }
	          });
	        }
	      });
	    }
	  });
	}
	
	/**
	* This function remove a list of students from a specific Course
	* It requires admin access
	* @author Gehad
	* @param HTTP req
	* @param HTTP res
	* @returns void
	*/
	function dropStudents(req, res) {
	  checkRequestSanity(req, res).then(function (accept) {
	    if (accept) {
	      var checkAndSend = function checkAndSend() {
	        if (DBSuccesses + DBfails === numberOfStudents) {
	          res.status(200).send({
	            Deleted: DBSuccesses,
	            Failed: DBfails
	          }).end();
	        }
	      };
	
	      // add students to the database
	
	
	      var numberOfStudents = req.body.students.length;
	      var DBSuccesses = 0;
	      var DBfails = 0;
	      _course2.default.findOne({ 'title': req.params.courseTitle }, 'title', function (err, course) {
	        if (course === null) {
	          res.status(403).send("Invalid request (Course not found)").end();
	        } else {
	          req.body.students.map(function (student) {
	            return student.email;
	          }).filter(function (student_email) {
	            // TODO: We need to check if these users exist before registering them to the course
	            return true;
	          }).forEach(function (student_email) {
	            if (typeof student_email == 'undefined') {
	              DBfails = DBfails + 1;
	              checkAndSend();
	            } else {
	              _course2.default.updateOne({ _id: course._id },
	              // TODO: optimization :: we can remove a list in one query; we will need to filter the list beforehand
	              { $pull: { usernames: { $in: [student_email] } } }, function (err, raw) {
	                if (err !== null || raw.nModified === 0) {
	                  DBfails = DBfails + 1;
	                } else {
	                  DBSuccesses = DBSuccesses + 1;
	                }
	                checkAndSend();
	              });
	            }
	          });
	        }
	      });
	    }
	  });
	}
	
	function courseList(req, res) {
	  var list = [];
	  var results;
	
	  _course2.default.find({}, 'title', async_f(function (err, course) {
	    // async
	
	    await_f(function () {
	      // await
	      if (err) {
	        console.error(err);
	        res.status(400).end();
	      } else if (course) {
	        course.forEach(function (c) {
	          if (c.title) {
	            list.push(c.title);
	          } else {
	            res.status(400).end();
	          }
	        });
	
	        res.status(200).send({
	          courseList: list
	        });
	      } else {
	        res.status(400).end();
	      }
	    }); // end await
	  }) // end async
	  );
	}
	
	/**
	 *
	 * @param req
	 * @param res
	 * @returns void
	 */
	function createCourse(req, res) {
	  var re = new RegExp('[^A-Za-z0-9-_.]');
	  //regex pattern with match if the string contains characters other than ( A-Z, a-z, 0-9, -, _, .)
	
	  if (!req.body.title || !req.body.professor || !req.body.institution) {
	    //verify that title, professor, and institution were provided
	    res.status(403).send("Title, professor, and institution are required");
	  } else if (re.test(req.body.title)) {
	    res.status(403).send("Course title can only contain: letters, numbers, '-', '_', and '.'");
	  } else {
	    var course_data = {
	      'title': req.body.title,
	      'professor': req.body.professor,
	      'usernames': [], // make usernames array empty for now until users are added
	      'institution': req.body.institution,
	      'location': req.body.location
	    };
	    var course = new _course2.default(course_data);
	    course.save(function (err, data) {
	      if (err) {
	        console.error(err);
	        res.status(403).send("Title already belongs to an existing course");
	      } else {
	        res.status(200).end();
	      }
	    });
	  }
	}
	
	/**
	 *
	 * @param req
	 * @param res
	 * @returns void
	 */
	function removeCourse(req, res) {
	
	  if (!req.body.title) {
	    //verify that title was provided
	    res.status(403).send("Title is required!");
	  } else {
	    _course2.default.findOneAndRemove({ 'title': req.body.title }, function (err, course) {
	      if (err) {
	        console.error(err);
	        res.status(400).end();
	      } else if (course) {
	        res.status(200).end();
	      } else {
	        res.status(403).send("Course matching \"" + req.body.title + "\" not found.");
	        // unsuccessful removal
	      }
	    });
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendEmail = sendEmail;
	var nodemailer = __webpack_require__(62);
	
	function sendEmail(req, res) {
	  var transporter = nodemailer.createTransport("SMTP", {
	    service: 'gmail',
	    auth: {
	      user: 'swe4103g1@gmail.com',
	      pass: 'BentonianPhysics'
	    }
	  });
	
	  var mailOptions = {
	    from: 'swe4103g1@gmail.com',
	    to: req.body.to,
	    subject: req.body.subject,
	    html: req.body.html
	  };
	
	  transporter.sendMail(mailOptions, function (error, info) {
	    if (error) {
	      console.log(error);
	    } else {
	      console.log('Email sent: ' + info.response);
	    }
	  });
	  res.status(200).end();
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateUserAccount = generateUserAccount;
	exports.login = login;
	exports.logout = logout;
	var mongoose = __webpack_require__(6);
	__webpack_require__(14);
	__webpack_require__(9);
	var SessionSchema = __webpack_require__(6).model('Session').schema;
	var UserSchema = __webpack_require__(6).model('User').schema;
	
	var bigrandom = __webpack_require__(61);
	
	/**
	*
	* @param req
	* @param res
	* @returns void
	*/
	function generateUserAccount(req, res) {
	  var User = mongoose.model('User', UserSchema);
	
	  if (!req.body.username || !req.body.password || !req.body.email) {
	    res.status(403).send("Username, email, and password are requiered.");
	  } else if (req.body.password.length < 6 || req.body.password.length > 20) {
	    res.status(403).send("Password must be at least 6 characters in length, but less than 20.");
	  } else {
	    var user_data = {
	      'username': req.body.username,
	      'password': req.body.password,
	      'email': req.body.email,
	      'isAdmin': req.body.isAdmin
	    };
	    var user = new User(user_data);
	    user.save(function (err, data) {
	      if (err) {
	        console.error(err);
	        res.status(403).end();
	      } else if (data) {
	        res.status(200).end();
	        //console.log('session record created: ' + data +' | data type: ' + (typeof data));
	      } else {
	        res.status(400).end();
	      }
	    });
	  }
	}
	/**
	* generate a random 128-bit ID, save it to the session database
	*/
	function generateSessionID(username) {
	  var Session = mongoose.model('Session', SessionSchema);
	
	  var random128bitHexString = bigrandom();
	
	  // TODO: Needs to create new record
	  // check if exists in session table  (may not need to sort checkSession query results if we avoid duplicates by checking here)
	
	  // make new entry
	  var session_data = {
	    'username': username,
	    'sessionId': random128bitHexString
	  };
	  var session = new Session(session_data);
	  session.save(function (err, data) {
	    if (err) {
	      console.error(err);
	    } else {
	      //console.log('session record created: ' + data +' | data type: ' + (typeof data));
	    }
	  });
	
	  // return '22f5832147f5650c6a1a999fbd97695d';
	  return random128bitHexString;
	}
	
	/**
	* Check if the current sessionID is correct and is still valid
	*/
	function checkSession(sessionID, callback) {
	  // TODO: Needs to be tested againts database records, & proper return value is needed
	  var Session = mongoose.model('Session', SessionSchema);
	  var age = undefined;
	
	  Session.findOne({ 'sessionId': sessionID }, // username and sessionId should match arguments
	  'timestamp', // should return timestamp
	  function (err, session) {
	    if (err) {
	      console.error(err);
	      callback(false);
	    }
	    //console.log('QUERY -- session record returned: ' + session.timestamp +' | data type: ' + (typeof session.timestamp));
	    if (session) {
	      var age = Date.now() - session.timestamp.getTime();
	      callback(age < 10800000); //fails if session is > 3hrs old
	    } else {
	      callback(false);
	    }
	  }).sort({ 'timestamp': -1 }); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
	}
	
	/**
	* Check if User's credentials are correct
	*/
	function checkCredentials(username, password, callback) {
	  // TODO: Needs to be tested againts database records, & proper return value is needed
	  var User = mongoose.model('User', UserSchema);
	
	  User.findOne({ 'username': username, 'password': password }, // username and password should match arguments
	  function (err, user) {
	    if (err) {
	      console.error(err);
	      callback(false, null);
	    }
	    //console.log('user record returned: ' + user +' | data type: ' + (typeof user));
	    if (user) {
	      callback(true, user);
	    } else {
	      callback(false, null);
	    }
	  });
	}
	
	/**
	 *
	 * @param req
	 * @param res
	 * @returns void
	 */
	function login(req, res) {
	  // if the user hasn't logged in before, check their credentials and then generate a sessionID
	  checkSession(req.cookies.sessionID, function (sessionIsValid) {
	    if (sessionIsValid === true) {
	      // check if the user already has a sessionID, they have already logged in -> proceed
	      res.status(200).end();
	    } else {
	      if (!req.body.username || !req.body.password) {
	        res.status(403).end();
	      } else {
	        checkCredentials(req.body.username, req.body.password, function (credsAreValid, user) {
	          console.log(user);
	          if (credsAreValid === true && user !== null) {
	            // Generate a new session that is valid for 3 hours from now
	            res.cookie('sessionID', generateSessionID(req.body.username), { maxAge: 10800 });
	            res.status(200).send({
	              username: user.username,
	              isAdmin: user.isAdmin
	            });
	          } else {
	            res.status(401).end();
	          }
	        });
	      }
	    }
	  });
	}
	
	function logout(req, res) {
	  var Session = mongoose.model('Session', SessionSchema);
	  if (req.cookies.sessionID !== null) {
	    Session.remove({ 'sessionId': req.cookies.sessionID }, function (err) {
	      if (!err) {
	        res.status(200).end();
	      } else {
	        res.status(400).end();
	      }
	    });
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var CourseSchema = new Schema({
	  title: { type: 'String', required: true, unique: true },
	  professor: { type: 'String', required: true },
	  usernames: { type: 'Array' }, // Usernames of students who are in the class will be in here to link
	  institution: { type: 'String', required: true },
	  location: { type: 'String' } // room the class takes place in
	});
	
	exports.default = _mongoose2.default.model('Course', CourseSchema);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(8);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _cookieParser = __webpack_require__(27);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _compression = __webpack_require__(26);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(6);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(25);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(28);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpack = __webpack_require__(10);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(24);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(30);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(31);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(17);
	
	var _reactRedux = __webpack_require__(3);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(29);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(16);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(23);
	
	var _login = __webpack_require__(22);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _course = __webpack_require__(20);
	
	var _course2 = _interopRequireDefault(_course);
	
	var _email = __webpack_require__(21);
	
	var _email2 = _interopRequireDefault(_email);
	
	var _dummyData = __webpack_require__(19);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(18);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use((0, _cookieParser2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _login2.default);
	app.use('/api', _course2.default);
	app.use('/api', _email2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/main.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="map.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/main.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	var _session = __webpack_require__(14);
	
	var _session2 = _interopRequireDefault(_session);
	
	var _user = __webpack_require__(9);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.isValidSession = function (session_id) {
	  return new Promise(function (fulfill, reject) {
	    var age = undefined;
	    _session2.default.findOne({ 'sessionId': session_id }, // sessionId should match arguments
	    'timestamp', // should return timestamp
	    function (err, session) {
	      if (err) {
	        console.error(err);
	        reject(false);
	      } else {
	        //console.log('QUERY -- session record returned: ' + session.timestamp +' | data type: ' + (typeof session.timestamp));
	        if (session) {
	          var age = Date.now() - session.timestamp.getTime();
	          fulfill(age < 10800000); //fails if session is > 3hrs old
	        } else {
	          fulfill(false);
	        }
	      }
	    }).sort({ 'timestamp': -1 }); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
	  });
	};
	
	exports.isAdmin = function (session_id) {
	  return new Promise(function (fulfill, reject) {
	    _session2.default.findOne({ 'sessionId': session_id }, // sessionId should match arguments
	    'username', // should return username
	    function (err, session) {
	      if (err) {
	        console.error(err);
	        reject(false);
	      } else {
	        if (session) {
	          _user2.default.findOne({ 'username': session.username }, // sessionId should match arguments
	          'isAdmin', // should return username
	          function (err, user) {
	            if (err) {
	              console.error(err);
	              reject(false);
	            } else {
	              if (user) {
	                fulfill(user.isAdmin);
	              } else {
	                fulfill(false);
	              }
	            }
	          }).sort({ 'timestamp': -1 });
	        } else {
	          fulfill(false);
	        }
	      }
	    }).sort({ 'timestamp': -1 }); // I think this will make it return the most recent match if there is more than 1, but this needs to be verified
	  });
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("asyncawait/async");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("asyncawait/await");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("bigrandom");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("nodemailer");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("react-icons-kit");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);
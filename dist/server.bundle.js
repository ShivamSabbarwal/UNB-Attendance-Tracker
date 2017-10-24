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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-icons/lib/fa/edit");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 10 */
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
/* 11 */
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
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _DataCell = __webpack_require__(36);
	
	var _DataCell2 = _interopRequireDefault(_DataCell);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
/* 12 */
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
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _edit = __webpack_require__(8);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
	
	var _ref8 = _jsx(_reactBootstrap.Grid, {}, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0, _jsx(_reactRouter.Link, {
	  to: '/create_course'
	}, void 0, _jsx('label', {}, void 0, ' Create a Course '))), _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0), _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0)), _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0), _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0), _jsx(_reactBootstrap.Col, {
	  xs: 6,
	  md: 3
	}, void 0)));
	
	function InstructorHome(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {
	    style: { marginBottom: '0' }
	  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref4, _ref5, _ref6, _ref7), _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Welcome, Justin Lee'), _jsx(_reactBootstrap.Image, {
	    className: _main2.default.instructorPic,
	    src: "data:image/png;base64,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",
	    rounded: true
	  })), _jsx('div', {
	    className: _main2.default.optionsContainer
	  }, void 0, _ref8));
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InstructorHome);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
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
	
	var _App = __webpack_require__(31);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _CreateCourse = __webpack_require__(38);
	
	var _CreateCourse2 = _interopRequireDefault(_CreateCourse);
	
	var _Login = __webpack_require__(40);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Signup = __webpack_require__(41);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	var _InstructorHome = __webpack_require__(12);
	
	var _InstructorHome2 = _interopRequireDefault(_InstructorHome);
	
	var _landingPage = __webpack_require__(43);
	
	var _landingPage2 = _interopRequireDefault(_landingPage);
	
	var _CourseGrid = __webpack_require__(11);
	
	var _CourseGrid2 = _interopRequireDefault(_CourseGrid);
	
	var _InstructorCourseList = __webpack_require__(39);
	
	var _InstructorCourseList2 = _interopRequireDefault(_InstructorCourseList);
	
	var _CourseOverview = __webpack_require__(37);
	
	var _CourseOverview2 = _interopRequireDefault(_CourseOverview);
	
	var _RegisterCourse = __webpack_require__(42);
	
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
	  __webpack_require__(12);
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
	  component: _landingPage2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/course_grid',
	  component: _CourseGrid2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/instructor_courses',
	  component: _InstructorCourseList2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/course_overview',
	  component: _CourseOverview2.default
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
	
	var _reduxThunk = __webpack_require__(60);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(44);
	
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
	
	var _post = __webpack_require__(48);
	
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
	
	var _express = __webpack_require__(7);
	
	var _course = __webpack_require__(45);
	
	var CourseController = _interopRequireWildcard(_course);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Add students to a specific course
	router.route('/course/:courseTitle/students').put(CourseController.addStudents);
	
	// Drop students from a specific course
	router.route('/course/:courseTitle/students').delete(CourseController.dropStudents);
	
	exports.default = router;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(7);
	
	var _login = __webpack_require__(46);
	
	var LoginController = _interopRequireWildcard(_login);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/login').post(LoginController.login);
	
	router.route('/logout').get(LoginController.logout);
	
	router.route('/signup').post(LoginController.generateUserAccount);
	
	exports.default = router;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(50);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(9);
	var cssnext = __webpack_require__(53);
	var postcssFocus = __webpack_require__(54);
	var postcssReporter = __webpack_require__(55);
	
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
/* 24 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 31 */
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
	  "navbar": "_2iFeZc6MIs4RUSem5vDVmZ",
	  "badge": "_2gh3RPiQdr__dxs7FLONlD",
	  "table": "_31QCXjLsctJmOiPBfFYiHn",
	  "table-bordered": "MLI6Hhug13Lr5uwMgOF3o",
	  "h1": "ebLX35mN7o3ig-ZWpuiSR",
	  "h2": "kbDZJdx729zLXhtjl1tY7",
	  "h3": "k3AN2C9hhqHcZfAtLoMu-",
	  "h4": "_12sm2Fr_wo_rGrhnr8UjJf",
	  "h5": "_2HXwxKo-0U62RYmCC_Nzqu",
	  "h6": "_2YJ1effhO7X8gwp5l6ElTA",
	  "lead": "_29AhDI6_U_dBnt-2jFR7OB",
	  "display-1": "_3K231Ni_5aNhKI6VJvmlGw",
	  "display-2": "z9wCeXHKkh4Mk3ImdBWWV",
	  "display-3": "_2ZL_B3QEQ_KsJYjPXZzvRa",
	  "display-4": "_3g_-V_r5WrP6NkMMx5rnxq",
	  "small": "XP9q-UOFHHHWTobwLkz6L",
	  "mark": "_1rSeyR5f2Ii0xT5DXlCJ6s",
	  "list-unstyled": "_1sBJk2aWGA2BZBdkXatREP",
	  "list-inline": "_2hmyguhHC2ju9ZK4sePDaa",
	  "list-inline-item": "_2DhmpN-cfmYhDYQt5vHR9E",
	  "initialism": "hykQAjcTbVs57bLhRb5gr",
	  "blockquote": "_1fnR8pnTkKv4NEAolDyDEm",
	  "blockquote-footer": "_1LPAPp2ibXBTaPSo4QH5-q",
	  "img-fluid": "_11dMJP2K55s2ICixxe2IJJ",
	  "img-thumbnail": "_3KCWsXmutbtVGS4NeRuWPC",
	  "figure": "_1LL6tdF3jaKrw5vI1tE0l6",
	  "figure-img": "_2E7fjDCeuQsm9gB-nUeocB",
	  "figure-caption": "_2lnuzXADO_h_5qqk1bLC4C",
	  "pre-scrollable": "_3Te9pQfnMqIOujOBDXpdUx",
	  "container": "_2SrQjSpWNLzsw_LKCN2Yq8",
	  "container-fluid": "_28b5Jz8pfTF9TuhyUSzMIK",
	  "row": "_3B7wEq4SXob1XnsM28lDAz",
	  "no-gutters": "_2Y837rl-BTiw5F5dnHE5h_",
	  "col": "_1y8tvbxFZ2ObIelNo-t2j",
	  "col-1": "C-RKGT74ew5KLD2MS_ESy",
	  "col-2": "_3DtUZsoWQ7k2THBlY4jGjS",
	  "col-3": "_2B9cJ31m88qqIALt_mXl2j",
	  "col-4": "_2894UEltPfGMe5cgjL1-rv",
	  "col-5": "X7BNShzjvZpMWQOfKikS1",
	  "col-6": "_1JPDTeETxlalgZCFUZn5FM",
	  "col-7": "_10FJlvUh1YDBDBrAirzXUe",
	  "col-8": "_26YP6Bak9ybN0TPIy0cVfA",
	  "col-9": "bWDan6xK7i-KKsN9puRN0",
	  "col-10": "_2qQg47_u5w-5_3ZSFhTL87",
	  "col-11": "qLb_tEWvYWrMFXCbGAhj1",
	  "col-12": "Mo2Zce9MoWgEClQuAnnlS",
	  "col-auto": "_2zLUPM3oW_fFUly9MzGGTe",
	  "col-sm-1": "lLjM-wUj6VJ_7hQKNX8AB",
	  "col-sm-2": "KFjpTSbS4UTI_b0nAUh3B",
	  "col-sm-3": "_N2gBlkn7KDhA1PYanYes",
	  "col-sm-4": "_3NQxhS4OX-zqPwtUoYsxHW",
	  "col-sm-5": "yoO3YCWPiEWbXViHBt8h-",
	  "col-sm-6": "I23O8aWXZOXqA5pZlKcKd",
	  "col-sm-7": "L7taqN1rioXacyglojcx2",
	  "col-sm-8": "_3Bms9rADKErZlbat8wzbK-",
	  "col-sm-9": "_1UXDIzwIOb1U7LmGATqCSv",
	  "col-sm-10": "_3iZNNto6xdtfyYp1D-KBne",
	  "col-sm-11": "_3jK4_wNnDAlHYH-oR2tnvc",
	  "col-sm-12": "_2gkkGl5xwQ50_5w08qcvnI",
	  "col-sm": "_2riCS2LViUb5YdiTxlubyf",
	  "col-sm-auto": "_3wAxHHt80hHmceLDTCdgbX",
	  "col-md-1": "ujYwVkCqoMuI_Wq0l9dFF",
	  "col-md-2": "_1S2LVRf1xjUS3HWqCoM9T",
	  "col-md-3": "Y-Qig_qlSsDTAML_4jlsa",
	  "col-md-4": "pamaGi0hKKPzMJo7h-zjk",
	  "col-md-5": "_3hxBdOfxSCqsSn8FD34Co-",
	  "col-md-6": "_2rtcBZPB5ypo-h3CFxIs7w",
	  "col-md-7": "_2BWMseGycX81nPLfE-031h",
	  "col-md-8": "_2-p0m50VKSHVLRlhJkCdf8",
	  "col-md-9": "qa-UJ4QzrbY3SB39GYWMA",
	  "col-md-10": "_3J42CHfot6XrQTa27zikvO",
	  "col-md-11": "_2OeNPJqAvUg-8cFM17c8dh",
	  "col-md-12": "_3qU7vS4bbfkXPGjZJLJ9gA",
	  "col-md": "_1nGErqvIsJ8Ih4JMCd9JvY",
	  "col-md-auto": "_3Q7QGRZbNnqF4RUVTk9Vbh",
	  "col-lg-1": "_1lVtp3-0tArOC4f-f4ZfpH",
	  "col-lg-2": "_5AUB_8BZsNZNCKH0PTBdK",
	  "col-lg-3": "_2tK2xyDpzCA2kjocJHgYwF",
	  "col-lg-4": "uX-rGbAyAc9ScEF04k0r2",
	  "col-lg-5": "xccIVS5qvkJsDBc00fB-D",
	  "col-lg-6": "ysMFFPqi20jlApj5ccQyw",
	  "col-lg-7": "_2q4fzf6TXwZPaKc2aUW5-T",
	  "col-lg-8": "_3zHa4eB0Hf0b__FHD5_4il",
	  "col-lg-9": "_2UwhPfdrdbOJaPVl21tpuB",
	  "col-lg-10": "_2XTEqbW4-scgZK_PENfgid",
	  "col-lg-11": "_2B_oa4UVOQ5UVsT0B5dHpT",
	  "col-lg-12": "_3iy28ky6-M75VSClqUzEqO",
	  "col-lg": "_2U1mTgrk8GwH4xrgs9ZDKc",
	  "col-lg-auto": "_1Gn4Qe-zgSGpxHcbFLWT55",
	  "col-xl-1": "_2Bj8HQ7kcyK9qKHo7cBjwh",
	  "col-xl-2": "Chf5Zeo6viaA_EtT4vc1E",
	  "col-xl-3": "_2OK2c9ufROJavyoERUX5bJ",
	  "col-xl-4": "_2Jc7iqVLmX5KaVLL6RrsZK",
	  "col-xl-5": "_3oKpdLsffwwDYVlemCALrL",
	  "col-xl-6": "IytRoZkjNbUTLNiFrFRNv",
	  "col-xl-7": "_3ummN3sJhrEEh8GCDOT6-6",
	  "col-xl-8": "_1ZYg3pNyZRVDrcCUeIT_nu",
	  "col-xl-9": "_1xIlFHFCEFK8tWep0hIOEv",
	  "col-xl-10": "_1Q6n-aSTCZjO28jDgrlxuG",
	  "col-xl-11": "_1s3XenBNRdorCkVcLqL8Ax",
	  "col-xl-12": "DgOHeQApYwyBPnM-iFCsg",
	  "col-xl": "_8wWt8fgCIHSImzyACuR2K",
	  "col-xl-auto": "_37PY9USFiUXquk4WPGlIMP",
	  "order-1": "_3ALkLDlLYElboJVb5CE24U",
	  "order-2": "_2WOG02lRWbJrRHk4nc-5dL",
	  "order-3": "_34iiwmTYTnxEurXh_GtkNe",
	  "order-4": "smpkm0MniocqpZUELzrlb",
	  "order-5": "_25qQ9WO39ozsYQB-HTn2X0",
	  "order-6": "pciHooctmzs5ACO9IYySL",
	  "order-7": "_3XexJH3goRas0iMlbKw5vK",
	  "order-8": "_3PvZlxJm6DRax7xGuhEO4T",
	  "order-9": "_1pn_XgX54nFFnHAIMEQxxl",
	  "order-10": "_2Qwb7Xla9-VVca-qL_oudA",
	  "order-11": "_1LdjsLrpFCdjTFASSPS3aS",
	  "order-12": "_34XzvvKfwSNpYRoreVih9E",
	  "order-sm-1": "_1sZC5aOkD0i8y_B4DLMT_3",
	  "order-sm-2": "_1h-oTgpfUsdnJkcqQyJCrC",
	  "order-sm-3": "_28o1KlhKgEoWb6afUJMMte",
	  "order-sm-4": "_35ZUIemgp3RDChSQSoioVI",
	  "order-sm-5": "xkU9Ql3A0xGcEckB9Klra",
	  "order-sm-6": "_3yqv64pBifIkySM7RnxP58",
	  "order-sm-7": "p_Z3Ga8rEmDdbdhaL1qq4",
	  "order-sm-8": "_3Rvm9Bw00BZLJRxizVPM-H",
	  "order-sm-9": "_2qUNnryzPX9kes8g8NCrTX",
	  "order-sm-10": "_1ZVLDl-bETCR1cvLEu9D4I",
	  "order-sm-11": "_1ThrtH2ph2kPwrdsznfOFp",
	  "order-sm-12": "vz-J2fkOmxi-hv7fkpxb5",
	  "order-md-1": "I5An3ZJJgvbBLMFMAPXwp",
	  "order-md-2": "_1kRjuoidCZ7BGtUwMMC8-B",
	  "order-md-3": "_31BFYtfv2TlYDMew0tTpVh",
	  "order-md-4": "QGMCVJ0lXiquI0nN8E52b",
	  "order-md-5": "_3T5LTmRDdub0TzAXOFJfka",
	  "order-md-6": "_19xfsKZ8SXr454__ikzlxx",
	  "order-md-7": "H21INHCjpUbqtHXAdknF4",
	  "order-md-8": "_2_jQMhukzS3jg3na_sY8T3",
	  "order-md-9": "_2TkcGTBwL_O7S3o8slYhdf",
	  "order-md-10": "_36Xpd3zqMtcWDBXbMkjY7l",
	  "order-md-11": "_1fflaBW-89Y5tCIVafQFiA",
	  "order-md-12": "_2ibvZ6nEHNQWty-Z9yQSDT",
	  "order-lg-1": "ljjJnP4ono8Y511yZVC-N",
	  "order-lg-2": "_2kZdfapJ7AFKB-eI36Tvbe",
	  "order-lg-3": "_22z-qvr0R9pA_TYaEgHm2n",
	  "order-lg-4": "_2MrfLq8SPAU5bVg-aR2UIU",
	  "order-lg-5": "_1rwkEmN_kWP8qdMNRrZVYZ",
	  "order-lg-6": "lE5ftOiQuAg4Yvd9RujkZ",
	  "order-lg-7": "_1QZhd7fDlrKMUxoDFEpb6z",
	  "order-lg-8": "_1vedrAy5ysIhpaP8TUAIkq",
	  "order-lg-9": "_1ClpLpZ--iFMi62WxhwdN1",
	  "order-lg-10": "_24l2JB3mQ1-prF31niZV8q",
	  "order-lg-11": "_2A_5J5AnfWj1o3sluOwcoi",
	  "order-lg-12": "_1JWy70t-tp9R-yq6To_7XI",
	  "order-xl-1": "_1pDlCRSmps8_HRlbBJ_j3N",
	  "order-xl-2": "_1nYZIgFfCjLzKuWkDkDJw2",
	  "order-xl-3": "_2lhy8OZ8Z76qtUiBuTffHh",
	  "order-xl-4": "_2gujAr-JNhy8VkXNFNgyUI",
	  "order-xl-5": "_1LeVxQTwD8AHRmtaLBjuhT",
	  "order-xl-6": "_1LDcjHY4y9V-_ugKFBBUPE",
	  "order-xl-7": "_2YMgQoD-HYUUxCy12LHzsm",
	  "order-xl-8": "_2hDiiCO-3dd8wRsJajolIs",
	  "order-xl-9": "_1qrlWSdSZJgNgKs8sM_5nV",
	  "order-xl-10": "_2t5xsbm1X6BrMM1313wNp0",
	  "order-xl-11": "_1eM1GZc3Q4pVHEMjNfWMHa",
	  "order-xl-12": "_1NEJQFXCAuARXjjCrY3gfH",
	  "table-sm": "_3yZ8VJKYe1nBA6iUbo9uip",
	  "table-striped": "_2fHk95kURt8RppohjjoZY1",
	  "table-hover": "_2kAiW_G6WaFB3yQb-HulpI",
	  "table-primary": "YmvnqiHTKBuZ0YzoiX2c1",
	  "table-secondary": "_1p0ipnfeqUHpjED7jfYfAN",
	  "table-success": "_3V7Sjc-zrJexcBEO-L96Xq",
	  "table-info": "_26ceAwiQ3jSLzaE6RaBUiI",
	  "table-warning": "RFcRxq3Y7xWeybZ2ai1Vf",
	  "table-danger": "_2uhaxirEIA6-fAlVzJMbFb",
	  "table-light": "V4uvOmmHsvx2wMjIGZlI5",
	  "table-dark": "_2Qg1Xi136jmvgQ6Ld2-9lx",
	  "table-active": "_3nfixjAzMzzi9i_4L_fCuk",
	  "thead-inverse": "_3vQzTSaG-D49a2zygxSMmr",
	  "thead-default": "_2Jq82whZ4OmbiPuTfEuXho",
	  "table-inverse": "_1SMtLuD_7hUQy6EdDp0GNq",
	  "table-responsive": "RwBlJwmDZ2Q15iZNt-tPB",
	  "form-control": "_1Gys8sET4CpXCr5U-TGs4d",
	  "form-control-file": "_1V6fTpYDVaB0RPBpPHqYHI",
	  "form-control-range": "_3BCv4Kq150iHi8R9gmJvdZ",
	  "col-form-label": "_3SqWQ8bjdwS3Zc7P3JuJRl",
	  "col-form-label-lg": "_1KXgEZ_HicvjfSmGH4cuo9",
	  "col-form-label-sm": "_1I-uygLUDaL1qdShAZAE5f",
	  "col-form-legend": "_29SYVdWf9GPus7C-v5_lRh",
	  "form-control-plaintext": "BC_2dQz8hynkGx6tshxQS",
	  "form-control-sm": "_3N_d_sF1LYRYzWSEoHP6TC",
	  "input-group-sm": "_1yzwoGlbgtbnIs06-NeNos",
	  "input-group-addon": "_2Pk2CQjvAxSjQ7dmK1yNRM",
	  "input-group-btn": "_3l3JX81EJi2iUOOvzOiD87",
	  "btn": "_1pR24TRAYOy9aS06O6jaUT",
	  "form-control-lg": "_26cNZmA8w11PiweUy4CwZR",
	  "input-group-lg": "_3ncekKyRwwBaxcIY1PxH6B",
	  "form-group": "JHShBtsIo9DAx5qf8DtyP",
	  "form-text": "_1XEoB_piESI1e8nGVcvYzm",
	  "form-row": "_3od0gDzf-fk6ZF6FgWoSEg",
	  "form-check": "_1SjkIBZctiJuDxoLgWKEBs",
	  "disabled": "_10cpEXQco-hbcLx1_REuQf",
	  "form-check-label": "_1BaQh4VoKEMXRtqoPvsZ3w",
	  "form-check-input": "_8uX1bImAdgEwDEvVwvtJa",
	  "form-check-inline": "_28H0AbOEsoPHMjZlgSy0fb",
	  "invalid-feedback": "loFCt6r-cUf6ZNqqwtcZC",
	  "invalid-tooltip": "_1r6EA2Sj6raEEYCf4p-NWv",
	  "was-validated": "_2jsbXwvlhxn6wuGXR16DOX",
	  "is-valid": "_1hgHrvH4-b210K4wV5VGVg",
	  "custom-select": "_2ojB5xhbLVSru4JxGZwxzk",
	  "custom-control-input": "iUY6Xh3MHKx5ONN4nvtMO",
	  "custom-control-indicator": "_31f7s_4r1IPo6he1LMe38F",
	  "custom-control-description": "_2c5xiK69auBQbViRBm8by1",
	  "custom-file-input": "ZXd_eDW03iXrJdgA8hflE",
	  "custom-file-control": "_49Bz7wFcnPHadQiNqvrAk",
	  "is-invalid": "_1QI-9iFeUZmbEOS-SkTG39",
	  "form-inline": "_1u466lqZhE-DIn6Cg2BkH4",
	  "input-group": "_3ETUiUxRBtCGNuwpeISl0C",
	  "form-control-label": "Wjfiezuw0hPzAjePIlRMm",
	  "custom-control": "_2Ds0fbAdkDDfpt-zeLcdtv",
	  "has-feedback": "_1V-o_AN7UhipuFUzGIs1WK",
	  "form-control-feedback": "_3FBcKr5GcwvWg5ADyNzWsc",
	  "focus": "_1SbdXcpUyPrNu_IXEcxHPK",
	  "active": "hLPkwJL89JXq2BOFjx7-2",
	  "btn-primary": "_3c0uLkk7BHgVLNUMOpGnwM",
	  "show": "_3AmrGN5egyhBXcalhLGWxk",
	  "dropdown-toggle": "CiTRPQd7X7d-EgVb4uP--",
	  "btn-secondary": "_1SeelSYYh73qzAryygE2Ql",
	  "btn-success": "_2HYwAAzl1kKNA1FU3A_hsI",
	  "btn-info": "_134EtKi6ZmeVYul2v5x_DE",
	  "btn-warning": "_2oyM1agY0b72mkytRUzQ8k",
	  "btn-danger": "_3vKg7VZLHgzUQ02gXKiHCV",
	  "btn-light": "_2W2dYqp7ks41gkISusBmqY",
	  "btn-dark": "DjQjjhU5bmMWWBDviFukW",
	  "btn-outline-primary": "_1H6cVoIW2PsHTFLCIqmwHw",
	  "btn-outline-secondary": "_19f9U5AlMTXcbW4PoGnmFt",
	  "btn-outline-success": "_2lCb5jkjJkKiK12NnIAycu",
	  "btn-outline-info": "_1A05bJGukJriTjbtfUqa3i",
	  "btn-outline-warning": "zzX6AO_btNgiuv9M-viuq",
	  "btn-outline-danger": "_3JHkvW3fZwvKfRd2SI5I6y",
	  "btn-outline-light": "_22sfAseS9d401LkiuMxYfp",
	  "btn-outline-dark": "_1altp96V4k-roNdmIYdZTs",
	  "btn-link": "_2_XQ0VBKa_CgI5VzmwivlU",
	  "btn-lg": "_2R1Jzpe7rbDFfM9izd65LB",
	  "btn-group-lg": "_3QEkyOfwaNzuAM66R1vb-s",
	  "btn-sm": "_3mxqRVoa93bIGXDrlGEtL2",
	  "btn-group-sm": "_2oD8-RgoZgixuP0LVOLjg-",
	  "btn-block": "_2YGNeahiz3N9DLGIqYxORV",
	  "fade": "_1rqIzRttPK_043y_WqpDNY",
	  "collapse": "_2AShte27cHbwtotHEuBZjK",
	  "collapsing": "_zaZRDZlweT87ni6qBSdF",
	  "dropup": "EgqmhySVbSjPoXPSAXT28",
	  "dropdown": "_4LV5E_EreNNh5iaGlihRM",
	  "dropdown-menu": "_1AEzmfN8jMZoPqi9M7lgs_",
	  "dropdown-divider": "HRiZRoGDNOgxzovhcVBhl",
	  "dropdown-item": "_3-xIHWk7-gvKhVvT5cDB-r",
	  "dropdown-header": "_4jLpWMvw0D-1fuZIJEQzp",
	  "btn-group": "_1m84s5nbMsBq--_uIzAB0w",
	  "btn-group-vertical": "_3kGJWzIHYPZTK-SgQiJZ5O",
	  "btn-toolbar": "_3a_a8H8CLXlTzmofe3X4UH",
	  "dropdown-toggle-split": "j94eM1eEf5Hk_A2D3yNBc",
	  "custom-checkbox": "_3XUo15MA5n3vKKrA6931Df",
	  "custom-radio": "_2jlqy-tG-H61dmYup3EbPD",
	  "custom-controls-stacked": "E1eykzD0qrEaAE3d0bSbo",
	  "custom-select-sm": "TdDr5VsNTEiJsMqgTSTB1",
	  "custom-file": "_2zW1y79b7Lh71pRa5NwS39",
	  "nav": "_3xh_pdjtEzyrGPIQ4Rn6zK",
	  "nav-link": "_1WiDnqqPe9E4LBhah7ALpS",
	  "nav-tabs": "_1nP67DLOiQpHqtUXLq3ymc",
	  "nav-item": "_2Y-2uFY29MPf9GVUmCL-NW",
	  "nav-pills": "_2Up56cgDlD_W6kjYTutR_J",
	  "nav-fill": "hnG0CqT5j-leDIQxlU3tP",
	  "nav-justified": "_3RTu4YSYHqqUvWV3nerfBZ",
	  "tab-content": "yn0bKqYS8WAPWRW5XL3Q3",
	  "tab-pane": "zmWh_PM1L_lGf0eXy12Fm",
	  "navbar-brand": "_1QBTyQRoJQBqxbX2Wo1pa-",
	  "navbar-nav": "_1FUO3fD8vy6HjxUMDDjaxI",
	  "navbar-text": "_2ycUEj4s8gdTofw3jl_H8E",
	  "navbar-collapse": "_1r08DasuXMzmSaugjeds3M",
	  "navbar-toggler": "_3tOggFAu3v1CUSo9O9da8l",
	  "navbar-toggler-icon": "_3S1Yt5opjl3ftfRxvs5Be1",
	  "navbar-expand-sm": "Jh7nYFQnbScYiChgpMhSP",
	  "dropdown-menu-right": "_2XOhw8OQBu7eDOE4mx5NBR",
	  "navbar-expand-md": "_27YSpgt3H1Rsc7mZaqT2QA",
	  "navbar-expand-lg": "_3DDUcpByiDfLOeUKxQAk56",
	  "navbar-expand-xl": "ABTr_HKMDEWAeLsQs5kaI",
	  "navbar-expand": "_2UW7TrAbVHTr66y9TyglKC",
	  "navbar-light": "_3Hxdz-4QTf4qlrbSO67Sii",
	  "navbar-dark": "_1zvBhSjSWI9k26PxIGqEZg",
	  "card": "_230sAEBumJDOphB7aJ-1x-",
	  "card-body": "_1KnKpH52WQP_wF2Yoxr05P",
	  "card-title": "_2vdggXio4Y-Wo0qnE64QuQ",
	  "card-subtitle": "_3Do4WA6dUS9UIDX5RIaaJp",
	  "card-text": "_92ALKfWCTtyiuoBU1Qbjb",
	  "card-link": "_1LKop05NMKTBs4auqQj5va",
	  "list-group": "_3W5hEPWylWvAr3Aya-gn_g",
	  "list-group-item": "vJvdGiTiWnLVfDiYsPpYw",
	  "card-header": "Qr1SYjPvJgX1txdABB7Ps",
	  "card-footer": "XG99h_-FPs8Q0IqrRGdK-",
	  "card-header-tabs": "_1VIoy-PcUzKCES62u-qT4Q",
	  "card-header-pills": "_3yBcyyZDLCJ9LUxdg3W3Z8",
	  "card-img-overlay": "ww9pJHrzHGQxV_665ZaMx",
	  "card-img": "_2hTwuhwaElG6MK3irTVhzn",
	  "card-img-top": "_2naqDp3WC3i0Kuy4_-f7Yu",
	  "card-img-bottom": "_3owvYCmTSai-L_XtQC5HV3",
	  "card-deck": "_3yIxh9BC_2qo2j9R7y2XfU",
	  "card-group": "_341QeIMRam_2EdMS-Kve_a",
	  "card-columns": "_3N1IS-Szha_eripJbnT3_U",
	  "breadcrumb": "mYS1BDOBKe0XjQtXLTdy6",
	  "breadcrumb-item": "_28rtZUrXer5KJO1wna7-Ft",
	  "pagination": "_2iToqNKPM-HdGuRz8Cie5_",
	  "page-item": "_2AA5UCQwGQ1OdHK4Tp5f6E",
	  "page-link": "_12ptmxhq3hAsEjDKhwgeb3",
	  "pagination-lg": "_2QohxqBuDPQPJZX01Lu6jJ",
	  "pagination-sm": "_3B3yCQjaMNjJT3GBKNFipf",
	  "badge-pill": "giXhnbhmdoatR5-5n9MV8",
	  "badge-primary": "z9MPymON_qQ3Qn3OHkePs",
	  "badge-secondary": "_3onOByDMPMw8NyZkIS85AN",
	  "badge-success": "i3VG_c_FmanyCB2Z9ip97",
	  "badge-info": "_12ya9kUwN_q7q0KVg4FuYG",
	  "badge-warning": "_1BubmViKQyv7YZF-ejP3G2",
	  "badge-danger": "_3dnuKpGs-O-gBrJoMb2Cvb",
	  "badge-light": "_1hTYVMOTiWF3RWazhNhkqk",
	  "badge-dark": "_1wzYPSQtgX4l4YGGiu-obL",
	  "jumbotron": "_2jj4ZMman5qYu6oXVelNuC",
	  "jumbotron-fluid": "_199Wq0lpJjFkb4wyrxxNS5",
	  "alert": "fOyINqZ0_QqesotVxwtv7",
	  "alert-heading": "X_8p6M689OBCDHizXFWOK",
	  "alert-link": "AJ_j8nm8JP7RFGKs_qPIe",
	  "alert-dismissible": "_3tSRlxk0ixh-bg-_hJ6beI",
	  "close": "_135y_oIoy24_By_sfHi4Lw",
	  "alert-primary": "_27x7Tc72KfLhS9XBgg8Fac",
	  "alert-secondary": "_1V8kqbBn5mS7q4tk7hMwXf",
	  "alert-success": "aECxNC6LsH-xZt3yWvLn7",
	  "alert-info": "_3Gjaf_9cQoh4KAz1YQlvjt",
	  "alert-warning": "_2EQLT93kpWq3J65Krvd1FV",
	  "alert-danger": "R8TbPa6MWVl44xw9ogPfd",
	  "alert-light": "_3PAogmWwtwe2BTWp-pa0Eh",
	  "alert-dark": "_2qplIPf2GggSeJKK69bNKu",
	  "progress": "_1JeZbcxkEReNbjn1Y5CeGh",
	  "progress-bar": "_1Et2UJjdNKIO8kzNClm5lx",
	  "progress-bar-striped": "_3xa1i-BL0BOK6vBKyya5RR",
	  "progress-bar-animated": "_2V8-7zbp0yr0lwrpGAsL5s",
	  "progress-bar-stripes": "_1mBAG6PX-aqMfP7_ZK7I4n",
	  "media": "_1n78G_F07qmvaRl-h4Sb1n",
	  "media-body": "_3WqwGbzsmPB5oToKVXgvsP",
	  "list-group-item-action": "_3dHhpUDZt6QiJWqE_GucXh",
	  "list-group-flush": "_2Fy0xoqL2hiEQc91SfCarA",
	  "list-group-item-primary": "_2xJgnMtCIP1MfsvQdYF4IT",
	  "list-group-item-secondary": "eqrD90Zhxp9rq9kGdTuf9",
	  "list-group-item-success": "ychx4Q-0i6XFr42l1d84g",
	  "list-group-item-info": "_3o5HHztDiYjRfwDkNbQT8W",
	  "list-group-item-warning": "_2r23ExV6Jd48DF5wBYt9Fo",
	  "list-group-item-danger": "_2e4fW88cg2hG7XQHqap6YN",
	  "list-group-item-light": "_1NXOoSDyye-XCENKNgqmDS",
	  "list-group-item-dark": "_3cNED4HNLYZjfks5ay-6lr",
	  "modal-open": "_2Y-2Rj2uOxszMAdQBVdT3u",
	  "modal": "_1HiHzf8AG7IT1ZKo7U63UK",
	  "modal-dialog": "_1fXt4zG_MDp6zppquf0aP6",
	  "modal-content": "vQI1LuQiAvsta9anVKr6P",
	  "modal-backdrop": "g1ThgCAB8qMuD7nWfUNmc",
	  "modal-header": "_1SdPbtF39ivYiZmhrVTtfe",
	  "modal-title": "_1l9-xxIzAeCsd5X-BzbaV1",
	  "modal-body": "OrhMH1Elv0B810oCK0tAW",
	  "modal-footer": "qijqZbvwoiefohMmtY6CG",
	  "modal-scrollbar-measure": "CrgyaMz3vcmF8kf3c5wM3",
	  "modal-sm": "YXHCJLGeDehn0nxA8jSxj",
	  "modal-lg": "_1aPISw7Vm9ABScCgZHSTzS",
	  "tooltip": "_3MYn4uh5pYrKnYXh1sSZcn",
	  "arrow": "_16PtwnMhMgXXDJoMacLHpW",
	  "bs-tooltip-top": "WkHt9oCFtWUnM-WVh68nI",
	  "bs-tooltip-auto": "o6chp0EQ0tlvcZpKt8Yt5",
	  "bs-tooltip-right": "_2ByfzCfO6NmhM1OswSKbUT",
	  "bs-tooltip-bottom": "_5MicQ63IwahptnPD4fzBI",
	  "bs-tooltip-left": "MGbaVMOlfUMX8_OO7NR8P",
	  "tooltip-inner": "_26y3Pq7k7cWXXsgVggbCqg",
	  "popover": "_1HxHmBGcpMWvEA3-93XoNG",
	  "bs-popover-top": "_69O1bbBr3I6vz1I3PB8vU",
	  "bs-popover-auto": "_16Owg53_sAT4cGReYS94H0",
	  "bs-popover-right": "_3VIHoITp5a9LKe_hKMapHB",
	  "bs-popover-bottom": "_3l5Ls7gvBtFV_8fS6MiMDo",
	  "popover-header": "_1En4oh-lsDzV46sJDFBgqf",
	  "bs-popover-left": "y4lnYDJgUYx61XKnbz8k7",
	  "popover-body": "NJqDAgj9xvLZAvkMdzFTB",
	  "carousel": "_1QDnlu1RvZycJZ5zupQLnn",
	  "carousel-inner": "Qhrz7qFSv9JVUNx9-Brtq",
	  "carousel-item": "_2m4J4tTEj77tYpdsE8AGOL",
	  "carousel-item-next": "_2BZWrWnHZUiALHtOiHuX3J",
	  "carousel-item-prev": "_3zEsZx6Fdmf7lTW0sKAX2x",
	  "carousel-item-left": "K8pcEF93XEvtosmuTzdgY",
	  "carousel-item-right": "_2U8PZ3w8hqlDJr-SwWqWhK",
	  "carousel-control-prev": "_2bacg3o0fj_dyqI2AeAL3f",
	  "carousel-control-next": "_1bl6DgzWkBXaFj4jtUYqsG",
	  "carousel-control-prev-icon": "_3n9wbI6Ku3T8XVhcF8cuUB",
	  "carousel-control-next-icon": "_3Yg4Bf3TRghaB-zKnt1U3H",
	  "carousel-indicators": "_18im--S_q-B_ZkEZNeML-b",
	  "carousel-caption": "_3hA_z5wt6jPAx8F1tbJgIi",
	  "align-baseline": "_2RDE-tAX4IevcJiBdqH3UI",
	  "align-top": "_2Oat-PU6XeplI8gTOJL7v7",
	  "align-middle": "_1F8zyP0dq1dx_IaGYb0e16",
	  "align-bottom": "_1P4Efb2KTzzBEg5RZCpwj6",
	  "align-text-bottom": "_1H9BTrD5xoVRGSTLPp0Br5",
	  "align-text-top": "_10zeEPMG06Qz0jlh4Kq1rl",
	  "bg-primary": "hap84KeBIG59Mau-P8dNG",
	  "bg-secondary": "_1_zSLfLYxKUtgBzNe4BrdN",
	  "bg-success": "_3IscAPmQWaAff-xlIOtIY1",
	  "bg-info": "_1RjW2H4Uv8dbUH8gHqY2Dp",
	  "bg-warning": "_2u3fufCxr6cVmWCwE4bJrs",
	  "bg-danger": "_2zDzoH09aWTMXUDm0tXCwL",
	  "bg-light": "_3cCbo7KpsdDqS0QSRn-zR6",
	  "bg-dark": "_1wDJ_zgWeRqlOs5VpXFXHu",
	  "bg-white": "_3zLkS4SStQLC6vTr7Qx8h2",
	  "bg-transparent": "_3aWYcCo119YA4w5FB2BG0x",
	  "border": "Z34DMFW_rYoM9HZ6Yg8WV",
	  "border-0": "_1FyVIAEd9wBYPUTwq_L0I0",
	  "border-top-0": "_26BaAIUz1-XcBFE8yugHLd",
	  "border-right-0": "KtAu_pU_ivdzFSro5npsX",
	  "border-bottom-0": "_1CWWwqpsiqN-lgjiCDNqPO",
	  "border-left-0": "_3IyzMi-Ld5eXjLdWKUFfWj",
	  "border-primary": "_2x5cCaqnF-f-ITQwSU4Nr4",
	  "border-secondary": "t7TsHXVhyqXHzH66RrB8K",
	  "border-success": "_3aVu7zguA3zwFXz3_AUfrF",
	  "border-info": "_2cjjF6MFQ5u2yMIxc8FXwR",
	  "border-warning": "_2KnvZfkM2Im3vyBlJNIoWs",
	  "border-danger": "_1LseBPs2BHU3lRvlpoxIn5",
	  "border-light": "_2K2JLFor2xmYxaRUI0SmCu",
	  "border-dark": "_3zZ04B-0nfl2m9JQKwIsLs",
	  "border-white": "_2fJSOPLaBcJ7SEHaS7t1JZ",
	  "rounded": "_1CYDNzooLxn1OMtFdJTmPC",
	  "rounded-top": "_1OvmyERLIBGV-Ay7qW9ubQ",
	  "rounded-right": "d2e9T7k2KHZuBkKJ3mTJ",
	  "rounded-bottom": "_1b3hWPesFjRFPN5Mg2yf3c",
	  "rounded-left": "ocwJaYKEZPao5dcsM05P7",
	  "rounded-circle": "_3AD_vcsblXrhfBWf1mTgy2",
	  "rounded-0": "_2OdnU1Oejgxc7z7G0KCy3x",
	  "clearfix": "_1yrKQHkfRPCCUpU4iURhXt",
	  "d-none": "gZdWu_1HdUC9CT5zcw7Mr",
	  "d-inline": "_27XVnmbZn8uiyE8nLl5-iV",
	  "d-inline-block": "_3wtlpGFdidZCOXhTAZ7gS1",
	  "d-block": "_2oP8ckcX0C7XMH351448Ws",
	  "d-table": "_2iO4Nh1nsnnIFqbtx2nxlq",
	  "d-table-cell": "_9qMlDFzwcYsnadApc0Isk",
	  "d-flex": "_158S84KhTf2WS9-kKrzOYP",
	  "d-inline-flex": "_1EUnqI1F_xevbKZF08vtyz",
	  "d-sm-none": "_3_9LhIJw-j13tv-jmZae3J",
	  "d-sm-inline": "_1Jui1VROMpr7q5nYM-1Sqm",
	  "d-sm-inline-block": "_2LohuPibSZ6KJgf06THFiX",
	  "d-sm-block": "_3UYtMaRVVCVEnYbGlLmgLZ",
	  "d-sm-table": "_1RK3XV1gN5lCeVDpeDPcWM",
	  "d-sm-table-cell": "PtE-zt7RSuWqWZwAwJiyI",
	  "d-sm-flex": "_34ECtBmKiHCcLz1_-Zyts",
	  "d-sm-inline-flex": "awqyC1Behzc7ywGOLpjcT",
	  "d-md-none": "_3h4rKk9K_zZjiwh1_5Zao",
	  "d-md-inline": "_2aSvsGl-ltfOVe16vRgjB5",
	  "d-md-inline-block": "_1utYx00osO1QAIblEBttqM",
	  "d-md-block": "_1bgO19_8Z_NtghIBsRvapj",
	  "d-md-table": "_2dBKsHZrtaWAEtg-QQGtIr",
	  "d-md-table-cell": "_3KCrWtUY7-Iw3ntLdGSEwp",
	  "d-md-flex": "_3noyyZlxNMwRaA1KEMT98F",
	  "d-md-inline-flex": "_1ncD3FTDOtdsUQgyM3rY_M",
	  "d-lg-none": "_3nHKQuqsDr7rFPbMsV2G5K",
	  "d-lg-inline": "_1zQnWmXx3lhC1GBdRT0eeD",
	  "d-lg-inline-block": "_1B019qL21uzovGRAmW-xq7",
	  "d-lg-block": "_2_Qo5KrrDb1t2knGe1lFQ_",
	  "d-lg-table": "_1aGdHN5cr_8MxzaENAbQnd",
	  "d-lg-table-cell": "_3_kxHQ_nC4e3z-oKv2CjpY",
	  "d-lg-flex": "ILyKbi_N0duIYWZH01g4k",
	  "d-lg-inline-flex": "_2nN_gAmDjTJIVV6lK2SKIB",
	  "d-xl-none": "_3xBFZczYzfaeLv626elVFA",
	  "d-xl-inline": "xDH0plpQQv_BgE_iCq5sb",
	  "d-xl-inline-block": "_1sSZiW7yHakILvC5ZU3TTt",
	  "d-xl-block": "KHe4DJr2os_drafNtRYJ",
	  "d-xl-table": "_269zGE9jp5tPnFM-eEuB7s",
	  "d-xl-table-cell": "yLoKeXzahfCE6Dooo7tth",
	  "d-xl-flex": "_2fHQ7I0KO4fJxYVm9NVCV2",
	  "d-xl-inline-flex": "_2BiT7WK7MxpQEMWrYLIVlE",
	  "d-print-block": "_1m3w7cq5DxxN5yBHe4pDhs",
	  "d-print-inline": "_3nmg3cJzIpAxD5Cam1qLsB",
	  "d-print-inline-block": "_2COTSeoYoqpIRw3iq2cPRA",
	  "d-print-none": "kVbzTlb9_iuluWKn9bY8L",
	  "embed-responsive": "utb7XV83FYDVYOSUWpeF7",
	  "embed-responsive-item": "_2OdVlSj8Htbki_Pn9rNObO",
	  "embed-responsive-21by9": "_1Jsym-0khAGIwXKPxA-4GG",
	  "embed-responsive-16by9": "G4xBttFUN1jcGw25q0bIX",
	  "embed-responsive-4by3": "_2IXyvkd2VwlVcQFKq0MTGK",
	  "embed-responsive-1by1": "_35zLV_4N8c-ZhqrtvKeoHt",
	  "flex-row": "_2eHnJCPWaXwpBWxK_fey5E",
	  "flex-column": "_2OnIVLzjIUWaZQziZbJTIK",
	  "flex-row-reverse": "_2rU8v-fOq1-rS-ZKdSVLTT",
	  "flex-column-reverse": "_1x9aeI1P8vVCQIfpoNvxSL",
	  "flex-wrap": "_1_grGTWtUaWxwKBroMeRay",
	  "flex-nowrap": "_2Zt8y0kTB5iPTyln_6lBqx",
	  "flex-wrap-reverse": "ZdhCzSvi4HFmt8gQSeHRX",
	  "justify-content-start": "cMvnGFsHoNzzFQjlN-nRd",
	  "justify-content-end": "_3QHXg5uzTk4nJPaDTqmMNf",
	  "justify-content-center": "_3QNsLgKiUS7tPrL4hu4WRo",
	  "justify-content-between": "V7j5wJJnrONwcjhrUbgqh",
	  "justify-content-around": "_16fJIV7udzydermq_XEMWM",
	  "align-items-start": "_3jj31ygicRxKGtMCbIjeGR",
	  "align-items-end": "_3IqJx0nyM6pO1AAaZZlfMA",
	  "align-items-center": "_3X3JljCVizWEit3tDCkipz",
	  "align-items-baseline": "_1YPTkb-ZnHH0Moo_IBEUut",
	  "align-items-stretch": "_2Wx0C7ejCN1aK8As4I_kd0",
	  "align-content-start": "_8pWtyRKdF3hR5WGmm1jBU",
	  "align-content-end": "_2sNSVhlksxsjhpoB7pi0Es",
	  "align-content-center": "eWoQfG5Z2q6ADl9yr6qa",
	  "align-content-between": "X0oFnq522DKEzaCJ0Sshl",
	  "align-content-around": "_2uSjOHrzVCNKYuQUK1N0JU",
	  "align-content-stretch": "_2Fvr8oCdP6hsU3ZBbFanBm",
	  "align-self-auto": "_1upNY-BuYRmQVNNZZwbl5s",
	  "align-self-start": "_2ymKXeKk5IIhTna6uvHo9t",
	  "align-self-end": "_38CgjXJbZB3Vy2HvdG2B_N",
	  "align-self-center": "_3B6YX-A29UQi8sm3q28U9D",
	  "align-self-baseline": "__sxZ2oDp16zP8fVAcIzx",
	  "align-self-stretch": "_2RYdAOEJu8bmY2QcBEIRXV",
	  "flex-sm-row": "_3JC4TKdRKBgp9APZGdOtiz",
	  "flex-sm-column": "FutT35YCSfJPrK1HyoL2x",
	  "flex-sm-row-reverse": "_24ZmODFPA7H20KSFLVhvQp",
	  "flex-sm-column-reverse": "_3WWGnoQ314oz1WfH00F9vG",
	  "flex-sm-wrap": "_3pqTANpCFoNLE2vBaW_REU",
	  "flex-sm-nowrap": "_204LIbZByY5PRW-bh_qDhc",
	  "flex-sm-wrap-reverse": "_19NkiKmmDJUUQ8RcPWCvUd",
	  "justify-content-sm-start": "dYy1k8H7LKc-cMKJ5sXfy",
	  "justify-content-sm-end": "z5hl2K8jP3N-Trel4XVSi",
	  "justify-content-sm-center": "_3aPmSRclAsa5CVcUDVj4mr",
	  "justify-content-sm-between": "_2SPb0wx67zgVrqoTGWCT6s",
	  "justify-content-sm-around": "L9LE7G4lLnuITi4jG82hf",
	  "align-items-sm-start": "TCyjCPJiV4ckXcShAcyJT",
	  "align-items-sm-end": "_2c4yWt22AqjL6_V_PIv30f",
	  "align-items-sm-center": "_3PnIWeGyqrCcwwTCZhVDKG",
	  "align-items-sm-baseline": "lhLLyd5IpQ1nLVeAloFEn",
	  "align-items-sm-stretch": "_3dgPFGT9YLmL7q6GFBcGDd",
	  "align-content-sm-start": "_1AekZnu84GdwYFMt6KYURm",
	  "align-content-sm-end": "_2vk68j_x0dTvml-8qF9gqm",
	  "align-content-sm-center": "_3nzw3oaYP3WkMVd91P5KQm",
	  "align-content-sm-between": "_17TgH7nFcY4TdzSFpI-FKq",
	  "align-content-sm-around": "cFS8rX-oPmAknZN-9qRG4",
	  "align-content-sm-stretch": "_2OUWfY4zBtOMxtpmkwcprM",
	  "align-self-sm-auto": "_3_IfBPnUqOsEPY4Ka8q4pm",
	  "align-self-sm-start": "_3gPxRfpIvZKzXdsTVxig7d",
	  "align-self-sm-end": "Ikx8i4VbgvZfjryI5xQ9u",
	  "align-self-sm-center": "_2sJTBL4ADjWxtnaoSGnG5s",
	  "align-self-sm-baseline": "pW9jJ7r3_8gaotOKOcOOo",
	  "align-self-sm-stretch": "_3LDkW9O7-ow-AlBS7mQj0K",
	  "flex-md-row": "_2wu3kHvkP-J19vJxdRuKpF",
	  "flex-md-column": "QzBnyhsFk0NLXN73w_qLU",
	  "flex-md-row-reverse": "_2BuFPex4DPDVl-6z2ouHqh",
	  "flex-md-column-reverse": "_2zCe9BtJoOk3QArhqX3iH5",
	  "flex-md-wrap": "_16srtxA5hD834FKuYRLX5f",
	  "flex-md-nowrap": "_-AXzQG6IO_s5TIxENIAer",
	  "flex-md-wrap-reverse": "_39guA9IRP8fMQzwd5n7qSr",
	  "justify-content-md-start": "_3OlSZ-ktGNzgdNSnKdj0k9",
	  "justify-content-md-end": "_202I1_dK-vLEtUeNooaE7h",
	  "justify-content-md-center": "_3Q1bdET6aXwLgjfFVh7Aen",
	  "justify-content-md-between": "_2QiBAbrhPGjGuqFAUlQ5v2",
	  "justify-content-md-around": "_2jsd8ddArRazS3sJ2or1gE",
	  "align-items-md-start": "Zu7CH_zikTGcaJotZzU23",
	  "align-items-md-end": "_1BagS6oXLMxZbdTHKOZjc",
	  "align-items-md-center": "w_9yhTnda6ePBHSZzi9Hy",
	  "align-items-md-baseline": "_2oyc9hEjlFEQ_9Orb2Y18t",
	  "align-items-md-stretch": "_1VsGeJfOL-U2GIMEcHi1kn",
	  "align-content-md-start": "_1EQ5Fua1b3e0OwaXcxsCFk",
	  "align-content-md-end": "_2QhPS8puS1h_4zPjSKj1bX",
	  "align-content-md-center": "_1ySF5TFM59oiiw_6q1z7lx",
	  "align-content-md-between": "_1fo7CJU1z5wuWwYS6RzM_9",
	  "align-content-md-around": "_34C_L6BuUj5H6DCRfqUpSP",
	  "align-content-md-stretch": "_3bVKQIcS7Zcgld3jlxLXDR",
	  "align-self-md-auto": "_3zxPFDAvdi7IdKIcGP5ZJ3",
	  "align-self-md-start": "SXq1pnTGNcoHSj8D2y-Sc",
	  "align-self-md-end": "_2fZdEfZqRLI7_WpbozbTjW",
	  "align-self-md-center": "_3YIw219VJPwveF848q8gIz",
	  "align-self-md-baseline": "_2e49DnOdeM450yW28e_2JG",
	  "align-self-md-stretch": "ffssxsSqlKfmObXExDvg3",
	  "flex-lg-row": "_3KMfxnV69uBOf1jRlw7L0e",
	  "flex-lg-column": "zgeMDWZ9ccUadeHZwZRiM",
	  "flex-lg-row-reverse": "_2NOLpWAI-9rFIqa-Xm8dMd",
	  "flex-lg-column-reverse": "Wkh9MKWZoLptl_W4xi8KQ",
	  "flex-lg-wrap": "_28winejNSJc2QuIRZ1cvsw",
	  "flex-lg-nowrap": "_1MK0pUNL67jTg-ln1qLvPo",
	  "flex-lg-wrap-reverse": "_2MkZ-1Q8W2cfCHhsHTpQGQ",
	  "justify-content-lg-start": "_2z3d8TPqbNCHcm4OR6KMwA",
	  "justify-content-lg-end": "cnSJc2paphckcfABbhSJw",
	  "justify-content-lg-center": "vIzgjmpwRyfDXA0ToavJf",
	  "justify-content-lg-between": "_2d89NYwX4jwBVhUqBYfFk0",
	  "justify-content-lg-around": "_3T3gbZUC6MCTl6TrSNcaOq",
	  "align-items-lg-start": "_3-FaMPsNAEj6vUSRAkp83c",
	  "align-items-lg-end": "_34kC8v05hR1iOGUvRYDtts",
	  "align-items-lg-center": "_26dt1-_O1VXdU8jYckKIYB",
	  "align-items-lg-baseline": "NNrMWLGeqyvmNO5IC-9qU",
	  "align-items-lg-stretch": "_2UzufQ-0-ZaSysPgzF8iM1",
	  "align-content-lg-start": "_3AkL0SykoOCIGRFj6deaKg",
	  "align-content-lg-end": "_3DtEY206OMaG3uE-PtBVTW",
	  "align-content-lg-center": "_3aX2H1TH3k95Z5hN1aw8YC",
	  "align-content-lg-between": "_3oVHn0AcRc-eU5hWLk8lW3",
	  "align-content-lg-around": "_262Uom47RHiTr3T9MveZtl",
	  "align-content-lg-stretch": "dI63WFIVTD-ClnEeFcrCT",
	  "align-self-lg-auto": "S1Xj_OLxUHawfjVGD3FBi",
	  "align-self-lg-start": "_1Ax9RKZJnTNxJ2o-XZwQrj",
	  "align-self-lg-end": "_3reA2Ewvg8pPPTGq_rSMp3",
	  "align-self-lg-center": "_3r2I7h-qa80aTZjb-OblNE",
	  "align-self-lg-baseline": "_2DnR7uJcPoQahaqE6Zsy3a",
	  "align-self-lg-stretch": "_2MKLa_yQmpRQo31lP9UhII",
	  "flex-xl-row": "_1iz64Rqsjfjl_2ENzzFkoM",
	  "flex-xl-column": "_4RuwkBDx5GdfP9W_8rc5n",
	  "flex-xl-row-reverse": "_35ytYqVw3i1aym_CD220ja",
	  "flex-xl-column-reverse": "q7Xib8JVaYNC7YXrn6Am9",
	  "flex-xl-wrap": "gKfa6k6qoAR8_vwF_AtWS",
	  "flex-xl-nowrap": "_1ABDT2zbRtnbRdKn7DDuZT",
	  "flex-xl-wrap-reverse": "_2aXvy2Kz9C4mR1cubp8gd6",
	  "justify-content-xl-start": "_3qXEBPSNsPN2QXXb5YHyUC",
	  "justify-content-xl-end": "g_16aKXMlyu6FwL0Et08W",
	  "justify-content-xl-center": "cd4hzP1GrO5xy2yWVocf9",
	  "justify-content-xl-between": "_8Ejhv_CJ_s_MHnFkoO0HT",
	  "justify-content-xl-around": "_30opJxWgTj8omVCfeWnODd",
	  "align-items-xl-start": "ZOZpJpe70FEmNdruMRIpp",
	  "align-items-xl-end": "_3QcC6InlkGCF1OArTfORIq",
	  "align-items-xl-center": "_11MEKa0K4XlzKLUfIIi9D4",
	  "align-items-xl-baseline": "fUl3DaKMkJ0I1I2J2zpem",
	  "align-items-xl-stretch": "_2_BFGM2zR9kRQJ6SzBicKv",
	  "align-content-xl-start": "_1WRLjUeV78S8zVSrjDaa0e",
	  "align-content-xl-end": "Z0z2mqphS37qASJ0a-yJb",
	  "align-content-xl-center": "_1Q9GZZfm4oOivuhh-fKcAy",
	  "align-content-xl-between": "_2gkSy5_3BveLD91luxfCQW",
	  "align-content-xl-around": "ghfXRHFvOZF0-5Yye-VGS",
	  "align-content-xl-stretch": "KHQ8KA3iebHNHX3seRpeO",
	  "align-self-xl-auto": "mHQpwmmhutYkyMjJDRsUN",
	  "align-self-xl-start": "_3PWsN8Ur2OMpLmS_V6Mc5P",
	  "align-self-xl-end": "_3ph22VjpRir8k7y7LaSsQv",
	  "align-self-xl-center": "_3rv5ABd9Gv5mJC55oT-C-0",
	  "align-self-xl-baseline": "_3aczAhceRPOIu3XWBTtBU8",
	  "align-self-xl-stretch": "_1IWlOYoMnffcxN-C1oJ_JZ",
	  "float-left": "vHIvqWIT__aAy_JTwc7de",
	  "float-right": "S5p552UZ_kcKO8j0cPgXp",
	  "float-none": "_224Z024yC5BFEQTWsvADxg",
	  "float-sm-left": "_2Lf9TgFIkzxsLqv0H8DFnG",
	  "float-sm-right": "lacmDMb4YRfJtiIr0LGqQ",
	  "float-sm-none": "_1d8WG3cSJIzKRhp9T_wJnT",
	  "float-md-left": "_1GFNTDnig44431zbzGy_4",
	  "float-md-right": "_1Fuv3Qvp8ya6imqxyDK8Fy",
	  "float-md-none": "_1KMqlhw_oYZ3pY5Zl5vbt1",
	  "float-lg-left": "_1KL_tNJ2xzGGDSkI0981lC",
	  "float-lg-right": "_2-gtiIc-BuZ2GCztPvspBn",
	  "float-lg-none": "_3KzYZ1gTnYamHyI3cHesXQ",
	  "float-xl-left": "NdoDqufGzvhCP0EH2XO4k",
	  "float-xl-right": "JfqqctScQL7hOTG70hjpa",
	  "float-xl-none": "U1pUOcS3ez7Kiotd9MM8R",
	  "fixed-top": "_2L3E_983rio0-fbrxs5A18",
	  "fixed-bottom": "_-KBKydaMhyR1Khw80qsyk",
	  "sticky-top": "_2ajVNb4YxYz9awGgEjrEo3",
	  "sr-only": "_2XK0qGrE4zp1KDkiBq7SB7",
	  "sr-only-focusable": "_1RlnkMo6Hxxyyp81GSvKQ0",
	  "w-25": "_3gZwz3mnn5epxohDJn-dzq",
	  "w-50": "Ln5IhF9Zu_wmt7hpQ6Alo",
	  "w-75": "dlTpAF3_2N8MgAuwEabms",
	  "w-100": "_3JnlKBsN07iS8Aa3fsD2hg",
	  "h-25": "_14QElMvCfb-16nis-KBssL",
	  "h-50": "_1qGjomifIznHcMdUgKqtTj",
	  "h-75": "_1QQHREsIIB4AWj4uN_Any9",
	  "h-100": "_9APKJzDDs7MvW2wN6NfG5",
	  "mw-100": "_2K_Wab1wCWuFwhnR4BofPH",
	  "mh-100": "_1YF8phMnw8AGGLnbrC6sNz",
	  "m-0": "_1OoUFtRBkaqXH6WwUqn8GR",
	  "mt-0": "_3K0JBkoSxoL6CqCfz3kWff",
	  "mr-0": "_2YLVnYEXQ1TSPGQciirfu-",
	  "mb-0": "T7pEnRHi6zBVU6eqwiYhI",
	  "ml-0": "_1-olL0pbWFUh7i1nXKi5x-",
	  "mx-0": "_2IMEX7PTWB34fcKM2JKx4D",
	  "my-0": "_2_KK-9s-2dNxZ4REtEmgxH",
	  "m-1": "_2kn4WcvCg0qK-99r0ip5TD",
	  "mt-1": "_2Y3bu2vS-sx1RPi62NG11Q",
	  "mr-1": "_14kPM7iF8jigq3AT7-pwSY",
	  "mb-1": "_35-XFvmGdDx9LMhU0TS-_A",
	  "ml-1": "_1ozqMwBebnNPIqYKnzpfpm",
	  "mx-1": "ZahZk4O11LmRmi4HR3TDW",
	  "my-1": "_2HWvg0Ch_YkbAKwR65vHhr",
	  "m-2": "_1Ly8RHodTydKFid_gw9FA6",
	  "mt-2": "_3M0Qm0jH-bGDtiw4azrcEs",
	  "mr-2": "_3q8NGT2sn7wqciBFfau-am",
	  "mb-2": "_3x0SwWEwVyz-ZdyyXQVv9o",
	  "ml-2": "_2gPQFbmXYxv_VRUctH5iUQ",
	  "mx-2": "kyCTDP6JPy_BWbgxHUtO2",
	  "my-2": "_2LmpnBQIUrrMo3jCdnGFi7",
	  "m-3": "_2uXrKjbQGT-yh6db6u_cu6",
	  "mt-3": "_1EWAVu4hYejSOJtPrBX20b",
	  "mr-3": "_2zLHTrCH2RfJNpH2k4QCts",
	  "mb-3": "_2Q_yIyRYGr17EwWja00nnD",
	  "ml-3": "_3rgD2TBRW9zk0mKBxkR-PP",
	  "mx-3": "_3fPce8IWIeNVmWs07JuIwq",
	  "my-3": "_1HAnCpXbl65ylZQdect4bz",
	  "m-4": "_3taoNOeWkCaL6mGEKrUuec",
	  "mt-4": "_28tQTeXD_THPkwZf4r_FfS",
	  "mr-4": "Rcp32YhgZgIFcqRbic2aB",
	  "mb-4": "_13lfDlE0CyMDtTd_BVhurO",
	  "ml-4": "_2icJAOWRXufwHUQ8gYJ7sp",
	  "mx-4": "_2Tbz1kDrL2BoaxYDdhJ0vF",
	  "my-4": "_2Z5t6V1mjfdQAM5AK4RMID",
	  "m-5": "aIygUbL1dP4puIa3-wG2l",
	  "mt-5": "P1S8HamODxw5De4-yX_og",
	  "mr-5": "_2_Eaq1WPsvqYvVf-n14_lm",
	  "mb-5": "_3F_8-urcZLOoHce79iets3",
	  "ml-5": "Mmi0qUNoctpnFiLJ8aNcf",
	  "mx-5": "S1dmCrtSbP2VkAlX_5zdH",
	  "my-5": "_35I6gyRkOGacc26b9O_bcU",
	  "p-0": "_3vVLxuprFc2Ikxff6tT0KC",
	  "pt-0": "_3aKHo1rX0Snl9_2gVKkAwQ",
	  "pr-0": "_1cK-6ABGYYxYq78omYJXkw",
	  "pb-0": "yt8Ld8xrO8OuEOjDTcOHL",
	  "pl-0": "_1dnaVR0pgyEqLRh0qXYidG",
	  "px-0": "_3Q1f7HSxANSeWXMmXC2t5B",
	  "py-0": "_3v3FDH3vBX_FJ1N1zULnCd",
	  "p-1": "TPbnQK3Q-Yj9w8-fwmmpL",
	  "pt-1": "_1vuYvMiuFrj9_HuNmU-Fa6",
	  "pr-1": "_3XNmgAHXs1fvUIYJHkq5Ij",
	  "pb-1": "_1U4iZeBqCFo9lP3G62aso-",
	  "pl-1": "gZmul6uIEbRt1ogFH1HSU",
	  "px-1": "qckN1INA2IJxa3KgBJbxW",
	  "py-1": "_3yPrqtNd-RMb08y32NODRB",
	  "p-2": "h3ReVbBr4PGhIXmCRPVMR",
	  "pt-2": "_1Y8oPBhdbKNqrPA92unbz1",
	  "pr-2": "_2_Fz6wVruO-WdO9CNSFsZk",
	  "pb-2": "_3qvzGgueZH0juQgl8F03E-",
	  "pl-2": "_2tSNFMmIvzm63_x8FLS43E",
	  "px-2": "_2ONIfeZvHd8xc_TJ4rwHC",
	  "py-2": "u7_gBNzGA4Si0b4cVAa_U",
	  "p-3": "wVKGPresXxH6m9-5i26w-",
	  "pt-3": "_107OqsC8nt5nf-iA-V-dIz",
	  "pr-3": "_3BWcwEOUm2ki1WtngAv1ts",
	  "pb-3": "_3sYDZ0R0LScSYTgnHd9YV7",
	  "pl-3": "_2BYDOns1nFbPJR4ukqH6DA",
	  "px-3": "_3V-8RP8iuEu7ZUeqy5NayS",
	  "py-3": "_1mppcrSjaVuS1m9FtjNgGe",
	  "p-4": "_2K93WLAAr69JC0_iQR2jWO",
	  "pt-4": "seFZjWt0Q4k111SJQDjDL",
	  "pr-4": "_2QKvv6cgRTY1ESEJ2bpn3Z",
	  "pb-4": "nlpOwGWxtZlhfrU2ZhZUL",
	  "pl-4": "_1y62K_hs1jhJRo9Mfk1H4P",
	  "px-4": "_31YPI54RILfZlnuUJhQ1u3",
	  "py-4": "ZwI6zac4qPPuyYGOrLYW-",
	  "p-5": "YjMxzQeP8WAPQHi3hv755",
	  "pt-5": "_2Nk7dQd8HhAitg_FRu9VrP",
	  "pr-5": "G_wq_1KKaoeZbl4eLq6vg",
	  "pb-5": "q0m8pUbsCwNZHKePBqoJx",
	  "pl-5": "_1TPDi0-_HY991cSVO0dYIS",
	  "px-5": "_1cjxMGTImijC66e8GtOLC4",
	  "py-5": "_1ZKK_Lp4DZLxpNLjdKd1YY",
	  "m-auto": "_98ZRLS95MZ1_tyKmCt4Oe",
	  "mt-auto": "_22SPxb0Wo4BhMx8hRidsb",
	  "mr-auto": "_31-FKrVyEjkdvcLc7lW62J",
	  "mb-auto": "_32plcjPkg5SJ0MR1G4IMoz",
	  "ml-auto": "_3UaspD9X4z_4GiFf0UWvhy",
	  "mx-auto": "_1zw3mpi9XBc-v92thb5Cqd",
	  "my-auto": "_1aRRDZLqAjY0zV04tKydKK",
	  "m-sm-0": "_3IiiMTomBDsbP3y_W5ixN4",
	  "mt-sm-0": "_2lxGvXIxy9iRkkyo6t3AtG",
	  "mr-sm-0": "_1ySD2Xhwxlwe4uJTI_Nebp",
	  "mb-sm-0": "NUbfiO-TGWuUEWf4IxmT_",
	  "ml-sm-0": "C2QLceTe8ZuyF_RyZWHjL",
	  "mx-sm-0": "_2IrbfZ8xXcsRBasHjdJLvf",
	  "my-sm-0": "_1YMPUj736aDQp9NtIw2Fnd",
	  "m-sm-1": "_28_omt7uP1RINDZlsamEQl",
	  "mt-sm-1": "cXY3lPRAyO0uhsVIhmjH4",
	  "mr-sm-1": "_2VXrliGlwGWgs6C6wb5mXy",
	  "mb-sm-1": "_7awxblhaukj_I_SpJ9af8",
	  "ml-sm-1": "_25GwC2XBuHI42FxaCgMwLa",
	  "mx-sm-1": "_3iZFYk9Amts-ymkHKCh5IB",
	  "my-sm-1": "kFGpG1viZy4T3707nRk93",
	  "m-sm-2": "_1vuNhhCKSsmFqHw7qtqJFP",
	  "mt-sm-2": "_1-MXeSl1qT9sncPrMUCXEJ",
	  "mr-sm-2": "_3UOQBVrNtnBii1Io8iySpV",
	  "mb-sm-2": "ZbWXHHIyD89qQ5YonHM0o",
	  "ml-sm-2": "NIZ5EPI6Dy40I-zJguxKQ",
	  "mx-sm-2": "_2BxRk8C1dfZRCeiFvRrUsx",
	  "my-sm-2": "_4rbgwi4oYyIMrIJbu2W3d",
	  "m-sm-3": "_3UI6WQHHZAxyk22_4fbtkP",
	  "mt-sm-3": "_18tFdboQRjytWhOH21ufLO",
	  "mr-sm-3": "U3Js9R4btVHTp0oK7NhD0",
	  "mb-sm-3": "_31NFY9EHUxKMOOq1gUtF1P",
	  "ml-sm-3": "_36Fyy957_H5oZRZfaKWWS7",
	  "mx-sm-3": "_3J5tcG4aMe-eKWR373GDil",
	  "my-sm-3": "GkVLPDyapX1Ee54N-XdO1",
	  "m-sm-4": "_3YHw4-KJpjEwTMejHYmHrK",
	  "mt-sm-4": "_2ItORmhKl0FwdHYBw4yIQc",
	  "mr-sm-4": "G7yfIW-YxO6VJwh-IS2jc",
	  "mb-sm-4": "_3AXgOZVW_IOi_lkbsh4SUP",
	  "ml-sm-4": "_3RzZx3xUk3tuD-B9sStOum",
	  "mx-sm-4": "HQ5CjQW84VlR61kPZU2mp",
	  "my-sm-4": "_2jw3ZF7q17W8oX5aPOcYzC",
	  "m-sm-5": "_2cXTgkqQzLL_EUwdHCdFcY",
	  "mt-sm-5": "_35HFVC_hZlXtLSl_f849hX",
	  "mr-sm-5": "_3FY-m7bM_2HQAAROtX08ra",
	  "mb-sm-5": "_1UDCoXZkQfOSAWFIxTa8MH",
	  "ml-sm-5": "_2rSlc9IC7J5SYq1BNFNqxO",
	  "mx-sm-5": "_3rW_Vbv_vL9Nmh12Ot3OIr",
	  "my-sm-5": "kM-CdcQu02DI6cY1TyiNG",
	  "p-sm-0": "_1AmdzKvr4GBLso7U65NRbx",
	  "pt-sm-0": "_3xsHgl6_BDCEitWdQ3wmtP",
	  "pr-sm-0": "_2p9XoaAQpR2FPZ4DxhqYAI",
	  "pb-sm-0": "_24PFuZxCX_V5XiYdtfDbwA",
	  "pl-sm-0": "_58wugdHz7_2Zz3ashaoJJ",
	  "px-sm-0": "_3YDo3UOPvBmnLyv_jSoBLq",
	  "py-sm-0": "_167IULFVjFtVpA7kbfzibL",
	  "p-sm-1": "_1zHPDTsoPqZjLgg2UVhEgq",
	  "pt-sm-1": "_3jhQYQPIJY5e261oCUN3lS",
	  "pr-sm-1": "_3rqqlvWzrZx4G-FQOaW-C1",
	  "pb-sm-1": "_2ifYro7zQS1gAXfyO9G1vo",
	  "pl-sm-1": "mbHoohUE_ofMDQcbl1v6Q",
	  "px-sm-1": "_1A1_MNYmbEiRN89qacIuso",
	  "py-sm-1": "_1z6vp2wgaQsk6JvybFWt-Y",
	  "p-sm-2": "_1r0lzF21CD1PAaWryei05E",
	  "pt-sm-2": "_3X8kvMOd-BVYX6a-viJZlw",
	  "pr-sm-2": "_2I5rSJTNemq7NA1c5YbDF3",
	  "pb-sm-2": "_1zvcVcVgUqHzQGIi9jqZIl",
	  "pl-sm-2": "QrhJ_9ltW1nEZWo8CjjjN",
	  "px-sm-2": "_1EVCWz240ILEwMgFrKeYpd",
	  "py-sm-2": "_1o8hyyr875MKG0-kN8DT3r",
	  "p-sm-3": "EmfoyONc4lw-dHdMjUk_d",
	  "pt-sm-3": "IzFRWTHLeuQs8DfPVRYfc",
	  "pr-sm-3": "y8ozoQTwp8LsprG2CFEjW",
	  "pb-sm-3": "_aBif83ChoG1v_tsSLkaE",
	  "pl-sm-3": "MLl6tXo-y_yert8dMQnJk",
	  "px-sm-3": "_2x27v3qqwraVnuiFg4WDQC",
	  "py-sm-3": "_1FNkM2eOcxidR2Q2MO2qoI",
	  "p-sm-4": "_32EmLYOOO6j6tCcJclIuuu",
	  "pt-sm-4": "_3Wln2KnMpM1gPRA7TQ785A",
	  "pr-sm-4": "_1_eS6o484lszGcEb3o9H0h",
	  "pb-sm-4": "_-LnD5pplKf6-DCcqHr41j",
	  "pl-sm-4": "_2JIokcDxvHYlMBLWOa4Iv9",
	  "px-sm-4": "_1KvG8H7mZTmDU5lAiYYSqF",
	  "py-sm-4": "_3XFGDMT6hic2h7p_TqVWMb",
	  "p-sm-5": "_37ya1u_ooJlObuwnwQdiJX",
	  "pt-sm-5": "_13UyrfTB4ekFRwMDDKjDf8",
	  "pr-sm-5": "VN0_-tbuWYAmHH4ocL-50",
	  "pb-sm-5": "_4uJzt9Q0hHyrkEul8LNqJ",
	  "pl-sm-5": "rGpgDF6h7Sebyw8Y4_in9",
	  "px-sm-5": "_6tubAurriQLn-FQEtLJBt",
	  "py-sm-5": "_3ig4BVU4j2n3DnrrwUROBE",
	  "m-sm-auto": "cBXN5HiTg4FSTkBBiBi-S",
	  "mt-sm-auto": "_3UJRNYAsyqkdfwB9dI7SRX",
	  "mr-sm-auto": "_2WZUOz8h3c8u3A_tS4_Okc",
	  "mb-sm-auto": "_2HXr5lKadyCiwx9ku15Y3I",
	  "ml-sm-auto": "_3IC21ENPm4PB2X_cjmBlXO",
	  "mx-sm-auto": "_3fS6jJWcofpSrAEYO1EyCe",
	  "my-sm-auto": "SIgGsXuaMTv5ZyHlSzWVq",
	  "m-md-0": "_3NiQLsdfYs5Y2yIiT6fQ5W",
	  "mt-md-0": "_3vjHTp8D2u4ou2gDgRZYmu",
	  "mr-md-0": "lV8Yi3Hhs6J3JBIZtFVaf",
	  "mb-md-0": "_1YVk4SP9E38_KeAAB3sJAT",
	  "ml-md-0": "_1ia-07ZhYUMb64-PVv5Ukj",
	  "mx-md-0": "_2JFusaYoMugFAV-DflNWlh",
	  "my-md-0": "_1-9tabRvAjVraEYznQb9o9",
	  "m-md-1": "QfMltFAHJJuXpWH9XTAch",
	  "mt-md-1": "_3zZJmQGD6xC0WyY6h18M0G",
	  "mr-md-1": "_2KY7ajCbtb1thh11IHox2Y",
	  "mb-md-1": "_12hAZ8E-pgxMVrR9CVYRiY",
	  "ml-md-1": "PHGSBiTSfoWzglX126GsW",
	  "mx-md-1": "_2foDC8-P94ofl0WDS7UJfI",
	  "my-md-1": "tO4svpGKQqNaSNTI0Rko6",
	  "m-md-2": "_2sVuEQ9atcPoi1nDoF7lc4",
	  "mt-md-2": "_1HTFW7w4sDAQiiISMnFn9D",
	  "mr-md-2": "_1tz3G-3r5ogPiL94n84sM6",
	  "mb-md-2": "_2HEfIFZY7fIvEKQq5O7hVl",
	  "ml-md-2": "_2NI1UPsKs_DLtUiyKWCybl",
	  "mx-md-2": "WMG7Qc4lKIL2SQO7E7WmR",
	  "my-md-2": "_3kQ8fbSdEQpXn3qJotiJox",
	  "m-md-3": "YlyY7agHXi_xsVV2IeWw4",
	  "mt-md-3": "_34GTnObYg3z-DxgNkcQz4O",
	  "mr-md-3": "_1pt7cWVSKmxSmpapFJEc6",
	  "mb-md-3": "_1axa2u9YJ-fAmkdSz5rXwU",
	  "ml-md-3": "Hx05qJRRd0mJhobfYrcPu",
	  "mx-md-3": "_1RSe788YyTGlMCkghAUxRy",
	  "my-md-3": "qgeASpy-3tn-hc6DAYQTB",
	  "m-md-4": "_3A2aWe8NC92XvAtv0OpJM9",
	  "mt-md-4": "t0dcLILTwPiscxbLWFczT",
	  "mr-md-4": "LFvj6v1EB9pnXATI5jaGM",
	  "mb-md-4": "_3sWbU0GrG1U9d1UtBPZivr",
	  "ml-md-4": "_2OVkph2rsO7VSkSZKPySLI",
	  "mx-md-4": "_26hhrcc_FDaiQjG4F8WmWA",
	  "my-md-4": "_1aYYW5mbkbEhwkDtiH7u1e",
	  "m-md-5": "eTMwxRmUERimIU4qrLqDm",
	  "mt-md-5": "_1mySvp2FQCMAO0vEC_8Lci",
	  "mr-md-5": "_3jBzJTBgPQQg9pXDu08sRh",
	  "mb-md-5": "yzLG4FnkIv-XCKuStfwiU",
	  "ml-md-5": "bnSUl6n0brjJNvIMZgXw3",
	  "mx-md-5": "_24nlbxk3IxJp2TNpNWlwjb",
	  "my-md-5": "_1ABrY6hEAOXZ3jlpq3npAP",
	  "p-md-0": "_1JGH_mbwO3whReIv-xRBU8",
	  "pt-md-0": "_30xyhH4lXZeHBUzzB9Og4v",
	  "pr-md-0": "_14WnM_QEmqHzhSLLUOiB9F",
	  "pb-md-0": "_11LP3oOPBCbfYuxZY9gJLU",
	  "pl-md-0": "_2XyU8G4zj_I1k4eEhe_jzi",
	  "px-md-0": "_2RofoHtROedJ_nb62uLn1m",
	  "py-md-0": "_3uJAmuHFPfAIFDpc3QoPcL",
	  "p-md-1": "_2wtcRODVQFBb2mRjfcvPl9",
	  "pt-md-1": "ZjYovCUx_BkLxtLjAdr6c",
	  "pr-md-1": "_1ZGw5CLYuMWUAlvdc1M2av",
	  "pb-md-1": "_3OrydMl6EMZiDs-pWPehDR",
	  "pl-md-1": "_3YrT1IYO0xkpqKnHbzkrT7",
	  "px-md-1": "_2ZoNv8s0HL7mRNslxgoC_q",
	  "py-md-1": "_3b1aHRVqk6vTa2nebVxanF",
	  "p-md-2": "_2jHCxBWJSnkYcMv5ASe65x",
	  "pt-md-2": "_2Y_hsSBsePmf9fSjEleh9X",
	  "pr-md-2": "_1sYQLWgM_wHBt4ljrTu1GK",
	  "pb-md-2": "_1m1DX48xJVMczSTnHyz2oi",
	  "pl-md-2": "_2Q7yoga32uHaew2HACknbG",
	  "px-md-2": "_2IWKkmWy8NDnmZ_e5rs5Fu",
	  "py-md-2": "mza-oa8IGSrbLv6aQ1oPV",
	  "p-md-3": "_3OE2Qj6BIPowSDThW2pMAg",
	  "pt-md-3": "_1XXmUzfb09CIYldVZ7w5A-",
	  "pr-md-3": "_1sa4QHxXP5D4VaY7oGikOJ",
	  "pb-md-3": "_20qMZ_1Xbl-3IQSG3SGs3W",
	  "pl-md-3": "Wvym4ldDVJr9Mq0pKQZUo",
	  "px-md-3": "_3JH8PlcbalpyHUJVOG_HbI",
	  "py-md-3": "_3jO1LYsVe0r1E_dMZPqnR_",
	  "p-md-4": "_2k6lW5EI4rxJ5pbVpoVn-7",
	  "pt-md-4": "lvegqr9lGTn9r_3IbqQTG",
	  "pr-md-4": "N6xn0Iqs8JsfUwxMxUV8J",
	  "pb-md-4": "JLRcYnFQHAh2_2VtpJ9E7",
	  "pl-md-4": "_2uKQxSA0Z8FTz27Km8JWgY",
	  "px-md-4": "_2gztGe4dqmRD8Z8NlxkbN0",
	  "py-md-4": "_19xE1DsAXIVVAKxNZrutRX",
	  "p-md-5": "_2RvGnDAuwRpqB-Zwd2f5H9",
	  "pt-md-5": "ZKu6ebzPC-b6SGvafyISx",
	  "pr-md-5": "_1R6XZYlB-CjUqxQ55vSnnt",
	  "pb-md-5": "l7leZ926Duclq1wn_YBGv",
	  "pl-md-5": "_3Z3zJYqQFv21uR83QGh8GI",
	  "px-md-5": "_1XlRL4O6dXFcfbbkRJv-XI",
	  "py-md-5": "Y3z_tePqrm6XwIXNge_tM",
	  "m-md-auto": "_3T9eqtE6IiG09mGrUGtSzR",
	  "mt-md-auto": "_2lp8oTiyb64gwOVB2ciOMm",
	  "mr-md-auto": "_1Kw-W0sPXkD6hFtgCfOIjL",
	  "mb-md-auto": "_2ytmOKYLHxHcz9viM1YkLz",
	  "ml-md-auto": "_26Gt2RmIIgnKkEqhRxo_x5",
	  "mx-md-auto": "ciHEJmDjlv1-mogrzrJ7y",
	  "my-md-auto": "_1XYDci7MLjCzL45prjpgW6",
	  "m-lg-0": "Y6cPGXagpZ5Gjddk9HTMe",
	  "mt-lg-0": "_389aul9FKee1ggv0fwsJTq",
	  "mr-lg-0": "_2TsJFbkjI9TckEodJOOly0",
	  "mb-lg-0": "_2Y3IUX3cDeu01sKj2Rocg-",
	  "ml-lg-0": "_2oQgutqGD142i49vmtnXOu",
	  "mx-lg-0": "TYJh7DPKaJgbPGmJTPL6L",
	  "my-lg-0": "_3DV0r1RfNzL6lCHe04wbJI",
	  "m-lg-1": "_1ve0Jo-CJZLWEi1MXJYlrG",
	  "mt-lg-1": "_6eDG7GVsBW0abViIa3R5O",
	  "mr-lg-1": "_3h02bFYn7L6SHCiJ7cvKoL",
	  "mb-lg-1": "_1UxojTjXikr3QpfM36pL-0",
	  "ml-lg-1": "_1j-CAiZ8rG0jkXvAUAhw9w",
	  "mx-lg-1": "_2NBeElAkWexsytOZqFcjkQ",
	  "my-lg-1": "_1T1deCzV3saEpHfl7EQt4A",
	  "m-lg-2": "_1_yDgI4bmiswMUQ0N_1ykm",
	  "mt-lg-2": "_1wKfVz45oIETVnDE6AynON",
	  "mr-lg-2": "_3ABQ90aJH34_KiIblwSeIh",
	  "mb-lg-2": "_2NyQmCmT5VDIqXBZDUWutQ",
	  "ml-lg-2": "_1bl0TZ6H4ZyJR77H0YDq3T",
	  "mx-lg-2": "_3BIhpMGPeYLrwMQgGrE2aY",
	  "my-lg-2": "_3pZ5hmLE6qSQJGi-IdwzBT",
	  "m-lg-3": "_-rjzDMbd5KyERz51ic4bX",
	  "mt-lg-3": "C4qG4uYD22G7ut20x04Nx",
	  "mr-lg-3": "_1iH7gMgw7Vw1bm-iKspUM3",
	  "mb-lg-3": "_28_46g_sJ03Him2w-rKsH8",
	  "ml-lg-3": "dzDF4HOibGQMMyblMTAUz",
	  "mx-lg-3": "_15NxgyD0uRLpxyOyJfP6VH",
	  "my-lg-3": "_7pHkxvBWK-gnFaa0VyVm3",
	  "m-lg-4": "_3hXQvmiIzGieENRdI4wPh-",
	  "mt-lg-4": "_1s9g2nuGYA2oTFZAaTJP3K",
	  "mr-lg-4": "_1kUdos0UDzVsOnprzHYqth",
	  "mb-lg-4": "eA70uX7ZIQ2Z0ot7JL_P6",
	  "ml-lg-4": "_2yr_ADwSD_9ryBwC0QoXcH",
	  "mx-lg-4": "_26_HBroG9kieYh5HDHUcLn",
	  "my-lg-4": "_12P2msdPg4D4LggNNtMCYS",
	  "m-lg-5": "Brb_3abowfPsSKXq5MLeR",
	  "mt-lg-5": "_188myM9lj9U_O2QEj3GZ_l",
	  "mr-lg-5": "_3e8aa_VGB-XiSGD4l8EoXl",
	  "mb-lg-5": "_3Uq4bCPAvO5UnQG4I1vteD",
	  "ml-lg-5": "_2qy3Zavad0KIgIzhNpy4Zn",
	  "mx-lg-5": "agamUV7aq6J4nxhH5xO2l",
	  "my-lg-5": "_22jUAGq1OM2QIdlsz2bAvy",
	  "p-lg-0": "_1CMZ2AZkvgs7plR_ZYA3o0",
	  "pt-lg-0": "_24oYB9gbaeqXXaEjSqUO9f",
	  "pr-lg-0": "_2t49aE6he-af-SJoJdg-B-",
	  "pb-lg-0": "_1F3Fy5V_-7VwEanLbkDv23",
	  "pl-lg-0": "_3BYC3Wk6E5rkn1_7k9bMnw",
	  "px-lg-0": "_3GS8Ltm2iXV43jmv1RIZYq",
	  "py-lg-0": "FztZcR0VkRQY6M8l3wdwT",
	  "p-lg-1": "x4Fiedr38lsee9gHye3UM",
	  "pt-lg-1": "IoTvCpLzE8GJ0PqiEl_hQ",
	  "pr-lg-1": "OvfEZvn2syF_TCyTLYRyv",
	  "pb-lg-1": "_3-SVoToPowTJHHN_VvZ3sY",
	  "pl-lg-1": "vNt5qD24mG_WrunMnC7PJ",
	  "px-lg-1": "_10zCBmFl0G41Xsa0bk45L4",
	  "py-lg-1": "_1NOpP0G0mOj7QkBMoWCGNW",
	  "p-lg-2": "_3As_3b36j8EewXHx2e7lXB",
	  "pt-lg-2": "_3zT4Uzohq8OtWFipw6_KNL",
	  "pr-lg-2": "o2IM2wCh2SfKfbdOLLt-C",
	  "pb-lg-2": "_1fgDXETSpWT64wiPSQuGY2",
	  "pl-lg-2": "_2N12CEtY6oSej2YCxeUmEY",
	  "px-lg-2": "yGtiYNltoMq22Q6BxbHiE",
	  "py-lg-2": "_2TuTLn4erAz-jlEGpQdBkG",
	  "p-lg-3": "_1-2i-_oyTzpyW3C6nHEt-J",
	  "pt-lg-3": "_3BYEtVmESqzuBNP5O602al",
	  "pr-lg-3": "_1dDOEbNqPAUj5YxLJ2Bkuc",
	  "pb-lg-3": "pRE07qxJEffr8GdzndP20",
	  "pl-lg-3": "_3rJ8ocrvARAMuhoiwH6WS_",
	  "px-lg-3": "_2xe_3Jf-p_-cF1YO36Xd5j",
	  "py-lg-3": "_2uufjMQsk0Jr2jUDw3yLAr",
	  "p-lg-4": "_1dBMIGGD3Z-UGIlB_9d1d5",
	  "pt-lg-4": "_2bWBlI8NZZWTQn1vFZfERB",
	  "pr-lg-4": "Jzi1BbmJD5eGCikO3T5eL",
	  "pb-lg-4": "_2Hcw77bwOtGT7poX28Ol2M",
	  "pl-lg-4": "_3_7kxsMjDlvG9K5VnioXRD",
	  "px-lg-4": "_330bI6kW858KfU5w57IWIn",
	  "py-lg-4": "_2ajGLiwXuIfNWUfXvmjh7N",
	  "p-lg-5": "_2nAqlqi7gtDhzalQAt0ye2",
	  "pt-lg-5": "_1aQYHtCrpBbFwtBlaKarNM",
	  "pr-lg-5": "_6aFfjEzSmj1nU6vpcnl7j",
	  "pb-lg-5": "_2vBiSo1Yabx9cNuA78EHuC",
	  "pl-lg-5": "_3mhvKtbZUjxi3muKW7mj1N",
	  "px-lg-5": "F_84cGu76rFJ1V7RPx-xE",
	  "py-lg-5": "O6H2HpDui0Yo0YT3-VFhB",
	  "m-lg-auto": "_2VyrrF0bkvnjfBMacrhM8I",
	  "mt-lg-auto": "_3niqNWw4-aUu35Q-eIjJE0",
	  "mr-lg-auto": "_28jaWdcA9pYIo31tQrgYXg",
	  "mb-lg-auto": "_2F2fvk9rDnH-dN0la9aVZX",
	  "ml-lg-auto": "C1CBGVxB6iEOJi-r6Yhfw",
	  "mx-lg-auto": "_3_Gla52ozQz9HqS3GMI15b",
	  "my-lg-auto": "_1KvO1XxtHmrjsc_agL-ZcA",
	  "m-xl-0": "_1oqLJI2_-nyT-aHMoaJs_3",
	  "mt-xl-0": "_22r_YlZEX0xKicskrxZ3ZX",
	  "mr-xl-0": "_1EJL8YnEzXc_tfo5SzXHNN",
	  "mb-xl-0": "_1GBlByTjN1W21k3x9d01-m",
	  "ml-xl-0": "_2qX0SRrEN40g_QeEye9IFH",
	  "mx-xl-0": "_2ErbXNdUGFeVxD5S4mTYZl",
	  "my-xl-0": "_2cMv9t-k0ziBLOVUjg79FA",
	  "m-xl-1": "_19_ph88cD03pq5POP8xea5",
	  "mt-xl-1": "JMctDIBCkatpHifFzxg0Q",
	  "mr-xl-1": "_1jxjqk_tj146JTKXKqlgux",
	  "mb-xl-1": "RwrwKcyo31OgbqvX5e6dk",
	  "ml-xl-1": "_3kGE-8Hw0lN-JhHyWFm5Si",
	  "mx-xl-1": "_3PTGXkrzUSwswIumk-_OY0",
	  "my-xl-1": "_3OZuvYd9Gxi5C14VHOy5OB",
	  "m-xl-2": "_1sH3MAQza3LSdDKbTc7aDO",
	  "mt-xl-2": "_391UJV08zPbkt5xP3phWZ8",
	  "mr-xl-2": "_1TYzo0LvzUpzeHiG1IHqTl",
	  "mb-xl-2": "_19k-iOeOhzn4xtbH8A2LID",
	  "ml-xl-2": "_3f3-8Lb3D9RgJNGd0mJ9MU",
	  "mx-xl-2": "_12N28osTNCzamvySoao7uX",
	  "my-xl-2": "_goPKyX5fouZqKgNj-yrM",
	  "m-xl-3": "_3Z5aUKovkHP3agvP7fZ-R",
	  "mt-xl-3": "_2b3V8ZLlgxR2O8UcQEdu8X",
	  "mr-xl-3": "_2V6MEA90MTqPmszlc0Gkd7",
	  "mb-xl-3": "_2lhTp3DiZ1X4IFQw84-Vo7",
	  "ml-xl-3": "_2epRD0DxgF2djwNmF7DFCF",
	  "mx-xl-3": "_1DsKH9pxZ7bAHx0H1frxRp",
	  "my-xl-3": "_2WDCEbE1lsyikhi5Br33Gd",
	  "m-xl-4": "_1mKT6Cbh09xRtEeg8hY3mb",
	  "mt-xl-4": "_1jSogqB4DEFdwcDMxGgiLs",
	  "mr-xl-4": "ep60287_sruLsfekxQ9dJ",
	  "mb-xl-4": "JZPlxskdVATKI_TDzU2Ul",
	  "ml-xl-4": "_5aE9QjhuKZQ3cA6mK8BOx",
	  "mx-xl-4": "_2EUsJG-no8PZVcojIO3YXF",
	  "my-xl-4": "_2-KJOpAXDqGuWep3MJUu34",
	  "m-xl-5": "_3M9H23z_f53qN2r1i6g3Ed",
	  "mt-xl-5": "_22GxzX8ejH_nV4gm3coE8-",
	  "mr-xl-5": "_3wuo1XTvX2aqeH2eZQvLJJ",
	  "mb-xl-5": "_1hK7tgvFMsox7NeQlaSEcW",
	  "ml-xl-5": "_2TzSPJ-88lrk0e_6To-7OH",
	  "mx-xl-5": "_1BOW4CVo9otWVz5uKKb4GL",
	  "my-xl-5": "_33AkdKTSQ5fuKB1Mxd-5dy",
	  "p-xl-0": "_1tqXu3zMlU6QsQm94rRNo3",
	  "pt-xl-0": "RpFvvr9SGW_UOKtJl771X",
	  "pr-xl-0": "_2JWsrZTwS-LfdFe2Lkf4ur",
	  "pb-xl-0": "_2C76oPv8QPrntzDl4G0nBw",
	  "pl-xl-0": "g8uKwT7rTkp9L4RPQ9YKf",
	  "px-xl-0": "_2qOXsXdxqeuzhYEm56TdxP",
	  "py-xl-0": "_3QW0fM5zOQ8PYDPqPHEk-N",
	  "p-xl-1": "_3mwQdpIcP_cfiB0k0OKRfl",
	  "pt-xl-1": "_3L3NlVq-rB4tFtKzurtsCF",
	  "pr-xl-1": "hsxXAoz3eLnEaAT3wFIM6",
	  "pb-xl-1": "_39NOj65pd75XHqaAukGvKo",
	  "pl-xl-1": "_9BB2FD4q0AyMRJQhfLYXl",
	  "px-xl-1": "_1V8wVbmk7FhOTyu3UOLLBP",
	  "py-xl-1": "_2WvH9eMHNZsPtbNli_KvoU",
	  "p-xl-2": "_1yFhwXHI297Rml2V9ovUVN",
	  "pt-xl-2": "p9AmUZbxGZRACewHF1xZv",
	  "pr-xl-2": "bS_r5tDBIjPfehypOmJMa",
	  "pb-xl-2": "_1sIb7oX7EUaPISg46xQFWx",
	  "pl-xl-2": "_20L1bEHavLOFEAESuo-Gc7",
	  "px-xl-2": "_284B4fyCSe387hEE39v0bU",
	  "py-xl-2": "_2pcbtBDaAoJBmHyEhXKT70",
	  "p-xl-3": "_2Lpn4X-DatumfzRmReA771",
	  "pt-xl-3": "_1-q0PA6OTkd8zr4NcPsST1",
	  "pr-xl-3": "_1p7IRKC3EtBaHsy-QPQuN6",
	  "pb-xl-3": "_1Pj-Ch5gTiL1AFGQxzPegw",
	  "pl-xl-3": "_3EwmlZloFCyTvJtq2dOpzi",
	  "px-xl-3": "_1dnENLf8DITaCSITmh9X84",
	  "py-xl-3": "ip2kdOEm4RzNhN_ZU5HiN",
	  "p-xl-4": "_rFB782NLC55uAtZBIsnM",
	  "pt-xl-4": "_3rXdhFjko5DFYcEQfVeU5w",
	  "pr-xl-4": "_1mYk09t3YPIrMqGE9rS83Y",
	  "pb-xl-4": "_1ymBKzOg6Y-j37X5vzgetr",
	  "pl-xl-4": "b-HdTlloHqhplkedUlp5M",
	  "px-xl-4": "_1ECCaimzlCLiWytj7QKLSc",
	  "py-xl-4": "_39ohtEaa5GrpoCLrYRdXDz",
	  "p-xl-5": "K8Y7CH1T0uJqG4mA8p4Ly",
	  "pt-xl-5": "_30ZW25C9pdPQtwy8_XZ3NK",
	  "pr-xl-5": "_2EDhNmKVhhCWN4vkE6aXgR",
	  "pb-xl-5": "_2_Hfh6YiB7uWuiPxOHjXhd",
	  "pl-xl-5": "_2gudbxMO3303aL1ka-15JT",
	  "px-xl-5": "_-ifRqxRub3UE38b1CJGey",
	  "py-xl-5": "tIZL_QztXtnsTthFXrjn4",
	  "m-xl-auto": "_87oHRF1LIKZc1OcZkC9gW",
	  "mt-xl-auto": "_1ONyw7iVES7-4t9aaJpLCb",
	  "mr-xl-auto": "_1UShs1aSu9J2fkf7rm0gPU",
	  "mb-xl-auto": "_3ES0O0KUeo9E7IXl2nSf2P",
	  "ml-xl-auto": "_204OxzdlJp3C9NYu8V5OzU",
	  "mx-xl-auto": "abE1BuHS3QgjkdcgEiNKu",
	  "my-xl-auto": "riSpmY_KXzkXuNAMq0uoy",
	  "text-justify": "_2D3yY27T8eE5_9OIKjr-sK",
	  "text-nowrap": "_1VMNwTbCaUXu0IxlthFeJA",
	  "text-truncate": "_2D7M7zThqiKa3AZX6trGzi",
	  "text-left": "pXiHdg99vHvy53MfajGUA",
	  "text-right": "_3_zAp97Y-K39EjCpK3674R",
	  "text-center": "_29br5OpYAd5et32gUA13If",
	  "text-sm-left": "tV17lDSVOauMQ_tLGVMMN",
	  "text-sm-right": "_996FwddtOk5Ojguqn_L5G",
	  "text-sm-center": "_3GXQareBETi9lZfpFSY5S5",
	  "text-md-left": "_2cluIJA0miAtzzewN39AQl",
	  "text-md-right": "H6skckZbGPlwkNbV8sI4R",
	  "text-md-center": "_2lWgErqqILeIPo7R9nmXc3",
	  "text-lg-left": "jh-SGkXMcqorRM963grFN",
	  "text-lg-right": "_1Yl7RObtzJXPfk3wtZN2tS",
	  "text-lg-center": "rwxOyUtrz8U9zUO68dX0w",
	  "text-xl-left": "_1TvkxZ1QwJ8l0zqfA9V9Ni",
	  "text-xl-right": "_1yMI8-Ua2UMdvbfwIMQwkp",
	  "text-xl-center": "amJB-xX__7JUDCvE4QUXI",
	  "text-lowercase": "_1YDu-KC0bz-RNc4NTo-KYY",
	  "text-uppercase": "_1_RbIKwz-qg6koOmrdtpL3",
	  "text-capitalize": "_1JY-bu3XIVCr-iMSAP_RgA",
	  "font-weight-normal": "oHoRh9bGmQ49GmtcQfoKP",
	  "font-weight-bold": "_2vgw1iwk_fpPExYHWG4dJ7",
	  "font-italic": "_14hNcrzJyIH5yA5dkgWQcV",
	  "text-white": "_6J9VjUf9cQW_vkOPETamj",
	  "text-primary": "_17SIuAx2XQVGGjoYXB7IbE",
	  "text-secondary": "MMYnwQZW7p9bMgGWZlbVh",
	  "text-success": "_3j1SL08dfB60vIx9kUV1IX",
	  "text-info": "_3aE9AcaW_6zHmrjObQpyjm",
	  "text-warning": "_2RtEkTUprRVqK5B1U5y8fw",
	  "text-danger": "_38HU1iygbzVgQBiGaRp670",
	  "text-light": "_2xkgAEXmOASL9PguFrM0Aa",
	  "text-dark": "_3oImjiXvPscsQG9U1l_9lb",
	  "text-muted": "tKcbi8VLJTzKmbEka0P3w",
	  "text-hide": "_1nn5I-JZupmJb-XV7lWq7c",
	  "visible": "_3c6KJ7YIL_L5XmK6kejWcF",
	  "invisible": "_2dJR8J6aJNzPk5CQC7Lkig"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(33);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(35);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(34);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _reactRouter = __webpack_require__(1);
	
	var _AppActions = __webpack_require__(10);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(10);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(57);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(59);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(58);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 34 */
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
	  "footer": "VcOpqpy2XU2b_JTzupKVI"
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
/* 35 */
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
	  "header": "_2ZonzTl6PwixcY3dt2yP9R",
	  "content": "_2lSSlVIff7Iimsdim5W6C6",
	  "site-title": "_2v4Hbt9QQYsRfSgIQk-h3R",
	  "add-post-button": "_2JxWHXpUGV1TfaIuHwrgFH",
	  "language-switcher": "n9VOJctEe97XzorD4MOqO",
	  "selected": "_3o0mJe4jJ_mdOBCAnaRM74"
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
/* 36 */
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
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _main = {
		"navbar": "_2aXI3IH2eg-C0aIKfCdejx",
		"sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
		"page": "_2ktgjvjUMrQEX-V53L9iF5",
		"Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
		"appName": "_3arYrjQ92KyA1KR4ilPof1",
		"userHeader": "jyljJHM6wmPfb9oPZTKhF",
		"userTitle": "_49F3_y6BUMJmHdLW0IzT6",
		"user": "_63aB0XTpw63wDeid5YSUc",
		"input": "_2i7-svTP9PWSyZ2eVORVRD",
		"underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
		"btn": "_1ECxb9PQiGXJg8csYJ1X3_",
		"form": "_2md9N0H60PEFjiPsRJE4Sg",
		"optionsContainer": "_1blwB7MRt1habHocbK7FoT",
		"courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
		"courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
		"courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
		"welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
		"instructorPic": "BOn_fyh1yo98YHWW3cetI",
		"instructorName": "_1iyysdkDqd7s4v87YSEse_",
		"formContainer": "_1VAAxG30J95_S4WJBPGPi_",
		"instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
		"instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
		"instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
		"instCourseList": "lyYlij_ZuLiDcimdZoE6g",
		"courseNum": "_243l6sKp5AOt34yZsGzVnc",
		"courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Import Style
	
	
	exports.CourseOverview = CourseOverview;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _CourseGrid = __webpack_require__(11);
	
	var _CourseGrid2 = _interopRequireDefault(_CourseGrid);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {}, void 0, _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, 'UNB Attendance Service')), _jsx(_reactBootstrap.Nav, {}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Instructor Home'), _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Other thing')), _jsx(_reactBootstrap.Nav, {
	  pullRight: true
	}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/'
	}, void 0, 'Log out'))));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/instructor_courses'
	}, void 0, 'Courses');
	
	var _ref3 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref4 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref5 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref6 = _jsx(_CourseGrid2.default, {});
	
	var _ref7 = _jsx('table', {
	  id: 'students',
	  align: 'right'
	}, void 0, _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Students')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Tony')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Shiv')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Tristen')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Jean-Marc')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Justin')), _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'Jacob')));
	
	function CourseOverview(props) {
	
	  return _jsx('div', {}, void 0, _ref, _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref2, _ref3, _ref4, _ref5), _jsx('div', {
	    className: _main2.default.courseGrid
	  }, void 0, _ref6, _ref7));
	}
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CourseOverview);

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
	
	
	exports.CreateCourse = CreateCourse;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _reactIconsKit = __webpack_require__(56);
	
	var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {}, void 0, _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, 'UNB Attendance Service')), _jsx(_reactBootstrap.Nav, {}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Instructor Home'), _jsx(_reactBootstrap.NavItem, {
	  href: '/instructor_home'
	}, void 0, 'Other thing')), _jsx(_reactBootstrap.Nav, {
	  pullRight: true
	}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/'
	}, void 0, 'Log out'))));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/instructor_courses'
	}, void 0, 'Courses');
	
	var _ref3 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref4 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref5 = _jsx('a', {
	  href: '#'
	}, void 0, 'Nothing');
	
	var _ref6 = _jsx(_reactBootstrap.Form, {
	  horizontal: true
	}, void 0, _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Course Name'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter course name'
	}))), _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Professor Name'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter course instructor name'
	}))), _jsx(_reactBootstrap.FormGroup, {
	  controlId: 'formHorizontalEmail'
	}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Institution'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter name of the institution'
	}))), _jsx(_reactBootstrap.FormGroup, {
	  controlId: 'formHorizontalEmail'
	}, void 0, _jsx(_reactBootstrap.Col, {
	  componentClass: _reactBootstrap.ControlLabel,
	  sm: 2
	}, void 0, 'Location'), _jsx(_reactBootstrap.Col, {
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.FormControl, {
	  type: 'text',
	  placeholder: 'Enter location of the institution'
	}))), _jsx(_reactBootstrap.FormGroup, {}, void 0, _jsx(_reactBootstrap.Col, {
	  smOffset: 2,
	  sm: 10
	}, void 0, _jsx(_reactBootstrap.Button, {
	  type: 'submit'
	}, void 0, 'Create'))));
	
	function CreateCourse(props) {
	  return _jsx('div', {}, void 0, _ref, _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref2, _ref3, _ref4, _ref5), _jsx('div', {
	    className: _main2.default.formContainer
	  }, void 0, _ref6));
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateCourse);

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
	
	
	exports.InstructorCourseList = InstructorCourseList;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _edit = __webpack_require__(8);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
	
	var _ref9 = _jsx('tr', {}, void 0, _jsx('a', {
	  href: '/course_overview'
	}, void 0, _jsx('td', {}, void 0, 'SWE4103')), _jsx('td', {}, void 0, 'Software Quality and Project Management'));
	
	var _ref10 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'CS3413'), _jsx('td', {}, void 0, 'Operating System I'));
	
	var _ref11 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'ECE3221'), _jsx('td', {}, void 0, 'Computer Organization'));
	
	var _ref12 = _jsx('tr', {}, void 0, _jsx('td', {}, void 0, 'SWE4040'), _jsx('td', {}, void 0, 'Software Engineering Design Project'));
	
	function InstructorCourseList(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {
	    style: { marginBottom: '0' }
	  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref4, _ref5, _ref6, _ref7), _jsx('div', {
	    className: _main2.default.instructorCourseContainer
	  }, void 0, _jsx('div', {
	    className: _main2.default.instCourseHeader
	  }, void 0, _ref8), _jsx('div', {
	    className: _main2.default.instCourseListContainer
	  }, void 0, _jsx('table', {
	    className: _main2.default.instCourseList
	  }, void 0, _jsx('tr', {}, void 0, _jsx('td', {
	    className: _main2.default.courseNum
	  }, void 0, 'Course Number'), _jsx('td', {
	    className: _main2.default.courseName
	  }, void 0, 'Course Name')), _ref9, _ref10, _ref11, _ref12))));
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(InstructorCourseList);

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
	
	
	exports.Login = Login;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
	  }), _jsx('button', {
	    className: _main2.default.btn,
	    onClick: submit
	  }, void 0, ' Submit '))), _jsx('div', {
	    className: _main2.default.underBar
	  }, void 0, _ref))));
	}
	
	function submit() {
	  var user = document.getElementById("username").value;
	  var pass = document.getElementById("password").value;
	
	  var req = new XMLHttpRequest();
	
	  var params = '{"username":"' + user + '", "password":"' + pass + '"}';
	
	  req.open("POST", "api/login");
	  req.setRequestHeader("Content-type", "application/json");
	  //req.setRequestHeader("Cookie", "sessionID=22f5832147f5650c6a1a999fbd97695d");
	  document.cookie = "sessionID=22f5832147f5650c6a1a999fbd97695d";
	
	  req.onreadystatechange = function () {
	    if (req.readyState == 4 && req.status == 200) {
	      var serverResponse = JSON.parse(req.responseText);
	      document.cookie = "isAdmin=" + serverResponse.isAdmin + "";
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
/* 41 */
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
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
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
	    className: _main2.default.input,
	    type: 'email',
	    name: 'Email',
	    id: 'email',
	    placeholder: 'Your Email'
	  }), _jsx('button', {
	    className: _main2.default.btn
	  }, void 0, 'Register'))), _jsx('div', {
	    className: _main2.default.underBar
	  }, void 0, _ref))));
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Signup);

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
	
	
	exports.RegisterCourse = RegisterCourse;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _main = {
	    "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	    "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	    "page": "_2ktgjvjUMrQEX-V53L9iF5",
	    "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	    "appName": "_3arYrjQ92KyA1KR4ilPof1",
	    "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	    "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	    "user": "_63aB0XTpw63wDeid5YSUc",
	    "input": "_2i7-svTP9PWSyZ2eVORVRD",
	    "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	    "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	    "form": "_2md9N0H60PEFjiPsRJE4Sg",
	    "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	    "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	    "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	    "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	    "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	    "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	    "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	    "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	    "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	    "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	    "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	    "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	    "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	    "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('input', {
	    type: 'text',
	    id: 'searchInput',
	    name: 'search',
	    placeholder: 'Serach..'
	});
	
	var _ref3 = _jsx('p', {
	    id: 'searchOutput'
	});
	
	var _ref4 = _jsx('ul', {
	    'class': 'myUL'
	}, void 0);
	
	function RegisterCourse(props) {
	    return _jsx('div', {
	        className: _main2.default.optionsContainer
	    }, void 0, _ref, _ref2, _ref3, _ref4);
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
	            count = count - 1;
	        }
	    }
	
	    for (i = 0; i < match.length; i++) {
	        var li = "<li>" + match[i] + "</li>";
	        document.getElementById("myUL").appendChild(li);
	    }
	
	    var text1 = document.getElementById("searchOutput");
	    var text2 = document.createTextNode("You have " + count + " matching courses!");
	    text1.appendChild(text2);
	}
	
	var _ref2 = _jsx('button', {
	    onClick: myfunction
	}, void 0, 'search!');
	
	function mapStateToProps(state, props) {
	    return {
	        //post: getPost(state, props.params.cuid),
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegisterCourse);

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
	
	
	exports.StudentHome = StudentHome;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(4);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _edit = __webpack_require__(8);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _main = {
	  "navbar": "_2aXI3IH2eg-C0aIKfCdejx",
	  "sidenav": "_3K37_eAT-lJK1xVk8uUKDs",
	  "page": "_2ktgjvjUMrQEX-V53L9iF5",
	  "Container": "_1FlWrN-yA4ekL9R7Io7Ssa",
	  "appName": "_3arYrjQ92KyA1KR4ilPof1",
	  "userHeader": "jyljJHM6wmPfb9oPZTKhF",
	  "userTitle": "_49F3_y6BUMJmHdLW0IzT6",
	  "user": "_63aB0XTpw63wDeid5YSUc",
	  "input": "_2i7-svTP9PWSyZ2eVORVRD",
	  "underBar": "_2DwgW8d2bn4M1e7AbWFsr2",
	  "btn": "_1ECxb9PQiGXJg8csYJ1X3_",
	  "form": "_2md9N0H60PEFjiPsRJE4Sg",
	  "optionsContainer": "_1blwB7MRt1habHocbK7FoT",
	  "courseGridCell": "_3EYthg0Rvei4EgFKYsp5Tb",
	  "courseGridCellClicked": "_2CoLTTuBHxKDMK0r4hf_-P",
	  "courseGrid": "_2rgpp3c5tEcTI27wX1fWoM",
	  "welcomeContainer": "_2OG8alJoYofDFmE9bJtMv1",
	  "instructorPic": "BOn_fyh1yo98YHWW3cetI",
	  "instructorName": "_1iyysdkDqd7s4v87YSEse_",
	  "formContainer": "_1VAAxG30J95_S4WJBPGPi_",
	  "instructorCourseContainer": "vzP5iIqY7JhKkiQmKCerW",
	  "instCourseHeader": "fi5Anad0FnKtxhwN_Y0t5",
	  "instCourseListContainer": "_33CP3wLzu2BneirToWU9Wm",
	  "instCourseList": "lyYlij_ZuLiDcimdZoE6g",
	  "courseNum": "_243l6sKp5AOt34yZsGzVnc",
	  "courseName": "_1nYp7sWzzHN-Rm_DewTbnL"
	};
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactBootstrap.Navbar.Header, {}, void 0, _jsx(_reactBootstrap.Navbar.Brand, {}, void 0, 'UNB Attendance Service'));
	
	var _ref2 = _jsx(_reactBootstrap.Nav, {}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '#'
	}, void 0, 'Student Home'), _jsx(_reactBootstrap.NavItem, {
	  href: '#'
	}, void 0, 'Other thing'));
	
	var _ref3 = _jsx(_reactBootstrap.Nav, {
	  pullRight: true
	}, void 0, _jsx(_reactBootstrap.NavItem, {
	  href: '/'
	}, void 0, 'Log out'));
	
	var _ref4 = _jsx('a', {
	  href: '#'
	}, void 0, 'About');
	
	var _ref5 = _jsx('a', {
	  href: '#'
	}, void 0, 'Services');
	
	var _ref6 = _jsx('a', {
	  href: '#'
	}, void 0, 'Clients');
	
	var _ref7 = _jsx('a', {
	  href: '#'
	}, void 0, 'Contact');
	
	var _ref8 = _jsx('h1', {}, void 0, 'This is a student page!');
	
	var _ref9 = _jsx(_reactRouter.Link, {
	  to: '/register_course'
	}, void 0, _jsx('li', {}, void 0, 'Register and Search for classes'));
	
	var _ref10 = _jsx('li', {}, void 0, 'View My Courses');
	
	function StudentHome(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Navbar, {
	    style: { marginBottom: '0' }
	  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
	    className: _main2.default.sidenav
	  }, void 0, _ref4, _ref5, _ref6, _ref7), _jsx('div', {
	    className: _main2.default.welcomeContainer
	  }, void 0, _jsx('h2', {
	    className: _main2.default.instructorName
	  }, void 0, 'Welcome, Justin Lee'), _jsx(_reactBootstrap.Image, {
	    className: _main2.default.instructorPic,
	    src: "data:image/png;base64,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",
	    rounded: true
	  })), _jsx('div', {}, void 0, _ref8, _jsx('ul', {
	    className: _main2.default.ulStyle
	  }, void 0, _ref9, _ref10)));
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StudentHome);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(15);
	
	var _AppReducer = __webpack_require__(32);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addStudents = addStudents;
	exports.dropStudents = dropStudents;
	
	var _course = __webpack_require__(47);
	
	var _course2 = _interopRequireDefault(_course);
	
	var _sessionUtils = __webpack_require__(51);
	
	var _sessionUtils2 = _interopRequireDefault(_sessionUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateUserAccount = generateUserAccount;
	exports.login = login;
	exports.logout = logout;
	var mongoose = __webpack_require__(5);
	__webpack_require__(13);
	__webpack_require__(14);
	var SessionSchema = __webpack_require__(5).model('Session').schema;
	var UserSchema = __webpack_require__(5).model('User').schema;
	
	var bigrandom = __webpack_require__(52);
	
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
	  'isAdmin', //doesn't really matter what value we get back since we aren't using it (just need to see if record exists, theres probably a better way (count()))
	  function (err, user) {
	    if (err) {
	      console.error(err);
	      callback(false);
	    }
	    //console.log('user record returned: ' + user +' | data type: ' + (typeof user));
	    if (user) {
	      callback(true, user.isAdmin);
	    } else {
	      callback(false);
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
	        checkCredentials(req.body.username, req.body.password, function (credsAreValid, isAdmin) {
	          if (credsAreValid === true) {
	            // Generate a new session that is valid for 3 hours from now
	            res.cookie('sessionID', generateSessionID(req.body.username), { maxAge: 10800 });
	            res.send({
	              isAdmin: isAdmin
	            });
	            res.status(200).end();
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(7);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _cookieParser = __webpack_require__(26);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _compression = __webpack_require__(25);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(24);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(27);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpack = __webpack_require__(9);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(23);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(29);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(30);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(17);
	
	var _reactRedux = __webpack_require__(3);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(28);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(2);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(16);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(22);
	
	var _login = __webpack_require__(21);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _course = __webpack_require__(20);
	
	var _course2 = _interopRequireDefault(_course);
	
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
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	var _session = __webpack_require__(13);
	
	var _session2 = _interopRequireDefault(_session);
	
	var _user = __webpack_require__(14);
	
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
/* 52 */
/***/ function(module, exports) {

	module.exports = require("bigrandom");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("react-icons-kit");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);
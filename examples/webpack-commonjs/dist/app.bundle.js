/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _summer = __webpack_require__(1);

	var _summer2 = _interopRequireDefault(_summer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	  function App() {
	    var initialValue = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	    _classCallCheck(this, App);

	    this.summer = new _summer2.default();
	    this.initialValue = initialValue;
	    console.log('The initial value is ' + this.initialValue);
	  }

	  _createClass(App, [{
	    key: 'addManyNumbers',
	    value: function addManyNumbers() {
	      for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
	        numbers[_key] = arguments[_key];
	      }

	      var sum = this.initialValue + this.summer.addManyNumbers(numbers);
	      console.log('The sum is ' + sum);
	    }
	  }]);

	  return App;
	}();

	var app = new App();
	app.addManyNumbers(2, 4, 6);

	app = new App(10);
	app.addManyNumbers(3, 5, 7, 9);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var addTwoNumbers = function addTwoNumbers(a, b) {
	  return a + b;
	};

	var Summer = function () {
	  function Summer() {
	    _classCallCheck(this, Summer);
	  }

	  _createClass(Summer, [{
	    key: "addManyNumbers",
	    value: function addManyNumbers(numbers) {
	      return numbers.reduce(addTwoNumbers, 0);
	    }
	  }]);

	  return Summer;
	}();

	exports.default = Summer;

/***/ }
/******/ ]);
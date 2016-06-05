"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  (function () {
    var addTwoNumbers = function addTwoNumbers(a, b) {
      return a + b;
    };

    var App = function () {
      function App() {
        var initialValue = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        _classCallCheck(this, App);

        this.initialValue = initialValue;
        console.log("The initial value is " + initialValue);
      }

      _createClass(App, [{
        key: "addManyNumbers",
        value: function addManyNumbers() {
          for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
            numbers[_key] = arguments[_key];
          }

          var sum = numbers.reduce(addTwoNumbers, this.initialValue);
          console.log("The sum is " + sum);
        }
      }]);

      return App;
    }();

    window.App = App;
  })();
}

var app = new App();
app.addManyNumbers(2, 4, 6);

app = new App(10);
app.addManyNumbers(3, 5, 7, 9);

console.log(typeof App === "undefined" ? "undefined" : _typeof(App));
console.log(typeof addTwoNumbers === "undefined" ? "undefined" : _typeof(addTwoNumbers));
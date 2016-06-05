define(['exports', 'src/summer'], function (exports, _summer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _summer2 = _interopRequireDefault(_summer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  exports.default = App;
});

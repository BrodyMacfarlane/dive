'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer() {
    _classCallCheck(this, Timer);

    return _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));
  }

  _createClass(Timer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentTime = _props.currentTime,
          className = _props.className,
          style = _props.style,
          soundCloudAudio = _props.soundCloudAudio;
      var duration = this.props.duration;

      var classNames = (0, _classnames2.default)('sb-soundplayer-timer', className);

      if (!duration && soundCloudAudio && soundCloudAudio.duration) {
        duration = soundCloudAudio.duration;
      }

      return _react2.default.createElement(
        'div',
        { className: classNames, style: style },
        Timer.prettyTime(currentTime),
        ' / ',
        Timer.prettyTime(duration)
      );
    }
  }], [{
    key: 'prettyTime',
    value: function prettyTime(time) {
      var hours = Math.floor(time / 3600);
      var mins = '0' + Math.floor(time % 3600 / 60);
      var secs = '0' + Math.floor(time % 60);

      mins = mins.substr(mins.length - 2);
      secs = secs.substr(secs.length - 2);

      if (!isNaN(secs)) {
        if (hours) {
          return hours + ':' + mins + ':' + secs;
        }
        return mins + ':' + secs;
      }
      return '00:00';
    }
  }]);

  return Timer;
}(_react.Component);

Timer.propTypes = {
  className: _propTypes2.default.string,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  currentTime: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Timer.defaultProps = {
  duration: 0,
  currentTime: 0
};

exports.default = Timer;
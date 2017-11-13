'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _soundcloudAudio = require('soundcloud-audio');

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'handleSeekTrack',
    value: function handleSeekTrack(e) {
      var _props = this.props,
          onSeekTrack = _props.onSeekTrack,
          soundCloudAudio = _props.soundCloudAudio;

      var xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.duration)) {
        soundCloudAudio.audio.currentTime = xPos * soundCloudAudio.audio.duration;
      }

      onSeekTrack && onSeekTrack.call(this, xPos, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          innerClassName = _props2.innerClassName,
          style = _props2.style,
          currentTime = _props2.currentTime,
          duration = _props2.duration;
      var _props3 = this.props,
          value = _props3.value,
          innerStyle = _props3.innerStyle;


      if (!value && currentTime && duration) {
        value = currentTime / duration * 100 || 0;
      }

      if (value < 0) {
        value = 0;
      }

      if (value > 100) {
        value = 100;
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-progress-container', className);
      var innerClassNames = (0, _classnames2.default)('sb-soundplayer-progress-inner', innerClassName);

      if (!innerStyle) {
        innerStyle = {};
      }

      innerStyle = _extends({}, innerStyle, { width: value + '%' });

      return _react2.default.createElement(
        'div',
        { className: classNames, style: style, onClick: this.handleSeekTrack.bind(this) },
        _react2.default.createElement('div', { className: innerClassNames, style: innerStyle })
      );
    }
  }]);

  return Progress;
}(_react.Component);

Progress.propTypes = {
  className: _propTypes2.default.string,
  innerClassName: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  value: _propTypes2.default.number,
  onSeekTrack: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

Progress.defaultProps = {
  value: 0
};

exports.default = Progress;
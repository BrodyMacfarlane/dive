'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _soundcloudAudio = require('soundcloud-audio');

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icons = require('./Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VolumeControl = function (_Component) {
  _inherits(VolumeControl, _Component);

  function VolumeControl() {
    _classCallCheck(this, VolumeControl);

    return _possibleConstructorReturn(this, (VolumeControl.__proto__ || Object.getPrototypeOf(VolumeControl)).apply(this, arguments));
  }

  _createClass(VolumeControl, [{
    key: 'handleVolumeChange',
    value: function handleVolumeChange(e) {
      var _props = this.props,
          onVolumeChange = _props.onVolumeChange,
          onToggleMute = _props.onToggleMute,
          soundCloudAudio = _props.soundCloudAudio,
          isMuted = _props.isMuted;

      var xPos = e.target.value / 100;
      var mute = xPos <= 0 && !isMuted;

      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.volume)) {
        soundCloudAudio.audio.volume = xPos;
        soundCloudAudio.audio.muted = mute;
      }

      if (mute !== isMuted) {
        onToggleMute && onToggleMute.call(this, mute, e);
      }

      onVolumeChange && onVolumeChange.call(this, xPos, e);
    }
  }, {
    key: 'handleMute',
    value: function handleMute(e) {
      var _props2 = this.props,
          onToggleMute = _props2.onToggleMute,
          soundCloudAudio = _props2.soundCloudAudio;


      if (soundCloudAudio && !isNaN(soundCloudAudio.audio.muted)) {
        soundCloudAudio.audio.muted = !soundCloudAudio.audio.muted;
      }

      onToggleMute && onToggleMute.call(this, !this.props.isMuted, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          buttonClassName = _props3.buttonClassName,
          rangeClassName = _props3.rangeClassName,
          volume = _props3.volume,
          isMuted = _props3.isMuted;


      var value = volume * 100 || 0;

      if (value < 0 || isMuted) {
        value = 0;
      }

      if (value > 100) {
        value = 100;
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-volume', className);
      var buttonClassNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-volume-btn', buttonClassName);
      var rangeClassNames = (0, _classnames2.default)('sb-soundplayer-volume-range', rangeClassName);

      return _react2.default.createElement(
        'div',
        { className: classNames },
        _react2.default.createElement(
          'button',
          { className: buttonClassNames, onClick: this.handleMute.bind(this) },
          isMuted ? _react2.default.createElement(_Icons.VolumeIconMuteSVG, null) : _react2.default.createElement(_Icons.VolumeIconLoudSVG, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { className: rangeClassNames, type: 'range', min: '0', max: '100', step: '1', value: value, onChange: this.handleVolumeChange.bind(this) })
        )
      );
    }
  }]);

  return VolumeControl;
}(_react.Component);

VolumeControl.propTypes = {
  className: _propTypes2.default.string,
  buttonClassName: _propTypes2.default.string,
  rangeClassName: _propTypes2.default.string,
  volume: _propTypes2.default.number,
  onVolumeChange: _propTypes2.default.func,
  onToggleMute: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

VolumeControl.defaultProps = {
  volume: 1,
  isMuted: 0
};

exports.default = VolumeControl;
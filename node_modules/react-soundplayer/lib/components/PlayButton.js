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

var _soundcloudAudio = require('soundcloud-audio');

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _Icons = require('./Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayButton = function (_Component) {
  _inherits(PlayButton, _Component);

  function PlayButton() {
    _classCallCheck(this, PlayButton);

    return _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).apply(this, arguments));
  }

  _createClass(PlayButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          playing = _props.playing,
          seeking = _props.seeking;


      return playing !== nextProps.playing || seeking !== nextProps.seeking;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          playing = _props2.playing,
          soundCloudAudio = _props2.soundCloudAudio,
          onTogglePlay = _props2.onTogglePlay;


      if (!playing) {
        soundCloudAudio && soundCloudAudio.play({
          playlistIndex: soundCloudAudio._playlistIndex
        });
      } else {
        soundCloudAudio && soundCloudAudio.pause();
      }

      onTogglePlay && onTogglePlay(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          playing = _props3.playing,
          seekingIcon = _props3.seekingIcon,
          seeking = _props3.seeking,
          className = _props3.className,
          style = _props3.style;


      var iconNode = void 0;

      if (seeking && seekingIcon) {
        iconNode = _react2.default.cloneElement(seekingIcon);
      } else if (playing) {
        iconNode = _react2.default.createElement(_Icons.PauseIconSVG, null);
      } else {
        iconNode = _react2.default.createElement(_Icons.PlayIconSVG, null);
      }

      var classNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-play-btn', className);

      return _react2.default.createElement(
        'button',
        { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) },
        iconNode
      );
    }
  }]);

  return PlayButton;
}(_react.Component);

PlayButton.propTypes = {
  className: _propTypes2.default.string,
  seeking: _propTypes2.default.bool,
  playing: _propTypes2.default.bool,
  onTogglePlay: _propTypes2.default.func,
  seekingIcon: _propTypes2.default.node,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

PlayButton.defaultProps = {
  playing: false,
  seeking: false
};

exports.default = PlayButton;
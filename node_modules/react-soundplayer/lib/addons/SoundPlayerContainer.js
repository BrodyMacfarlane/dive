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

var _withSoundCloudAudio = require('./withSoundCloudAudio');

var _withSoundCloudAudio2 = _interopRequireDefault(_withSoundCloudAudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // IMPORTANT NOTE!
// This container is deprecated, please use `withSoundCloudAudio` instead
// HOC pattern docs - https://reactjs.org/docs/higher-order-components.html

var SoundPlayerContainer = function (_Component) {
  _inherits(SoundPlayerContainer, _Component);

  function SoundPlayerContainer() {
    _classCallCheck(this, SoundPlayerContainer);

    return _possibleConstructorReturn(this, (SoundPlayerContainer.__proto__ || Object.getPrototypeOf(SoundPlayerContainer)).apply(this, arguments));
  }

  _createClass(SoundPlayerContainer, [{
    key: 'wrapChild',
    value: function wrapChild(child) {
      return _react2.default.cloneElement(child, this.props);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.warn('\n      <SoundPlayerContainer /> is deprecated! Please use HOC addons/withSoundCloudAudio instead.\n      https://reactjs.org/docs/higher-order-components.html\n      https://labs.voronianski.com/react-soundplayer/#Containers\n    ');
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      if (!children) {
        return;
      }

      if (!Array.isArray(children)) {
        return this.wrapChild(children);
      }

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.Children.map(children, this.wrapChild.bind(this))
      );
    }
  }]);

  return SoundPlayerContainer;
}(_react.Component);

SoundPlayerContainer.propTypes = {
  streamUrl: _propTypes2.default.string,
  resolveUrl: _propTypes2.default.string,
  clientId: _propTypes2.default.string,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default),
  onStartTrack: _propTypes2.default.func,
  onStopTrack: _propTypes2.default.func,
  onPauseTrack: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};

exports.default = (0, _withSoundCloudAudio2.default)(SoundPlayerContainer);
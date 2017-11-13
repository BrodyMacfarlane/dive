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

var NextButton = function (_Component) {
  _inherits(NextButton, _Component);

  function NextButton() {
    _classCallCheck(this, NextButton);

    return _possibleConstructorReturn(this, (NextButton.__proto__ || Object.getPrototypeOf(NextButton)).apply(this, arguments));
  }

  _createClass(NextButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props = this.props,
          soundCloudAudio = _props.soundCloudAudio,
          onNextClick = _props.onNextClick;


      soundCloudAudio && soundCloudAudio.next();
      onNextClick && onNextClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style;

      var classNames = (0, _classnames2.default)('sb-soundplayer-btn sb-soundplayer-next-btn', className);

      return _react2.default.createElement(
        'button',
        { type: 'button', className: classNames, style: style, onClick: this.handleClick.bind(this) },
        _react2.default.createElement(_Icons.NextIconSVG, null)
      );
    }
  }]);

  return NextButton;
}(_react.Component);

NextButton.propTypes = {
  className: _propTypes2.default.string,
  onNextClick: _propTypes2.default.func,
  soundCloudAudio: _propTypes2.default.instanceOf(_soundcloudAudio2.default)
};

exports.default = NextButton;
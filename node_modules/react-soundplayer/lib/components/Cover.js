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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icons = require('./Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cover = function (_Component) {
  _inherits(Cover, _Component);

  function Cover() {
    _classCallCheck(this, Cover);

    return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
  }

  _createClass(Cover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundUrl = _props.backgroundUrl,
          trackName = _props.trackName,
          artistName = _props.artistName,
          className = _props.className,
          style = _props.style,
          children = _props.children;

      var classNames = (0, _classnames2.default)('sb-soundplayer-cover', className);

      return _react2.default.createElement(
        'div',
        {
          className: classNames,
          style: _extends({}, style, { backgroundImage: 'url(' + backgroundUrl + ')' }) },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Icons.SoundCloudLogoSVG, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { className: 'sb-soundplayer-track sb-soundplayer-info-box' },
            trackName
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { className: 'sb-soundplayer-artist sb-soundplayer-info-box' },
            'by ',
            artistName
          )
        ),
        _react2.default.Children.map(children, _react2.default.cloneElement)
      );
    }
  }]);

  return Cover;
}(_react.Component);

Cover.propTypes = {
  className: _propTypes2.default.string,
  backgroundUrl: _propTypes2.default.string.isRequired,
  trackName: _propTypes2.default.string.isRequired,
  artistName: _propTypes2.default.string.isRequired
};
Cover.defaultProps = {
  style: {}
};

exports.default = Cover;
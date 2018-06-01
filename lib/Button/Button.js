"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("@material-ui/core");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _buttonStyle = require("./buttonStyle.jsx");

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components

// nodejs library that concatenates classes


function RegularButton(_ref) {
  var _classNames;

  var props = _objectWithoutProperties(_ref, []);

  var classes = props.classes,
      color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      rest = _objectWithoutProperties(props, ["classes", "color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  var btnClasses = (0, _classnames2.default)((_classNames = {}, _classNames[classes.button] = true, _classNames[classes[size]] = size, _classNames[classes[color]] = color, _classNames[classes.round] = round, _classNames[classes.fullWidth] = fullWidth, _classNames[classes.disabled] = disabled, _classNames[classes.simple] = simple, _classNames[classes.block] = block, _classNames[classes.link] = link, _classNames[classes.justIcon] = justIcon, _classNames[className] = className, _classNames));
  return _react2.default.createElement(
    _core.Button,
    _extends({}, rest, { className: btnClasses }),
    children
  );
}

RegularButton.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes2.default.object.isRequired,
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: _propTypes2.default.oneOf(["sm", "lg"]),
  simple: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  justIcon: _propTypes2.default.bool
} : {};

exports.default = (0, _core.withStyles)(_buttonStyle2.default)(RegularButton);
module.exports = exports["default"];
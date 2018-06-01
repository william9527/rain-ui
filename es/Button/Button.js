var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { withStyles, Button } from "@material-ui/core";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import buttonStyle from "./buttonStyle.jsx";
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

  var btnClasses = classNames((_classNames = {}, _classNames[classes.button] = true, _classNames[classes[size]] = size, _classNames[classes[color]] = color, _classNames[classes.round] = round, _classNames[classes.fullWidth] = fullWidth, _classNames[classes.disabled] = disabled, _classNames[classes.simple] = simple, _classNames[classes.block] = block, _classNames[classes.link] = link, _classNames[classes.justIcon] = justIcon, _classNames[className] = className, _classNames));
  return React.createElement(
    Button,
    _extends({}, rest, { className: btnClasses }),
    children
  );
}

RegularButton.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool
} : {};

export default withStyles(buttonStyle)(RegularButton);
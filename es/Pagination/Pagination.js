function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes

// material-ui components

import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/ChevronRight';
import PrevIcon from '@material-ui/icons/ChevronLeft';

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Pagination.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        IconButton,
        { disabled: !this.props.from > 0, onClick: this.props.onPrev },
        React.createElement(PrevIcon, null)
      ),
      React.createElement(
        IconButton,
        { onClick: this.props.onNext,
          disabled: !(this.props.from + this.props.dataLength < this.props.max) },
        React.createElement(NextIcon, null)
      ),
      React.createElement(
        "span",
        { style: { verticalAlign: 'top', lineHeight: '50px', marginTop: '30px' } },
        " (",
        this.props.from + 1 + "-" + (this.props.from + this.props.dataLength),
        ") of ",
        this.props.max
      )
    );
  };

  return Pagination;
}(Component);

Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  onPrev: PropTypes.func,
  onNext: PropTypes.func
} : {};

Pagination.defaultProps = {
  onPrev: function onPrev() {},
  onNext: function onNext() {}
};

export default Pagination;
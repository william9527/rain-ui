"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ChevronRight = require("@material-ui/icons/ChevronRight");

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _ChevronLeft = require("@material-ui/icons/ChevronLeft");

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// nodejs library to set properties for components

// nodejs library that concatenates classes

// material-ui components

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Pagination.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _IconButton2.default,
        { disabled: !this.props.from > 0, onClick: this.props.onPrev },
        _react2.default.createElement(_ChevronLeft2.default, null)
      ),
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: this.props.onNext,
          disabled: !(this.props.from + this.props.dataLength < this.props.max) },
        _react2.default.createElement(_ChevronRight2.default, null)
      ),
      _react2.default.createElement(
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
}(_react.Component);

Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  onPrev: _propTypes2.default.func,
  onNext: _propTypes2.default.func
} : {};

Pagination.defaultProps = {
  onPrev: function onPrev() {},
  onNext: function onNext() {}
};

exports.default = Pagination;
module.exports = exports["default"];
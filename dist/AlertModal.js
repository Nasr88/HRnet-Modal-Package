"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./AlertModal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AlertModal = _ref => {
  let {
    message,
    onClose
  } = _ref;
  if (!message) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, message)));
};
var _default = exports.default = AlertModal;
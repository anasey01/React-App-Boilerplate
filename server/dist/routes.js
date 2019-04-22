"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('*', function (request, response) {
  var bundled = _path["default"].join(__dirname, '..', 'dist', 'index.html');

  response.sendFile(bundled);
});
var _default = router;
exports["default"] = _default;
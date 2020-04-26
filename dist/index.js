"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _server = _interopRequireDefault(require("./server"));

var _populate = _interopRequireDefault(require("./utils/populate"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('index', _path["default"].resolve(__dirname, '../.env'));

require('dotenv').config({
  path: _path["default"].resolve(__dirname, '../.env')
});

(0, _populate["default"])(false).then(function (res) {
  _server["default"].listen({
    port: process.env.PORT || 4000
  }).then(function (_ref) {
    var url = _ref.url;
    console.log("\uD83D\uDE80  Server ready at ".concat(url));
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var req = _ref.req;
  var authHeader = req.get('authorization');

  if (!authHeader) {
    return {
      isAuth: false
    };
  }

  var token = authHeader.split(' ')[1];

  if (!token || token === '') {
    return {
      isAuth: false
    };
  }

  try {
    var decodedToken = _jsonwebtoken["default"].verify(token, process.env.JWT_key);

    return {
      isAuth: true,
      userId: decodedToken.userId
    };
  } catch (err) {
    return {
      isAuth: false
    };
  }
};

exports["default"] = _default;
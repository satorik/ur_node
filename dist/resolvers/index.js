"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("./query/"));

var _mutation = _interopRequireDefault(require("./mutation/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolvers = {
  Query: _query["default"],
  Mutation: _mutation["default"]
};
exports["default"] = resolvers;
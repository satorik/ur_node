"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _graphqlTools = require("graphql-tools");

var _query = _interopRequireDefault(require("./query"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _game = _interopRequireDefault(require("./types/game"));

var _masterData = _interopRequireDefault(require("./types/masterData"));

var _resolvers = _interopRequireDefault(require("../resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: ['scalar Upload ', _game["default"], _masterData["default"], _query["default"], _mutation["default"]],
  resolvers: _resolvers["default"]
});
exports.schema = schema;
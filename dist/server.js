"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _schema = require("./schema");

var _models = require("./models");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import isAuth from './middleware/isAuth'
var server = new _apolloServer.ApolloServer({
  schema: _schema.schema,
  context: function context(req) {
    return {
      models: _models.models //auth: isAuth(req)

    };
  },
  formatError: function formatError(err) {
    var stream = _fs["default"].createWriteStream('errors.log', {
      flags: 'a'
    });

    var now = new Date();
    stream.write(now.toISOString());
    stream.write(JSON.stringify(err, null, '\t'));
    stream.on('error', function (error) {
      console.log('couldnot save to file', error);
    });
    return err;
  }
});
exports["default"] = server;
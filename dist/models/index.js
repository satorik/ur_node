"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.models = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('index', _path["default"].resolve(__dirname, '../../.env'));

require('dotenv').config({
  path: _path["default"].resolve(__dirname, '../../.env')
});

console.log('index', process.env.db, process.env.user, process.env.password, process.env.host, process.env.schema);
var sequelize = new _sequelize["default"](process.env.db, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false
  },
  schema: process.env.schema,
  logging: false //console.log

});
exports["default"] = sequelize;
var models = {
  fandom: sequelize["import"]('./masterData/fandom.js'),
  character: sequelize["import"]('./masterData/character.js'),
  genre: sequelize["import"]('./masterData/genre.js'),
  location: sequelize["import"]('./masterData/location.js'),
  raiting: sequelize["import"]('./masterData/raiting.js'),
  trop: sequelize["import"]('./masterData/trop.js'),
  noun: sequelize["import"]('./masterData/noun.js'),
  game: sequelize["import"]('./game/game.js'),
  gameCondition: sequelize["import"]('./game/gameCondition.js'),
  status: sequelize["import"]('./config/status.js')
};
exports.models = models;
models.fandom.hasMany(models.character, {
  onDelete: 'cascade'
});
models.fandom.hasMany(models.location, {
  onDelete: 'cascade'
});
models.game.hasMany(models.gameCondition, {
  as: 'Conditions'
});
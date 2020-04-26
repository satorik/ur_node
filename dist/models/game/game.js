"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Game = function Game(sequelize, DataTypes) {
  return sequelize.define('game', {
    status: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  });
};

var _default = Game;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var GameCondition = function GameCondition(sequelize, DataTypes) {
  return sequelize.define('gameCondition', {
    conditionType: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    conditionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};

var _default = GameCondition;
exports["default"] = _default;
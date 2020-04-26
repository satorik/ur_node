"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Status = function Status(sequelize, DataTypes) {
  return sequelize.define('status', {
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};

var _default = Status;
exports["default"] = _default;
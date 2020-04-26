"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Trop = function Trop(sequelize, DataTypes) {
  return sequelize.define('trop', {
    name_rus: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name Rus required"
        },
        len: {
          args: [1, 100],
          msg: "Maximum 200 characters"
        }
      }
    },
    name_eng: {
      type: DataTypes.STRING(200),
      allowNull: true,
      validate: {
        len: {
          args: [1, 100],
          msg: "Maximum 200 characters"
        }
      }
    }
  });
};

var _default = Trop;
exports["default"] = _default;
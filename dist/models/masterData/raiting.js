"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Raiting = function Raiting(sequelize, DataTypes) {
  return sequelize.define('raiting', {
    name_rus: {
      type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17')
    },
    name_eng: {
      type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17')
    },
    name_orig: {
      type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17')
    }
  });
};

var _default = Raiting;
exports["default"] = _default;
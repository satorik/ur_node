"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  development: {
    database: {
      host: 'localhost',
      db: 'postgres',
      user: 'postgres',
      password: 'Rjktcj06',
      schema: 'uncleanRealm_dev'
    }
  },
  production: {
    database: {
      host: '/cloudsql/ur-back:europe-west3:urgame-postgres',
      db: 'postgres',
      user: 'postgres',
      password: 'c4IKC9LKEffDP0G1',
      schema: 'urgame'
    }
  },
  test: {
    database: {
      host: '/cloudsql/ur-back:europe-west3:urgame-postgres',
      db: 'postgres',
      user: 'postgres',
      password: 'c4IKC9LKEffDP0G1',
      schema: 'uncleanRealm_test'
    }
  }
};
var _default = config;
exports["default"] = _default;
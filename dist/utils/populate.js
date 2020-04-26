"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

var _insertMasterData = require("./insertMasterData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var uploadInitialData = function uploadInitialData() {
  (0, _insertMasterData.uploadCharacters)(_models["default"].models);
  (0, _insertMasterData.uploadGenre)(_models["default"].models);
  (0, _insertMasterData.uploadNoun)(_models["default"].models);
  (0, _insertMasterData.uploadRaiting)(_models["default"].models);
  (0, _insertMasterData.uploadLocation)(_models["default"].models);
  (0, _insertMasterData.uploadTrop)(_models["default"].models);
};

var populate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var force,
        dataFinished,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            force = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;

            if (!force) {
              _context.next = 17;
              break;
            }

            _context.next = 4;
            return _models["default"].models.status.create({
              status: 'SYNC STARTED',
              code: '0'
            });

          case 4:
            _context.next = 6;
            return _models["default"].sync({
              force: true
            });

          case 6:
            _context.next = 8;
            return _models["default"].models.status.create({
              status: 'SYNC FINISHED',
              code: '1'
            });

          case 8:
            _context.next = 10;
            return _models["default"].models.status.create({
              status: 'INITIALIZATION STARTED',
              code: '2'
            });

          case 10:
            _context.next = 12;
            return _models["default"].models.fandom.create({
              name_rus: 'Магистр дьявольского культа'
            });

          case 12:
            uploadInitialData();
            _context.next = 15;
            return _models["default"].models.status.create({
              status: 'INITIALIZATION FINISHED',
              code: '3'
            });

          case 15:
            _context.next = 30;
            break;

          case 17:
            _context.next = 19;
            return _models["default"].sync();

          case 19:
            _context.next = 21;
            return _models["default"].models.status.findOne({
              where: {
                code: 3
              }
            });

          case 21:
            dataFinished = _context.sent;

            if (dataFinished) {
              _context.next = 30;
              break;
            }

            _context.next = 25;
            return _models["default"].models.status.create({
              status: 'INITIALIZATION STARTED',
              code: '2'
            });

          case 25:
            _context.next = 27;
            return _models["default"].models.fandom.create({
              name_rus: 'Магистр дьявольского культа'
            });

          case 27:
            uploadInitialData();
            _context.next = 30;
            return _models["default"].models.status.create({
              status: 'INITIALIZATION FINISHED',
              code: '3'
            });

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function populate() {
    return _ref.apply(this, arguments);
  };
}();

var _default = populate;
exports["default"] = _default;
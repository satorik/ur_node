"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var masterDataQuery = {
  getMasterData: function getMasterData(parent, _ref, _ref2) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var fandom, models, character, location, genre, raiting, trop, noun;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fandom = _ref.fandom;
              models = _ref2.models;
              _context.next = 4;
              return models.character.findAll({
                where: {
                  fandomId: fandom
                }
              });

            case 4:
              character = _context.sent;
              _context.next = 7;
              return models.location.findAll({
                where: {
                  fandomId: fandom
                }
              });

            case 7:
              location = _context.sent;
              _context.next = 10;
              return models.genre.findAll();

            case 10:
              genre = _context.sent;
              _context.next = 13;
              return models.raiting.findAll();

            case 13:
              raiting = _context.sent;
              _context.next = 16;
              return models.trop.findAll();

            case 16:
              trop = _context.sent;
              _context.next = 19;
              return models.noun.count();

            case 19:
              noun = _context.sent;
              return _context.abrupt("return", {
                character: character,
                location: location,
                genre: genre,
                raiting: raiting,
                trop: trop,
                noun: noun
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var _default = masterDataQuery;
exports["default"] = _default;
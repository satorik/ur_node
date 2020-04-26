"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processLineByLine = void 0;

var _readline = _interopRequireDefault(require("readline"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var insertCharacters = function insertCharacters(name, models, fandomId) {
  return models.character.create({
    name_rus: name,
    fandomId: fandomId
  });
};

var insertGenre = function insertGenre(name, models) {
  return models.genre.create({
    name_rus: name
  });
};

var insertNoun = function insertNoun(name, models) {
  return models.noun.create({
    name_rus: name
  });
};

var insertRaiting = function insertRaiting(name, models) {
  return models.raiting.create({
    name_rus: name
  });
};

var insertLocation = function insertLocation(name, models) {
  return models.location.create({
    name_rus: name
  });
};

var insertTrop = function insertTrop(name, models) {
  return models.trop.create({
    name_rus: name
  });
};

var uploadFunctions = {
  'character': function character(name, models, fandomId) {
    return insertCharacters(name, models, fandomId);
  },
  'genre': function genre(name, models) {
    return insertGenre(name, models);
  },
  'noun': function noun(name, models) {
    return insertNoun(name, models);
  },
  'raiting': function raiting(name, models) {
    return insertRaiting(name, models);
  },
  'location': function location(name, models) {
    return insertLocation(name, models);
  },
  'trop': function trop(name, models) {
    return insertTrop(name, models);
  }
};

var processLineByLine = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filePath, models, type) {
    var fileStream, rl, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, line;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileStream = _fs["default"].createReadStream(filePath);
            rl = _readline["default"].createInterface({
              input: fileStream,
              crlfDelay: Infinity
            });
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = _asyncIterator(rl);

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _step.value;

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 20;
              break;
            }

            line = _value;
            _context.next = 17;
            return uploadFunctions[type](line, models, 1);

          case 17:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 31;
              break;
            }

            _context.next = 31;
            return _iterator["return"]();

          case 31:
            _context.prev = 31;

            if (!_didIteratorError) {
              _context.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context.finish(31);

          case 35:
            return _context.finish(26);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 22, 26, 36], [27,, 31, 35]]);
  }));

  return function processLineByLine(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.processLineByLine = processLineByLine;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadTrop = exports.uploadLocation = exports.uploadRaiting = exports.uploadNoun = exports.uploadGenre = exports.uploadCharacters = void 0;

var _dbFunc = require("./dbFunc");

var uploadCharacters = function uploadCharacters(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/character.txt', models, 'character');
};

exports.uploadCharacters = uploadCharacters;

var uploadGenre = function uploadGenre(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/genre.txt', models, 'genre');
};

exports.uploadGenre = uploadGenre;

var uploadNoun = function uploadNoun(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/russian_nouns.txt', models, 'noun');
};

exports.uploadNoun = uploadNoun;

var uploadRaiting = function uploadRaiting(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/raitings.txt', models, 'raiting');
};

exports.uploadRaiting = uploadRaiting;

var uploadLocation = function uploadLocation(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/locations.txt', models, 'location');
};

exports.uploadLocation = uploadLocation;

var uploadTrop = function uploadTrop(models) {
  (0, _dbFunc.processLineByLine)('./src/__txt/trops.txt', models, 'trop');
};

exports.uploadTrop = uploadTrop;
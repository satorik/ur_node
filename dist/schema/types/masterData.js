"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n  type Fandom {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n    name_orig: String\n  }\n\n  type Character {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n    name_orig: String\n  }\n\n  type Location {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n    name_orig: String\n  }\n\n\n  type Raiting {\n    id: ID!\n    name_rus: String!\n  }\n\n  type Genre {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n  }\n\n  type Trop {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n  }\n\n  type Noun {\n    id: ID!\n    name_rus: String!\n    name_eng: String\n  }\n\n  type MasterData {\n    character: [Character!]!\n    location: [Location!]!\n    genre: [Genre!]!\n    raiting: [Raiting!]!\n    trop: [Trop!]!\n    noun: Int\n  }\n";
exports["default"] = _default;
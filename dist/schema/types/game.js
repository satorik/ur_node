"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n  type Game {\n    id: ID!\n    status: String\n    owner: String\n    conditions: [GameCondition!]!\n  }\n\n\n  enum CONDITION_TYPE {\n    fandom\n    character\n    location\n    raiting\n    trop\n    genre\n    noun\n  }\n\n  type GameCondition {\n    id: ID!\n    conditionType: CONDITION_TYPE!\n    conditionItem: ConditionItem!\n  }\n\n  type ConditionItem {\n    id: ID!\n    name_rus: String!\n  }\n\n  input createConditionData {\n    conditionType: CONDITION_TYPE!\n    conditionId: ID!\n  }\n\n  input CreateGameData {\n    status: String\n    owner: String\n    conditions: [createConditionData!]\n  }\n\n\n";
exports["default"] = _default;
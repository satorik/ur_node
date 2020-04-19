export default `
  type Game {
    id: ID!
    status: String
    owner: String
    conditions: [GameCondition!]!
  }


  enum CONDITION_TYPE {
    fandom
    character
    location
    raiting
    trop
    genre
    noun
  }

  type GameCondition {
    id: ID!
    conditionType: CONDITION_TYPE!
    conditionItem: ConditionItem!
  }

  type ConditionItem {
    id: ID!
    name_rus: String!
  }

  input createConditionData {
    conditionType: CONDITION_TYPE!
    conditionId: ID!
  }

  input CreateGameData {
    status: String
    owner: String
    conditions: [createConditionData!]
  }


`
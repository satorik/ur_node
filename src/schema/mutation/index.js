const mutation =   `
  type Mutation {
    getNoun(id: ID!): Noun!
    createGame(inputData: CreateGameData!): Game!
  }
`

export default mutation
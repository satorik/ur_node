const mutation =   `
  type Mutation {
    getNoun(id: ID!): Noun!
    getRandomNoun: [Noun!]
    getRandomRaiting: [Raiting!]
    getRandomCharacter(count: Int, fandomId: ID!): [Character!]
    getRandomLocation(fandomId: ID!): [Location!]
    getRandomGenre: [Genre!]
    getRandomTrop: [Trop!]
    createGame(inputData: CreateGameData!): Game!
  }
`

export default mutation
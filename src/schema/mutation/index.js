const mutation =   `
  type Mutation {
    getNoun(id: ID!): Noun!
    getRandomNoun: [Noun!]
    getRandomRaiting: [Raiting!]
    getRandomCharacter(count: Int): [Character!]
    getRandomLocation: [Location!]
    getRandomGenre: [Genre!]
    getRandomTrop: [Trop!]
    createGame(inputData: CreateGameData!): Game!
  }
`

export default mutation
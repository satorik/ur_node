export default `
  type Fandom {
    id: ID!
    name_rus: String!
    name_eng: String
    name_orig: String
  }

  type Character {
    id: ID!
    name_rus: String!
    name_eng: String
    name_orig: String
    main: Boolean
  }

  type Location {
    id: ID!
    name_rus: String!
    name_eng: String
    name_orig: String
  }


  type Raiting {
    id: ID!
    name_rus: String!
  }

  type Genre {
    id: ID!
    name_rus: String!
    name_eng: String
  }

  type Trop {
    id: ID!
    name_rus: String!
    name_eng: String
  }

  type Noun {
    id: ID!
    name_rus: String!
    name_eng: String
  }

  type MasterData {
    character: [Character!]!
    location: [Location!]!
    genre: [Genre!]!
    raiting: [Raiting!]!
    trop: [Trop!]!
    noun: Int
  }
`
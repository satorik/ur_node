import { makeExecutableSchema } from 'graphql-tools'

import query from './query'
import mutation from './mutation'

import game from './types/game'
import masterData from './types/masterData'

import resolvers from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs: ['scalar Upload ', game, masterData, query, mutation],
  resolvers,
})


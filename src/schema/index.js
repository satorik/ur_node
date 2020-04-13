import { makeExecutableSchema } from 'graphql-tools'

import query from './types/query'
import mutation from './types/mutation'

import navigationLink from './types/navigationLink'

import resolvers from '../resolvers'

export const schema = makeExecutableSchema({
  typeDefs: ['scalar Upload ', query, mutation],
  resolvers,
})


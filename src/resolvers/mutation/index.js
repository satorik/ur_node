import masterDataMutation from './masterData'
import gameMutation from './game'

const Mutation = {
  ...masterDataMutation,
  ...gameMutation
}

export default Mutation
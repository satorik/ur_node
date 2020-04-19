const masterDataMutation = {
  async getNoun(parent, {id}, { models }) {

    return models.noun.findOne({where: {id}})

  },
}

export default masterDataMutation
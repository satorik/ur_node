const masterDataQuery = {
  async fandom(parent, {fandom}, { models }) {

    return models.fandom.findAll({attributes: ['id', 'name_rus']})

  },
}

export default masterDataQuery
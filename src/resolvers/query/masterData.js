const masterDataQuery = {
  async getMasterData(parent, {fandom}, { models }) {

    const character = await models.character.findAll({where: {fandomId: fandom}})
    const location = await models.location.findAll({where: {fandomId: fandom}})
    const genre = await models.genre.findAll()
    const raiting = await models.raiting.findAll()
    const trop = await models.trop.findAll()
    const noun = await models.noun.count()

    return {
      character,
      location,
      genre,
      raiting,
      trop,
      noun
    }
  },
}

export default masterDataQuery
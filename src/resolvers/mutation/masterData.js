import { ApolloError } from "apollo-server"

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const getRandomValue = async (model) => {
  const maxNumber = await model.count()
  const randomId = getRandom(1, maxNumber)
  return [model.findOne({where: {id: randomId}})]
}

const getRandomLocationValue = async (model, fandomId) => {
  const locArray = await model.findAll({where: {fandomId}})
  const randomId = getRandom(0, locArray.length-1)
  return [locArray[randomId]]
}

const getRandomCharacterValue = async (model, fandomId) => {
  const charArray = await model.findAll({where: {fandomId}})
  const fullCharArray = [...charArray, ...charArray.filter(char => char.main)]
  const randomisedArray = shuffle(fullCharArray)
  const randomId1 = getRandom(0, randomisedArray.length-1)
  const randomId2 = getRandom(0, randomisedArray.length-1)
  const char1 = randomisedArray[randomId1]
  const char2 = randomisedArray[randomId2]
  if (char1 === char2) return [char1]
  else return [char1, char2]
}

const masterDataMutation = {
  async getNoun(parent, {id}, { models }) {
    return models.noun.findOne({where: {id}})
  },

  async getRandomNoun(parent, args, { models }) {
    return getRandomValue(models.noun)
  },

  async getRandomRaiting(parent, {id}, { models }) {
    return getRandomValue(models.raiting)
  },

  async getRandomGenre(parent, {id}, { models }) {
    return getRandomValue(models.genre)
  },

  async getRandomTrop(parent, {id}, { models }) {
    return getRandomValue(models.trop)
  },

  async getRandomLocation(parent, {fandomId}, { models }) {
    if (!fandomId) throw new ApolloError('No fandom')
    const fandom = await models.fandom.findOne({where: {id: fandomId}})
    if (!fandom) throw new ApolloError('No such fandom')

    return getRandomLocationValue(models.location, fandomId)
  },

  async getRandomCharacter(parent, {fandomId}, { models }) {
    if (!fandomId) throw new ApolloError('No fandom')
    const fandom = await models.fandom.findOne({where: {id: fandomId}})
    if (!fandom) throw new ApolloError('No such fandom')

    return getRandomCharacterValue(models.character, fandomId)
  },
}

export default masterDataMutation
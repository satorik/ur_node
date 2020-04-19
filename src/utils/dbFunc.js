import readline from 'readline'
import fs from 'fs'


const insertCharacters = (name, models, fandomId) => {
  return models.character.create({
    name_rus: name,
    fandomId: fandomId
  })
}

const insertGenre = (name, models) => {
  return models.genre.create({
    name_rus: name
  })
}

const insertNoun = (name, models) => {
  return models.noun.create({
    name_rus: name
  })
}

const insertRaiting = (name, models) => {
  return models.raiting.create({
    name_rus: name
  })
}

const insertLocation = (name, models) => {
  return models.location.create({
    name_rus: name
  })
}

const insertTrop = (name, models) => {
  return models.trop.create({
    name_rus: name
  })
}

const uploadFunctions =  {
  'character': (name, models, fandomId) => insertCharacters(name, models, fandomId),
  'genre': (name, models) => insertGenre(name, models),
  'noun': (name, models) => insertNoun(name, models),
  'raiting': (name, models) => insertRaiting(name, models),
  'location': (name, models) => insertLocation(name, models),
  'trop': (name, models) => insertTrop(name, models),
}


export const processLineByLine = async (filePath, models, type) => {

  const fileStream = fs.createReadStream(filePath)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  for await (const line of rl) {
    await uploadFunctions[type](line, models, 1)
  }
}
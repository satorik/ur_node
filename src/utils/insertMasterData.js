import {processLineByLine} from './dbFunc'

const uploadCharacters = (models) => {
  processLineByLine('./src/__txt/character.txt', models, 'character')
}

const uploadGenre = (models) => {
  processLineByLine('./src/__txt/genre.txt', models, 'genre')
}

const uploadNoun = (models) => {
  processLineByLine('./src/__txt/russian_nouns.txt', models, 'noun')
}

const uploadRaiting = (models) => {
  processLineByLine('./src/__txt/raitings.txt', models, 'raiting')
}

const uploadLocation = (models) => {
  processLineByLine('./src/__txt/locations.txt', models, 'location')
}

const uploadTrop = (models) => {
  processLineByLine('./src/__txt/trops.txt', models, 'trop')
}

export { uploadCharacters, uploadGenre, uploadNoun, uploadRaiting, uploadLocation, uploadTrop }



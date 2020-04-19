import db from '../models'
import {uploadCharacters, uploadGenre, uploadNoun, uploadRaiting, uploadLocation, uploadTrop} from './insertMasterData'

const uploadInitialData = () => {

  uploadCharacters(db.models)
  uploadGenre(db.models)
  uploadNoun(db.models)
  uploadRaiting(db.models)
  uploadLocation(db.models)
  uploadTrop(db.models)

}

const populate = async (force = true) => {

  if (force) {
    await db.models.status.create({status: 'SYNC STARTED', code: '0'})

    await db.sync({force: true})

    await db.models.status.create({status: 'SYNC FINISHED', code: '1'})

    await db.models.status.create({status: 'INITIALIZATION STARTED', code: '2'})

    await db.models.fandom.create({
      name_rus: 'Магистр дьявольского культа'
    })
    
    uploadInitialData()

    await db.models.status.create({status: 'INITIALIZATION FINISHED', code: '3'})

  }
  else {
    await db.sync()

    // const syncFinished = await db.models.status.findOne({where: {code: 1}})
    // if (!syncFinished) {
    //   await db.models.status.create({status: 'SYNC STARTED', code: '0'})
    //   await db.sync({force: true})
    //   await db.models.status.create({status: 'SYNC FINISHED', code: '1'})
    // }

    const dataFinished = await db.models.status.findOne({where: {code: 3}})
    if (!dataFinished) {
      await db.models.status.create({status: 'INITIALIZATION STARTED', code: '2'})
      await db.models.fandom.create({
        name_rus: 'Магистр дьявольского культа'
      })
      
      uploadInitialData()
      await db.models.status.create({status: 'INITIALIZATION FINISHED', code: '3'})
    }

  }
}

export default populate
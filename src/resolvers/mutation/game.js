const gameMutation = {
  async createGame(parent, {inputData}, { models }) {

    const {conditions, ...gameData} = inputData

    const game = await models.game.create({...gameData})

    const gameConditions = []
    for (let condition of conditions) {
      const cond = await models.gameCondition.create({...condition, gameId: game.id})

      const conditionItem = await models[condition.conditionType].findOne({where: {id: condition.conditionId}})
      gameConditions.push({
        id: cond.id, 
        conditionType: condition.conditionType,
        conditionItem: {
          id: condition.conditionId,
          name_rus: conditionItem.name_rus
        }
      })
    }

    return {
      ...game.dataValues,
      conditions: gameConditions
    }
  },
}

export default gameMutation
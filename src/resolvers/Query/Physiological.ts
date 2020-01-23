import { Resolver, FindMethodsArgs } from '../../types'
import {
  sensorConditions,
  pagination,
  sensorPeriod,
  whereConditions,
} from '../../utils'

const AnimalWeights: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { AnimalWeight, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  var whereLocal = {}
  var conditionsDevice = {}

  // Verificando se o campo device.local foi requisitado
  if (args.where) {
    whereLocal = { local: args.where['local'] }
    // Verificando os IDs dos devices da localizacao solicitada
    const devices = await Device.find(whereLocal).select('_id')
    // Montando a query com os Ids do device.local requisitado
    conditionsDevice = whereConditions(devices)
  }

  return pagination(
    AnimalWeight.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

export default {
  AnimalWeights,
}

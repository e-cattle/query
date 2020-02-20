import { Resolver, FindMethodsArgs } from '../../types'
import {
  sensorConditions,
  pagination,
  sensorPeriod,
  sensorValue,
  whereConditions
} from '../../utils'

const AirTemperatures: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { AirTemperature, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
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
    AirTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const RelativeHumidities: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { RelativeHumidity, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
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
    RelativeHumidity.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

export default {
  AirTemperatures,
  RelativeHumidities,
}

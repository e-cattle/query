import { Resolver, FindMethodsArgs } from '../../types'
import {
  sensorConditions,
  pagination,
  sensorPeriod,
  whereConditions,
  sensorValue,
} from '../../utils'

const Accelerometer: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Accelerometer, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
  // console.log('conditionsValue: ', JSON.stringify(conditionsValue, null, 4))
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
    Accelerometer.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const AnimalSpeed: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { AnimalSpeed, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
  // console.log('conditionsValue: ', JSON.stringify(conditionsValue, null, 4))
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
    AnimalSpeed.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Gyroscope: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Gyroscope, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
  // console.log('conditionsValue: ', JSON.stringify(conditionsValue, null, 4))
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
    Gyroscope.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Magnetometer: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Magnetometer, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  const conditionsValue = sensorValue(args.value)
  // console.log('conditionsValue: ', JSON.stringify(conditionsValue, null, 4))
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
    Magnetometer.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

export default {
  Accelerometer,
  AnimalSpeed,
  Gyroscope,
  Magnetometer
}

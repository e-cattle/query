import { Resolver, FindMethodsArgs } from '../../types'
import {
  sensorConditions,
  pagination,
  sensorPeriod,
  sensorValue,
  whereConditions
} from '../../utils'

const AirTemperature: Resolver<FindMethodsArgs> = async (
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

const BlackGlobeTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { BlackGlobeTemperature, Device } = db
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
    BlackGlobeTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Ch4: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Ch4, Device } = db
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
    Ch4.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Co2: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Co2, Device } = db
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
    Co2.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const DewPointTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { DewPointTemperature, Device } = db
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
    DewPointTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const DryBulbTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { DryBulbTemperature, Device } = db
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
    DryBulbTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Ph: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Ph, Device } = db
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
    Ph.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const Precipitation: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { Precipitation, Device } = db
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
    Precipitation.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const RelativeHumidity: Resolver<FindMethodsArgs> = async (
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

const SoilMoisture: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { SoilMoisture, Device } = db
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
    SoilMoisture.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const SoilNitrogen: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { SoilNitrogen, Device } = db
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
    SoilNitrogen.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const SoilTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { SoilTemperature, Device } = db
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
    SoilTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const SoilWaterPotencial: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { SoilWaterPotencial, Device } = db
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
    SoilWaterPotencial.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const SolarRadiation: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { SolarRadiation, Device } = db
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
    SolarRadiation.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const WaterTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { WaterTemperature, Device } = db
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
    WaterTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const WetBulbTemperature: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { WetBulbTemperature, Device } = db
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
    WetBulbTemperature.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

const WindSpeed: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { WindSpeed, Device } = db
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
    WindSpeed.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

export default {
  AirTemperature,
  BlackGlobeTemperature,
  Ch4,
  Co2,
  DewPointTemperature,
  DryBulbTemperature,
  Ph,
  Precipitation,
  RelativeHumidity,
  SoilMoisture,
  SoilNitrogen,
  SoilTemperature,
  SoilWaterPotencial,
  SolarRadiation,
  WaterTemperature,
  WetBulbTemperature,
  WindSpeed
}

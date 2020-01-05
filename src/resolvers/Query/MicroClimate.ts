import { Resolver, PagesAndOrderByArgs } from '../../types'
import { sensorConditions, pagesAndSort, sensorPeriod, whereConditions } from '../../utils'

const AirTemperatures: Resolver<PagesAndOrderByArgs> = async (_, args, { db }) => {
  const { AirTemperature, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  var whereLocal = {}
  var conditionsDevice = {}
  
  // Verificando se o campo device.local foi requisitado
  if(args.where){
    whereLocal = { local: args.where['local'] }
    // Verificando os IDs dos devices da localizacao solicitada
    const devices = await Device.find(whereLocal).select("_id")
    // Montando a query com os Ids do device.local requisitado
    conditionsDevice = whereConditions(devices)
  } 

  return pagesAndSort(
    AirTemperature.find({ 
      $and: [
        { $and: [conditionsQuery, conditionsPeriod] },
        conditionsDevice
      ]
    }).populate('device'),
    args,
  )
}

const RelativeHumidities: Resolver<PagesAndOrderByArgs> = async (_, args, { db }) => {
  const { RelativeHumidity, Device } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  var whereLocal = {}
  var conditionsDevice = {}
  
  // Verificando se o campo device.local foi requisitado
  if(args.where){
    whereLocal = { local: args.where['local'] }
    // Verificando os IDs dos devices da localizacao solicitada
    const devices = await Device.find(whereLocal).select("_id")
    // Montando a query com os Ids do device.local requisitado
    conditionsDevice = whereConditions(devices)
  } 

  return pagesAndSort(
    RelativeHumidity.find({ 
      $and: [
        { $and: [conditionsQuery, conditionsPeriod] },
        conditionsDevice
      ]
    }).populate('device'),
    args,
  )
}
const Devices: Resolver<PagesAndOrderByArgs> = async (_, args, { db }) => {
  const { Device } = db

// console.log('devices: ', JSON.stringify(data, null, 4))

  return Device.find()

  // return pagesAndSort(
  //   Device.find(),
  //   args,
  // )
}

export default {
  AirTemperatures,
  Devices,
  RelativeHumidities,
}

import { Resolver, FindMethodsArgs } from '../../types'
import {
  sensorConditions,
  pagination,
  sensorPeriod,
  whereConditions,
  sensorValue,
} from '../../utils'

const GeographicCoordinates: Resolver<FindMethodsArgs> = async (
  _,
  args,
  { db },
) => {
  const { GeographicCoordinate, Device } = db
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

  // return GeographicCoordinate.find({ 
  //     "value.latitude": { $eq: 0 }
  //   })
  return pagination(
    GeographicCoordinate.find({
      $and: [{ $and: [conditionsQuery, conditionsPeriod, conditionsValue] }, conditionsDevice],
    }).populate('device'),
    args,
  )
}

export default {
  GeographicCoordinates,
}

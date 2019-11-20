import { Resolver, PagesAndOrderByArgs } from '../types'
import { sensorConditions, pagesAndSort, sensorPeriod } from '../utils'

const AirTemperatures: Resolver<PagesAndOrderByArgs> = (_, args, { db }) => {
  const { AirTemperature } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  return pagesAndSort(
    AirTemperature.find({ $and: [conditionsQuery, conditionsPeriod] }),
    args,
  )
}

const RelativeHumidities: Resolver<PagesAndOrderByArgs> = (_, args, { db }) => {
  const { RelativeHumidity } = db
  const conditionsQuery = sensorConditions(args.query)
  const conditionsPeriod = sensorPeriod(args.period)
  // console.log('conditionsPeriod ', JSON.stringify(conditionsPeriod, null, 4))
  return pagesAndSort(
    RelativeHumidity.find({ $and: [conditionsQuery, conditionsPeriod] }),
    args,
  )
}

export default {
  AirTemperatures,
  RelativeHumidities,
}

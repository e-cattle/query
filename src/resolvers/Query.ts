import { Resolver, PagesAndOrderByArgs } from '../types'
import { sensorConditions, pagesAndSort } from '../utils'

const AirTemperatures: Resolver<PagesAndOrderByArgs> = (_, args, { db }) => {
  const { AirTemperature } = db
  const conditionsWhere = sensorConditions(args.where)
  return pagesAndSort(AirTemperature.find(conditionsWhere), args)
}

const RelativeHumidities: Resolver<PagesAndOrderByArgs> = (_, args, { db }) => {
  const { RelativeHumidity } = db
  const conditionsWhere = sensorConditions(args.where)
  return pagesAndSort(RelativeHumidity.find(conditionsWhere), args)
}

export default {
  AirTemperatures,
  RelativeHumidities,
}

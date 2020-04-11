import { Types } from 'mongoose'
import {
  Resolver, BodyTemperatureCreateArgs
} from '../types'

const createBodyTemperature: Resolver<BodyTemperatureCreateArgs> = async (_, args, { db }) => {
  const { BodyTemperature } = db
  const { data } = args
  const bodyTemperature = new BodyTemperature(data)
  return bodyTemperature.save()
}

export default {
  createBodyTemperature
}
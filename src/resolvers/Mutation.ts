import { Types } from 'mongoose'
import {
  Resolver, BodyTemperatureCreateArgs, MutationType
} from '../types'

const createBodyTemperature: Resolver<BodyTemperatureCreateArgs> = async (_, args, { db, pubsub }) => {
  const { BodyTemperature } = db
  const { data } = args
  const bodyTemperature = await new BodyTemperature(data).save()
  pubsub.publish('BODYTEMPERATURE_CREATED', {
    mutation: MutationType.CREATED,
    node: bodyTemperature
  })
  return bodyTemperature
}

export default {
  createBodyTemperature
}
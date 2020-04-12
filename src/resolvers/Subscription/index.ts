import { Resolver, Sensor, SubscriptionResolver, SubscriptionArgs, SubscriptionPayload } from '../../types'
import { withFilter } from 'graphql-yoga'

const bodyTemperatureSubscribeFn: Resolver<SubscriptionArgs> = (_, args, ctx) => {
  const { mutationIn } = args.where
  const { pubsub } = ctx
  const channels = mutationIn.map(m => `BODYTEMPERATURE_${m}`)
  return pubsub.asyncIterator(channels)
}

const bodyTemperatureFilternFn: Resolver<SubscriptionArgs, SubscriptionPayload<Sensor>> = (payload, args, ctx) => {
  return payload.node.value > 36
}

const  BodyTemperature: SubscriptionResolver<Sensor> = {
  subscribe: withFilter(bodyTemperatureSubscribeFn, bodyTemperatureFilternFn),
  resolve: payload => {
    return payload
  }
}

export default {
   BodyTemperature,
}
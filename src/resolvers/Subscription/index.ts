import { Sensor, SubscriptionResolver } from '../../types'

const  BodyTemperature: SubscriptionResolver<Sensor> = {
  subscribe: (_, args, ctx) => {
    const { mutationIn } = args.where
    const { pubsub } = ctx
    const channels = mutationIn.map(m => `BODYTEMPERATURE_${m}`)
    return pubsub.asyncIterator(channels)
  },
  resolve: payload => payload,
}

export default {
   BodyTemperature,
}
import {
  Resolver,
  Sensor,
  SubscriptionResolver,
  SubscriptionArgs,
  SubscriptionPayload,
} from '../../types'
import { withFilter } from 'graphql-yoga'
import { subscribeValueConditions } from '../../utils'

const bodyTemperatureSubscribeFn: Resolver<SubscriptionArgs> = (
  _,
  args,
  ctx,
) => {
  const { pubsub } = ctx
  const channels = 'body-temperature_CREATED'
  return pubsub.asyncIterator(channels)
}

const bodyTemperatureFilternFn: Resolver<
  SubscriptionArgs,
  SubscriptionPayload<Sensor>
> = (payload, args, ctx) => {
  const { operation } = subscribeValueConditions(args.value)
  return eval(payload.node.value + operation)
}

const BodyTemperature: SubscriptionResolver<Sensor> = {
  subscribe: withFilter(bodyTemperatureSubscribeFn, bodyTemperatureFilternFn),
  resolve: payload => {
    return payload
  },
}

export default {
  BodyTemperature,
}

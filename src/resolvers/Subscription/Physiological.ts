import {
  Resolver,
  Sensor,
  SubscriptionResolver,
  SubscriptionArgs,
  SubscriptionPayload,
} from '../../types'
import { withFilter } from 'graphql-yoga'
import { subscribeValueConditions } from '../../utils'

const animalWeightSubscribeFn: Resolver<SubscriptionArgs> = (
  _,
  args,
  ctx,
) => {
  const { pubsub } = ctx
  const channels = 'animal-weight_CREATED'
  return pubsub.asyncIterator(channels)
}

const animalWeightFilternFn: Resolver<
  SubscriptionArgs,
  SubscriptionPayload<Sensor>
> = (payload, args, ctx) => {
  const { operation } = subscribeValueConditions(args.value)
  return eval(payload.node.value + operation)
}

const AnimalWeight: SubscriptionResolver<Sensor> = {
  subscribe: withFilter(animalWeightSubscribeFn, animalWeightFilternFn),
  resolve: payload => {
    return payload
  },
}

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

const retalTemperatureSubscribeFn: Resolver<SubscriptionArgs> = (
  _,
  args,
  ctx,
) => {
  const { pubsub } = ctx
  const channels = 'retal-temperature_CREATED'
  return pubsub.asyncIterator(channels)
}

const retalTemperatureFilternFn: Resolver<
  SubscriptionArgs,
  SubscriptionPayload<Sensor>
> = (payload, args, ctx) => {
  const { operation } = subscribeValueConditions(args.value)
  return eval(payload.node.value + operation)
}

const RetalTemperature: SubscriptionResolver<Sensor> = {
  subscribe: withFilter(retalTemperatureSubscribeFn, retalTemperatureFilternFn),
  resolve: payload => {
    return payload
  },
}

export default {
  AnimalWeight,
  BodyTemperature,
  RetalTemperature,
}

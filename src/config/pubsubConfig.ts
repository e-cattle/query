import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis, { RedisOptions } from 'ioredis'
import { REDIS_HOST } from './environment'

const options: RedisOptions = {
  host: REDIS_HOST,
}
const publisher = new Redis(options)
const subscriber = new Redis(options)

const pubsub = new RedisPubSub({
  publisher,
  subscriber,
})

export { pubsub }

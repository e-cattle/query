const { NODE_ENV = 'development' } = process.env
const settings = require('./' + NODE_ENV + '.json')

const MONGO_URI = process.env.DB_CLOUD || settings.db
const REDIS_HOST = process.env.REDIS_CLOUD || settings.redis

export { MONGO_URI, REDIS_HOST }

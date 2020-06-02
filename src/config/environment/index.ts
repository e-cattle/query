const { NODE_ENV = 'development' } = process.env
const settings = require('./' + NODE_ENV + '.json')

const MONGO_URI = settings.db
const { REDIS_HOST = 'localhost' } = settings.redis

export { MONGO_URI, REDIS_HOST }
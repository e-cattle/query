import mongoose from 'mongoose'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import { Models } from '../types'
import { MONGO_URI } from '../config/environment'

const connect = (): Promise<typeof mongoose> =>
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
const models: Models = Object.create({})

const directories = [ __dirname + '/general', __dirname + '/sensors' ]
directories.forEach(dir =>{
  readdirSync(dir)
    .forEach(fileName => {
      const model = require(resolve(dir, fileName)).default
      const modelName = fileName
        .split('.')
        .shift()
        .replace('Model', '')
      models[modelName] = model
    })
})
export { connect, models }

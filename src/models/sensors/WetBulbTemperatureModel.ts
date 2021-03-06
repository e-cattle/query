'use strict'
import { Schema, model } from 'mongoose'
import { WetBulbTemperatureDocument } from '../../types'

const wetBulbTemperatureSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    max: 40,
    validate: /^\d{0,2}(\.\d{1,2})?$/,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  resource: {
    type: String,
    required: false
  },
  storaged: {
    type: Date,
    default: Date.now()
  },
})

export default model<WetBulbTemperatureDocument>(
  'WetBulbTemperature',
  wetBulbTemperatureSchema,
  'type-wet-bulb-temperature',
)

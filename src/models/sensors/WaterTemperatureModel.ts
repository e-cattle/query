'use strict'
import { Schema, model } from 'mongoose'
import { WaterTemperatureDocument } from '../../types'

const waterTemperatureSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    max: 100,
    validate: /^\d{0,3}(\.\d{1,2})?$/,
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

export default model<WaterTemperatureDocument>(
  'WaterTemperature',
  waterTemperatureSchema,
  'type-water-temperature',
)

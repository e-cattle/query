'use strict'
import { Schema, model } from 'mongoose'
import { RetalTemperatureDocument } from '../../types'

const retalTemperatureSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 30,
    max: 45,
    validate: /^-?\d{0,2}(\.\d{1,2})?$/,
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

export default model<RetalTemperatureDocument>(
  'RetalTemperature',
  retalTemperatureSchema,
  'type-retal-temperature',
)

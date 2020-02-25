'use strict'
import { Schema, model } from 'mongoose'
import { DewPointTemperatureDocument } from '../../types'

const dewPointTemperatureSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: -50,
    max: 100,
    validate: /^-?\d{0,3}(\.\d{1,2})?$/,
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

export default model<DewPointTemperatureDocument>(
  'DewPointTemperature',
  dewPointTemperatureSchema,
  'type-dew-point-temperature',
)

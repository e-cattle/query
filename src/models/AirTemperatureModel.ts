'use strict'
import { Schema, model } from 'mongoose'
import { AirTemperatureDocument } from '../types'

const airTemperature = new Schema(
  {
    device: {
      type: Schema.Types.ObjectId,
      ref: 'Device',
      required: true,
    },
    value: {
      type: Number,
      min: -99,
      max: 1999,
      validate: /^-?\d{0,4}(\.\d{1,2})?$/,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    resource: {
      type: String,
      required: false,
    },
    storaged: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'type-air-temperature' },
)

export default model<AirTemperatureDocument>(
  'type-air-temperature',
  airTemperature,
)

'use strict'
import { Schema, model } from 'mongoose'
import { AirTemperatureDocument } from '../../types'

const airTemperatureSchema = new Schema(
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
)
export default model<AirTemperatureDocument>('AirTemperature', airTemperatureSchema, 'type-air-temperature')

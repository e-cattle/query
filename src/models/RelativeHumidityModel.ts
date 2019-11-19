'use strict'
import { Schema, model } from 'mongoose'
import { RelativeHumidityDocument } from '../types'

const relativeHumidity = new Schema(
  {
    device: {
      type: Schema.Types.ObjectId,
      ref: 'Device',
      required: true,
    },
    value: {
      type: Number,
      min: 0,
      max: 100,
      validate: /^\d{0,3}(\.\d{1,2})?$/,
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
  { collection: 'type-relative-humidity' },
)

// module.exports = model('type-relative-humidity', relativeHumidity)
export default model<RelativeHumidityDocument>(
  'type-relative-humidity',
  relativeHumidity,
)

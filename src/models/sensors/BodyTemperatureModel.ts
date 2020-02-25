'use strict'
import { Schema, model } from 'mongoose'
import { BodyTemperatureDocument } from '../../types'

const bodyTemperatureSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 20,
    max: 50,
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
  }
})

export default model<BodyTemperatureDocument>(
  'BodyTemperature',
  bodyTemperatureSchema,
  'type-body-temperature',
)

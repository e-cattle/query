'use strict'
import { Schema, model } from 'mongoose'
import { WindSpeedDocument } from '../../types'

const valueSchema = new Schema({
  speed: {
    type: Number,
    min: 0,
    max: 125,
    validate: /^\d{0,3}(\.\d{1,2})?$/,
    required: true
  },
  direction: {
    type: String,
    required: false
  },
})

const windSpeedSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: [valueSchema],
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

export default model<WindSpeedDocument>(
  'WindSpeed',
  windSpeedSchema,
  'type-wind-speed',
)

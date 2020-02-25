'use strict'
import { Schema, model } from 'mongoose'
import { Co2Document } from '../../types'

const co2Schema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
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

export default model<Co2Document>(
  'Co2',
  co2Schema,
  'type-co2',
)

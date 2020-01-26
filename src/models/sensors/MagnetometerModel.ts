'use strict'
import { Schema, model } from 'mongoose'
import { MagnetometerDocument } from '../../types'

const valueSchema = new Schema({
  mx: {
    type: Number,
    required: false,
  },
  my: {
    type: Number,
    required: false,
  },
  mz: {
    type: Number,
    required: false,
  },
})

const magnetometerSchema = new Schema({
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
  }
})

export default model<MagnetometerDocument>(
  'Magnetometer',
  magnetometerSchema,
  'type-magnetometer',
)

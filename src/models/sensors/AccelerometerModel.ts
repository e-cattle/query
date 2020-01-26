'use strict'
import { Schema, model } from 'mongoose'
import { AccelerometerDocument } from '../../types'

const valueSchema = new Schema({
  ax: {
    type: Number,
    required: false,
  },
  ay: {
    type: Number,
    required: false,
  },
  az: {
    type: Number,
    required: false,
  },
})

const accelerometerSchema = new Schema({
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

export default model<AccelerometerDocument>(
  'Accelerometer',
  accelerometerSchema,
  'type-accelerometer',
)

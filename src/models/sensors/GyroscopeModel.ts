'use strict'
import { Schema, model } from 'mongoose'
import { GyroscopeDocument } from '../../types'

const valueSchema = new Schema({
  gx: {
    type: Number,
    required: false,
  },
  gy: {
    type: Number,
    required: false,
  },
  gz: {
    type: Number,
    required: false,
  },
})

const gyroscopeSchema = new Schema({
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

export default model<GyroscopeDocument>(
  'Gyroscope',
  gyroscopeSchema,
  'type-gyroscope',
)

'use strict'
import { Schema, model } from 'mongoose'
import { RespiratoryFrequencyDocument } from '../../types'

const respiratoryFrequencySchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    max: 200,
    validate: /^\d{0,3}?$/,
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

export default model<RespiratoryFrequencyDocument>(
  'RespiratoryFrequency',
  respiratoryFrequencySchema,
  'type-respiratory-frequency',
)

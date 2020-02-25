'use strict'
import { Schema, model } from 'mongoose'
import { PrecipitationDocument } from '../../types'

const precipitationSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    validate: /^\d+?$/,
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

export default model<PrecipitationDocument>(
  'Precipitation',
  precipitationSchema,
  'type-precipitation',
)

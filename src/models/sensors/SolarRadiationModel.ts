'use strict'
import { Schema, model } from 'mongoose'
import { SolarRadiationDocument } from '../../types'

const solarRadiationSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    max: 1500,
    validate: /^\d{0,4}?$/,
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

export default model<SolarRadiationDocument>(
  'SolarRadiation',
  solarRadiationSchema,
  'type-solar-radiation',
)

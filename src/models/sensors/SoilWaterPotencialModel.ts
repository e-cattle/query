'use strict'
import { Schema, model } from 'mongoose'
import { SoilWaterPotencialDocument } from '../../types'

const soilWaterPotencialSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
    min: 0,
    max: 100,
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

export default model<SoilWaterPotencialDocument>(
  'SoilWaterPotencial',
  soilWaterPotencialSchema,
  'type-soil-water-potencial',
)

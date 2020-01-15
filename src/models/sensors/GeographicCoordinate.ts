'use strict'
import { Schema, model } from 'mongoose'
import { GeographicCoordinateDocument } from '../../types'

const valueSchema = new Schema({
  altitude: {
    type: Number,
    required: false,
  },
  latitude: {
    type: Number,
    min: -90,
    max: 90,
    validate: /^-?\d{0,2}(\.\d{1,6})?$/,
    required: false,
  },
  longitude: {
    type: Number,
    min: -180,
    max: 180,
    validate: /^-?\d{0,3}(\.\d{1,6})?$/,
    required: false,
  },
})

const geographicCoordinateSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true,
  },
  value: [valueSchema],
  date: {
    type: Date,
    required: true,
  },
  resource: {
    type: String,
    required: false,
  },
  storaged: {
    type: Date,
    default: Date.now(),
  },
})
export default model<GeographicCoordinateDocument>(
  'GeographicCoordinate',
  geographicCoordinateSchema,
  'type-geographic-coordinate',
)

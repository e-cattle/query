'use strict'
import { Schema, model } from 'mongoose'
import { GdopDocument } from '../../types'

const valueSchema = new Schema({
   hdop: {
      type: Number,
      min: 0,
      max: 50,
      validate: /^\d{0,2}(\.\d{1,2})?$/,
      required: true
    },
    vdop: {
      type: Number,
      min: 0,
      max: 50,
      validate: /^\d{0,2}(\.\d{1,2})?$/,
      required: true
    },
    pdop: {
      type: Number,
      min: 0,
      max: 50,
      validate: /^\d{0,2}(\.\d{1,2})?$/,
      required: true
    },
    tdop: {
      type: Number,
      min: 0,
      max: 50,
      validate: /^\d{0,2}(\.\d{1,2})?$/,
      required: true
    },
})

const gdopSchema = new Schema({
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

export default model<GdopDocument>(
  'Gdop',
  gdopSchema,
  'type-gdop',
)

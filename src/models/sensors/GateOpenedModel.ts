'use strict'
import { Schema, model } from 'mongoose'
import { GateOpenedDocument } from '../../types'

const gateOpenedSchema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Boolean,
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
  }
})

export default model<GateOpenedDocument>(
  'GateOpened',
  gateOpenedSchema,
  'type-gate-opened',
)

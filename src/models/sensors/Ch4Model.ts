'use strict'
import { Schema, model } from 'mongoose'
import { Ch4Document } from '../../types'

const ch4Schema = new Schema({
  device: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
    required: true
  },
  value: {
    type: Number,
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

export default model<Ch4Document>(
  'Ch4',
  ch4Schema,
  'type-ch4',
)

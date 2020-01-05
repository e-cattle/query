import { Schema, model } from 'mongoose'
import { RelativeHumidityDocument } from '../../types'

const relativeHumiditySchema = new Schema(
  {
    device: {
      type: Schema.Types.ObjectId,
      ref: 'Device',
      required: true,
    },
    value: {
      type: Number,
      min: 0,
      max: 100,
      validate: /^\d{0,3}(\.\d{1,2})?$/,
      required: true,
    },
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
  },
)
export default model<RelativeHumidityDocument>('RelativeHumidity', relativeHumiditySchema, 'type-relative-humidity')

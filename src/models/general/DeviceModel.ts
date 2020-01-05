'use strict'

import { Schema, model } from 'mongoose'
import { DeviceDocument } from '../../types'

const deviceSchema = new Schema(
  {
    enable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    mac: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    version: {
      type: Number,
      required: true,
    },
    sensors: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        label: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    useNestedStrict: true,
  },
)

export default model<DeviceDocument>('Device', deviceSchema)

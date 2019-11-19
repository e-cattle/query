'use strict'

import { Schema, model } from 'mongoose'

const device = new Schema(
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
    timestamps: true,
  },
)

module.exports = model('Device', device)

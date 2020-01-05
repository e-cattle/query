import { Document, Types } from 'mongoose'

export interface Device {
  _id: Types.ObjectId
  enable: boolean
  name: string
  description: string
  local: string
  branch: string
  mac: string
  version: number
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
}

export interface DeviceDocument extends Device, Document {
  _id: Types.ObjectId
}

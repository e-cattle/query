import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface AccelerometerValue {
  _id: Types.ObjectId
  ax: number
  ay: number
  az: number
}

export interface AccelerometerSubdocument
  extends AccelerometerValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface Accelerometer {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<AccelerometerSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface AccelerometerDocument
  extends Accelerometer,
    Document {
  _id: Types.ObjectId
}

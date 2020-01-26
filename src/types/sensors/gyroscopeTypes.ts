import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface GyroscopeValue {
  _id: Types.ObjectId
  gx: number
  gy: number
  gz: number
}

export interface GyroscopeSubdocument
  extends GyroscopeValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface Gyroscope {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<GyroscopeSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface GyroscopeDocument
  extends Gyroscope,
    Document {
  _id: Types.ObjectId
}

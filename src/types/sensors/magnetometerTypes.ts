import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface MagnetometerValue {
  _id: Types.ObjectId
  mx: number
  my: number
  mz: number
}

export interface MagnetometerSubdocument
  extends MagnetometerValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface Magnetometer {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<MagnetometerSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface MagnetometerDocument
  extends Magnetometer,
    Document {
  _id: Types.ObjectId
}

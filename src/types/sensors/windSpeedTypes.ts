import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface WindSpeedValue {
  _id: Types.ObjectId
  speed: number
  direction: string
}

export interface WindSpeedSubdocument
  extends WindSpeedValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface WindSpeed {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<WindSpeedSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface WindSpeedDocument
  extends WindSpeed,
    Document {
  _id: Types.ObjectId
}

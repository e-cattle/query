import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface GdopValue {
  _id: Types.ObjectId
  hdop: number
  vdop: number
  pdop: number
  tdop: number
}

export interface GdopSubdocument
  extends GdopValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface Gdop {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<GdopSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface GdopDocument
  extends Gdop,
    Document {
  _id: Types.ObjectId
}

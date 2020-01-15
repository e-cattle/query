import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface GeographicCoordinateValue {
  _id: Types.ObjectId
  altitude: number
  latitude: number
  longitude: number
}

export interface GeographicCoordinateSubdocument
  extends GeographicCoordinateValue,
    Types.Embedded {
  _id: Types.ObjectId
}

export interface GeographicCoordinate {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: Types.DocumentArray<GeographicCoordinateSubdocument>
  date: string
  resource: string
  storaged: string
}

export interface GeographicCoordinateDocument
  extends GeographicCoordinate,
    Document {
  _id: Types.ObjectId
}

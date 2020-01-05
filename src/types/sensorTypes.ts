import { Document, Types } from 'mongoose'
import { Device } from './deviceTypes'

export interface Sensor {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: number
  date: string
  resource: string
  storaged: string
}

export interface AirTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface RelativeHumidityDocument extends Sensor, Document {
  _id: Types.ObjectId
}

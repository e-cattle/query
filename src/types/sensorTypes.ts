import { Document, Types } from 'mongoose'

export interface Sensor {
  _id: Types.ObjectId
  device: Types.ObjectId
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

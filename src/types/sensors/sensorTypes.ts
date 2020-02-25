import { Document, Types } from 'mongoose'
import { Device } from '../general/deviceTypes'

export interface Sensor {
  _id: Types.ObjectId
  device: Device | Types.ObjectId
  value: number
  date: string
  resource: string
  storaged: string
}

// MicroClimate
export interface AirTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface BlackGlobeTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface Ch4Document extends Sensor, Document {
  _id: Types.ObjectId
}

export interface Co2Document extends Sensor, Document {
  _id: Types.ObjectId
}

export interface DewPointTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface DryBulbTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface PhDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface PrecipitationDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface RelativeHumidityDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface SoilTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface SoilMoistureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface SoilWaterPotencialDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface SoilNitrogenDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface SolarRadiationDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface WaterTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

export interface WetBulbTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

// Physiological
export interface AnimalWeightDocument extends Sensor, Document {
  _id: Types.ObjectId
}

// Behavioral
export interface AnimalSpeedDocument extends Sensor, Document {
  _id: Types.ObjectId
}
export interface BodyTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}
export interface HeartRateDocument extends Sensor, Document {
  _id: Types.ObjectId
}
export interface RespiratoryFrequencyDocument extends Sensor, Document {
  _id: Types.ObjectId
}
export interface RetalTemperatureDocument extends Sensor, Document {
  _id: Types.ObjectId
}

// Contextual
export interface GateOpenedDocument extends Sensor, Document {
  _id: Types.ObjectId
}

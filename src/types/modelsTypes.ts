import { Model } from 'mongoose'
import {
  AirTemperatureDocument,
  AnimalWeightDocument,
  ApplicationDocument,
  DeviceDocument,
  RelativeHumidityDocument,
} from '.'

export interface Models {
  AirTemperature: Model<AirTemperatureDocument>
  AnimalWeight: Model<AnimalWeightDocument>
  Application: Model<ApplicationDocument>
  Device: Model<DeviceDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

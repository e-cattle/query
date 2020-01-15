import { Model } from 'mongoose'
import {
  AirTemperatureDocument,
  AnimalWeightDocument,
  ApplicationDocument,
  DeviceDocument,
  GeographicCoordinateDocument,
  RelativeHumidityDocument,
} from '.'

export interface Models {
  AirTemperature: Model<AirTemperatureDocument>
  AnimalWeight: Model<AnimalWeightDocument>
  Application: Model<ApplicationDocument>
  Device: Model<DeviceDocument>
  GeographicCoordinate: Model<GeographicCoordinateDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

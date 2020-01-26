import { Model } from 'mongoose'
import {
  AccelerometerDocument,
  AirTemperatureDocument,
  AnimalWeightDocument,
  ApplicationDocument,
  DeviceDocument,
  GyroscopeDocument,
  GeographicCoordinateDocument,
  MagnetometerDocument,
  RelativeHumidityDocument,
} from '.'

export interface Models {
  Accelerometer: Model<AccelerometerDocument>
  AirTemperature: Model<AirTemperatureDocument>
  AnimalWeight: Model<AnimalWeightDocument>
  Application: Model<ApplicationDocument>
  Device: Model<DeviceDocument>
  Gyroscope: Model<GyroscopeDocument>
  GeographicCoordinate: Model<GeographicCoordinateDocument>
  Magnetometer: Model<MagnetometerDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

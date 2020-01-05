import { Model } from 'mongoose'
import { AirTemperatureDocument, RelativeHumidityDocument } from '.'
import { ApplicationDocument } from './applicationTypes'
import { DeviceDocument } from './deviceTypes'

export interface Models {
  Application: Model<ApplicationDocument>
  AirTemperature: Model<AirTemperatureDocument>
  Device: Model<DeviceDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

import { Model } from 'mongoose'
import { AirTemperatureDocument, RelativeHumidityDocument } from '.'
import { ApplicationDocument } from './applicationTypes'

export interface Models {
  Application: Model<ApplicationDocument>
  AirTemperature: Model<AirTemperatureDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

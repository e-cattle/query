import { Model } from 'mongoose'
import { AirTemperatureDocument, RelativeHumidityDocument } from '.'

export interface Models {
  AirTemperature: Model<AirTemperatureDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
}

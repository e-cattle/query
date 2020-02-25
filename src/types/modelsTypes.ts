import { Model } from 'mongoose'
import {
  AccelerometerDocument,
  AirTemperatureDocument,
  AnimalSpeedDocument,
  AnimalWeightDocument,
  ApplicationDocument,
  BlackGlobeTemperatureDocument,
  BodyTemperatureDocument,
  Ch4Document,
  Co2Document,
  DewPointTemperatureDocument,
  DryBulbTemperatureDocument,
  DeviceDocument,
  GateOpenedDocument,
  GdopDocument,
  GeographicCoordinateDocument,
  GyroscopeDocument,
  HeartRateDocument,
  MagnetometerDocument,
  PhDocument,
  PrecipitationDocument,
  RelativeHumidityDocument,
  RespiratoryFrequencyDocument,
  RetalTemperatureDocument,
  SoilMoistureDocument,
  SoilNitrogenDocument,
  SoilTemperatureDocument,
  SoilWaterPotencialDocument,
  SolarRadiationDocument,
  WaterTemperatureDocument,
  WetBulbTemperatureDocument,
  WindSpeedDocument,
} from '.'

export interface Models {
  Accelerometer: Model<AccelerometerDocument>
  AirTemperature: Model<AirTemperatureDocument>
  AnimalSpeed: Model<AnimalSpeedDocument>
  AnimalWeight: Model<AnimalWeightDocument>
  BlackGlobeTemperature: Model<BlackGlobeTemperatureDocument>
  Application: Model<ApplicationDocument>
  BodyTemperature: Model<BodyTemperatureDocument>
  Ch4: Model<Ch4Document>
  Co2: Model<Co2Document>
  Device: Model<DeviceDocument>
  DewPointTemperature: Model<DewPointTemperatureDocument>
  DryBulbTemperature: Model<DryBulbTemperatureDocument>
  GateOpened: Model<GateOpenedDocument>
  Gdop: Model<GdopDocument>
  GeographicCoordinate: Model<GeographicCoordinateDocument>
  Gyroscope: Model<GyroscopeDocument>
  HeartRate: Model<HeartRateDocument>
  Magnetometer: Model<MagnetometerDocument>
  Ph: Model<PhDocument>
  Precipitation: Model<PrecipitationDocument>
  RelativeHumidity: Model<RelativeHumidityDocument>
  RespiratoryFrequency: Model<RespiratoryFrequencyDocument>
  RetalTemperature: Model<RetalTemperatureDocument>
  SoilMoisture: Model<SoilMoistureDocument>
  SoilNitrogen: Model<SoilNitrogenDocument>
  SoilTemperature: Model<SoilTemperatureDocument>
  SoilWaterPotencial: Model<SoilWaterPotencialDocument>
  SolarRadiation: Model<SolarRadiationDocument>
  WaterTemperature: Model<WaterTemperatureDocument>
  WetBulbTemperature: Model<WetBulbTemperatureDocument>
  WindSpeed: Model<WindSpeedDocument>
}

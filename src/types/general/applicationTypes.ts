import { Document, Types } from 'mongoose'

export interface Application {
  _id: Types.ObjectId
  enable: boolean
  name: string
  user: string
  email: string
  picture: string
}

export interface ApplicationDocument extends Application, Document {
  _id: Types.ObjectId
}

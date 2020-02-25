import { Schema, model } from 'mongoose'
import { ApplicationDocument } from '../../types'

const applicationSchema = new Schema({
  enable: {
    type: Boolean,
    required: true,
    default: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  device: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
    trim: true,
  }
},
{
  timestamps: true,
},
)
export default model<ApplicationDocument>('Application', applicationSchema)

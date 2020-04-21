import { Schema, model } from 'mongoose'
import { ApplicationDocument } from '../../types'
var uuid = require('uuid/v1')

const applicationSchema = new Schema({
    code: {
      type: String,
      required: true,
      unique: true,
      default: uuid,
      index: true
    },
    enable: {
      type: Boolean,
      required: true,
      default: true
    },
    logo: {
      type: String
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    device: {
      type: String,
      required: true,
      trim: true
    },
    user: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    picture: {
      type: String,
      trim: true
    },
    backup: {
      type: Boolean,
      required: true,
      default: false
    },
    cleanup: {
      type: Boolean,
      required: true,
      default: false
    },
    created: {
      type: Date,
      default: Date.now()
    },
    changed: {
      type: Date,
      default: Date.now()
    }
  }
)
export default model<ApplicationDocument>('Application', applicationSchema)

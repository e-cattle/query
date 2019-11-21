import { sign } from 'jsonwebtoken'
import {
  Resolver,
  ApplicationSignUpArgs,
  ApplicationSignInArgs,
} from '../types'
import { CustomError } from '../errors'

const signup: Resolver<ApplicationSignUpArgs> = async (_, args, { db }) => {
  const { Application } = db
  const { data } = args

  const application = await new Application({
    ...data,
  }).save()

  const { _id: sub, name } = application
  const token = sign({ sub, name }, process.env.JWT_SECRET)

  return { token, application }
}

const signin: Resolver<ApplicationSignInArgs> = async (_, args, { db }) => {
  const { Application } = db
  const { email } = args.data
  const error = new CustomError(
    'Invalid Credentials',
    'INVALID_CREDENTIALS_ERROR',
  )

  const app = await Application.findOne({ email })

  console.log('app.email', app.email)
  if (!app.enable) {
    throw error
  }
  const { _id: sub, name } = app
  const token = sign({ sub, name }, process.env.JWT_SECRET)

  return { token, app }
}

export default {
  signup,
  signin,
}

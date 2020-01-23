import { Resolver, FindMethodsArgs } from '../../types'

const Devices: Resolver<FindMethodsArgs> = async (_, args, { db }) => {
  const { Device } = db

  // console.log('devices: ', JSON.stringify(data, null, 4))

  return Device.find()

  // return pagination(
  //   Device.find(),
  //   args,
  // )
}

export default {
  Devices,
}

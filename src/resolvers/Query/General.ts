import { Resolver, PagesAndOrderByArgs } from '../../types'

const Devices: Resolver<PagesAndOrderByArgs> = async (_, args, { db }) => {
  const { Device } = db

  // console.log('devices: ', JSON.stringify(data, null, 4))

  return Device.find()

  // return pagesAndSort(
  //   Device.find(),
  //   args,
  // )
}

export default {
  Devices,
}

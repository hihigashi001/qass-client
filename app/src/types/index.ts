export type IUser = {
  id: string
  qrImagePath: string
  department: string
  name: string
  status: IUserStatus
  password: string
}

export type IProduct = {
  id: string
  imagePath: string
  name: string
  maker: string
  model: string
  accessories: string[]
  note: string
  category: string
}

export type IAsset = {
  id: string
  qrImagePath: string
  simId: string
  note: string
  productId: IProduct
  userId: IUser
  buyDate: string
  status: IAssetStatus
}

export type IRentalHistory = {
  id: string
  userId: string
  assetId: string
  date: string
  status: IAssetStatus
}

export type IAssetStatus = 'broken' | 'active' | 'inActive' | 'maintenance'
export type IUserStatus = 'enrolled' | 'retired' | 'suspended'

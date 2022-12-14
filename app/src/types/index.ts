export interface IUser {
  id: string
  qrImagePath: string
  department: string
  name: string
  status: IUserStatus
  password: string
}

export interface IProduct {
  id: string
  imagePath: string
  name: string
  maker: string
  model: string
  accessories: string[]
  note: string
  category: string
}

export interface IAsset {
  id: string
  qrImagePath: string
  simId: string
  note: string
  productId: IProduct
  userId: IUser
  buyDate: string
  status: IAssetStatus
}

export interface IRentalHistory {
  id: string
  userId: string
  assetId: string
  date: string
  status: IAssetStatus
}



export type IAssetStatus = 'broken' | 'active' | 'inActive' | 'maintenance'
export type IUserStatus = 'enrolled' | 'retired' | 'suspended'

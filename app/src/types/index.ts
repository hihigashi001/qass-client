export interface IUser {
  id: string
  qrImagePath: string
  department: string
  name: string
  status: UserStatus
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
  status: AssetStatus
}

export interface IRentalHistory {
  id: string
  userId: string
  assetId: string
  date: string
  status: AssetStatus
}



export type AssetStatus = 'broken' | 'active' | 'inActive' | 'maintenance'
export type UserStatus = 'enrolled' | 'retired' | 'suspended'

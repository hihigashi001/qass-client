export type UserType = {
  id: string
  qrImagePath: string
  department: string
  name: string
  status: UserStatusType
  password: string
}

export type ProductType = {
  id: string
  imagePath: string
  name: string
  maker: string
  model: string
  accessories: string[]
  note: string
  category: string
}

export type AssetType = {
  id: string
  qrImagePath: string
  simId: string
  note: string
  productId: ProductType
  userId: UserType
  buyDate: string
  status: AssetStatusType
}

export type RentalHistoryType = {
  id: string
  userId: string
  assetId: string
  date: string
  status: AssetStatusType
}

export type AssetStatusType = 'broken' | 'active' | 'inActive' | 'maintenance'
export type UserStatusType = 'enrolled' | 'retired' | 'suspended'

import create from 'zustand'
import { AssetType, ProductType, UserType } from 'src/types'

type Store = {
  isShowModal: boolean
  detailData: AssetType
}
type Handlers = {
  onChange: (obj: AssetType) => void
  changeShowModal: () => void
}

const InitProduct: ProductType = {
  id: '',
  imagePath: '',
  name: '',
  maker: '',
  model: '',
  accessories: [],
  note: '',
  category: '',
}
const InitUser: UserType = {
  id: '',
  qrImagePath: '',
  department: '',
  name: '',
  status: 'suspended',
  password: '',
}
const initialState: Store = {
  isShowModal: false,
  detailData: {
    id: '',
    qrImagePath: '',
    simId: '',
    note: '',
    productId: InitProduct,
    userId: InitUser,
    buyDate: '',
    status: 'maintenance',
  },
}

const statusStore = create<Store>(() => initialState)

export const useDetail = () => {
  const { isShowModal, detailData } = statusStore()

  const useDetailHander: Handlers = {
    onChange: (objct) => {
      statusStore.setState({ detailData: objct })
      statusStore.setState({ isShowModal: !isShowModal })
    },
    changeShowModal: () => {
      statusStore.setState({ isShowModal: !isShowModal })
    },
  }

  return { isShowModal, detailData, useDetailHander }
}

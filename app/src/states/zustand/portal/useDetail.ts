import create from 'zustand'
import { IAsset, IProduct, IUser } from 'src/types'

type Store = {
  isShowModal: boolean
  detailData: IAsset
}
type Handlers = {
  onChange: (obj: IAsset) => void
  changeShowModal: () => void
}

const InitProduct: IProduct = {
  id: '',
  imagePath: '',
  name: '',
  maker: '',
  model: '',
  accessories: [],
  note: '',
  category: '',
}
const InitUser: IUser = {
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

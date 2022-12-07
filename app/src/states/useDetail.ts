import create from 'zustand'
import { IAsset, ICategory, IUser } from '@states/types'

type Store = {
  isShowModal: boolean
  detailData: IAsset
}
type Handlers = {
  onChange: (obj: IAsset) => void
  changeShowModal: () => void
}

const InitCategory: ICategory = {
  id: '',
  imagePath: '',
  name: '',
  maker: '',
  model: '',
  accessories: [],
  note: '',
}
const InitUser: IUser = {
  id: '',
  qrImagePath: '',
  department: '',
  name: '',
  status: '',
  password: '',
}
const initialState: Store = {
  isShowModal: false,
  detailData: {
    id: '',
    qrImagePath: '',
    simId: '',
    note: '',
    categoryId: InitCategory,
    userId: InitUser,
    buyDate: '',
    status: '',
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

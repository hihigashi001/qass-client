import create from 'zustand'
import { useSearch } from '@states/useSearch'

type Store = {
  isOpenModal: boolean
  resultData: string
  whichModal: 'assetValue' | 'userValue'
}
type Handlers = {
  changeIsOpenModal: () => void
  changeResultData: (value: string) => void
  chanageWhichModal: (value: 'assetValue' | 'userValue') => void
  onClickSubmit: () => void
}

const initialState: Store = {
  isOpenModal: false,
  resultData: '',
  whichModal: 'assetValue',
}
const statusStore = create<Store>(() => initialState)

export const useQrscan = () => {
  const { isOpenModal, resultData, whichModal } = statusStore()
  const { useSearchHandlers } = useSearch()

  const useQrscanHandlers: Handlers = {
    changeIsOpenModal: () => {
      statusStore.setState({ isOpenModal: !isOpenModal })
    },
    changeResultData: (value) => {
      statusStore.setState({ resultData: value })
    },
    chanageWhichModal: (value) => {
      statusStore.setState({ whichModal: value })
    },
    onClickSubmit: () => {
      statusStore.setState({ isOpenModal: !isOpenModal })
      useSearchHandlers.changeQrscanStatus(resultData, whichModal)
    },
  }

  return { isOpenModal, resultData, whichModal, useQrscanHandlers }
}

import create from 'zustand'
import { useRentalForm } from '@states/zustand/portal/useRentalForm'

type Store = {
  isOpenModal: boolean
  resultData: string
  whichModal: 'assetValue' | 'userValue'
}
type Handlers = {
  changeOpenModal: () => void
  changeCloseModal: () => void
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

export const useQrscanRentalForm = () => {
  const { isOpenModal, resultData, whichModal } = statusStore()
  const { useRentalFormHandlers } = useRentalForm()

  const useQrscanHandlers: Handlers = {
    changeOpenModal: () => {
      statusStore.setState({ isOpenModal: true })
    },
    changeCloseModal: () => {
      statusStore.setState(initialState)
    },
    changeResultData: (value) => {
      useRentalFormHandlers.changeQrscanStatus(value, whichModal)
      statusStore.setState(initialState)
    },
    chanageWhichModal: (value) => {
      statusStore.setState({ whichModal: value })
    },
    onClickSubmit: () => {
      useRentalFormHandlers.changeQrscanStatus(resultData, whichModal)
      statusStore.setState(initialState)
    },
  }

  return { isOpenModal, resultData, whichModal, useQrscanHandlers }
}

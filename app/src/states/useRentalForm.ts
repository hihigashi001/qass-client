import create from 'zustand'

type Store = {
  isOpen: boolean
  assetValue: string
  userValue: string
}
type Handers = {
  changeIsOpen: () => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeQrscanStatus: (value: string, which: 'assetValue' | 'userValue') => void
  onClickClear: () => void
  onClickSubmit: (status: 'broken' | 'active' | 'inActive') => void
}

const initialState: Store = {
  isOpen: false,
  assetValue: '',
  userValue: '',
}
const statusStore = create<Store>(() => initialState)

export const useRentalForm = () => {
  const { isOpen, assetValue, userValue } = statusStore()

  const useRentalFormHandlers: Handers = {
    changeIsOpen: () => {
      statusStore.setState({ isOpen: !isOpen })
    },
    changeInputStatus: (e) => {
      statusStore.setState({ [e.target.name]: e.target.value })
    },
    changeQrscanStatus: (value, which) => {
      statusStore.setState({ [which]: value })
    },
    onClickClear: () => {
      statusStore.setState({
        assetValue: '',
        userValue: '',
      })
    },
    onClickSubmit: (status) => {},
  }

  return { isOpen, assetValue, userValue, useRentalFormHandlers }
}

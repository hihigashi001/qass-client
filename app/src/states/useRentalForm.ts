import create from 'zustand'

type Store = {
  isOpen: boolean
}
type Handers = {
  changeIsOpen: () => void
}

const initialState: Store = {
  isOpen: false,
}
const statusStore = create<Store>(() => initialState)

export const useRentalForm = () => {
    const { isOpen } = statusStore()

    const useReantalFormHandlers: Handers = {
        changeIsOpen: () => {
            statusStore.setState({ isOpen: !isOpen })
        }
    }
    
    return { isOpen, useReantalFormHandlers }
}
import { useEffect } from 'react'
import create from 'zustand'
import { useAssets } from '@states/swr/useAssets'
import { AssetType } from 'src/types'

type Store = {
  isOpen: boolean
  assetValue: string
  userValue: string
  status: string
}
export type Handers = {
  changeIsOpen: () => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeQrscanStatus: (value: string, which: 'assetValue' | 'userValue') => void
  onClickClear: () => void
  onClickSubmit: (status: AssetType['status']) => void
}

const initialState: Store = {
  isOpen: false,
  assetValue: '',
  userValue: '',
  status: '',
}
const statusStore = create<Store>(() => initialState)

export const useRentalForm = () => {
  const { isOpen, assetValue, userValue, status } = statusStore()
  const { data } = useAssets()

  useEffect(() => {
    if (data) {
      const statusJudge = assetValue
        ? data.find((x) => x.id == assetValue)
        : undefined
      statusJudge
        ? statusStore.setState({ status: statusJudge.status })
        : statusStore.setState({ status: '' })
    }
  }, [assetValue])

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

  return { isOpen, assetValue, userValue, status, useRentalFormHandlers }
}

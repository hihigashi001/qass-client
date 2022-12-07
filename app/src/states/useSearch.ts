import create from 'zustand'
import { useAssets } from '@states/useAssets'
import { IAsset } from '@states/types'
import { useEffect } from 'react'

type Store = {
  filterData: IAsset[]
  statusValue: string
  assetValue: string
  userValue: string
  isOpen: boolean
}
type Handlers = {
  changeIsOpen: () => void
  changeSelectStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeQrscanStatus: (value: string, which: 'assetValue' | 'userValue') => void
  onClickSearch: () => void
  onClickSearchClear: () => void
}

const initialState: Store = {
  filterData: [],
  statusValue: '',
  assetValue: '',
  userValue: '',
  isOpen: false,
}
const statusStore = create<Store>(() => initialState)

export const useSearch = () => {
  const { filterData, statusValue, assetValue, userValue, isOpen } =
    statusStore()
  const { data } = useAssets()

  useEffect(() => {
    if (data) {
      statusStore.setState({ filterData: data })
    }
  }, [data])

  const useSearchHandlers: Handlers = {
    changeIsOpen: () => {
      statusStore.setState({ isOpen: !isOpen })
    },
    changeSelectStatus: (e) => {
      statusStore.setState({ statusValue: e.target.value })
    },
    changeInputStatus: (e) => {
      statusStore.setState({ [e.target.name]: e.target.value })
    },
    changeQrscanStatus: (value, which) => {
      statusStore.setState({ [which]: value })
    },
    onClickSearch: () => {
      if (data) {
        const statusFilterData = statusValue
          ? data.filter((x) => x.status == statusValue)
          : data
        const AssetFilterData = assetValue
          ? statusFilterData.filter((x) => x.id.indexOf(assetValue) > -1)
          : statusFilterData
        const UserFilterData = userValue
          ? AssetFilterData.filter((x) => x.userId.name.indexOf(userValue) > -1)
          : AssetFilterData

        statusStore.setState({ isOpen: !isOpen })
        statusStore.setState({ filterData: UserFilterData })
      }
    },
    onClickSearchClear: () => {
      statusStore.setState(initialState)
      statusStore.setState({ filterData: data })
    },
  }

  return {
    filterData,
    statusValue,
    assetValue,
    userValue,
    isOpen,
    useSearchHandlers
  }
}

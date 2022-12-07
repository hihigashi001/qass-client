import create from 'zustand'
import { useAssets } from '@states/useAssets'

type Store = {
  statusValue: string
  assetValue: string
  userValue: string
  isOpen: boolean
}
type Handlers = {
  changeIsOpen: () => void
  changeSelectStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  changeQrscanStatus: (value: string, which: "assetValue" | "userValue") => void
  onClickSearch: () => void
  onClickSearchClear: () => void
}

const initialState: Store = {
  statusValue: '',
  assetValue: '',
  userValue: '',
  isOpen: false,
}
const statusStore = create<Store>(() => initialState)

export const useSearch = () => {
  const { statusValue, assetValue, userValue, isOpen } = statusStore()
  const { data, useAssetsHandlers } = useAssets()

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
      useAssetsHandlers.changeSearchFilterData(UserFilterData)
    },
    onClickSearchClear: () => {
      statusStore.setState(initialState)
      useAssetsHandlers.changeSearchFilterData(data)
    },
  }

  return { statusValue, assetValue, userValue, isOpen, useSearchHandlers }
}

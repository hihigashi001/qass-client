import { useEffect } from 'react'
import create from 'zustand'

import { IAsset } from '@states/types'
import { assetListData } from 'src/pages/api/assetsDammyData'

type Store = {
  data: IAsset[]
  searchFilterData: IAsset[]
  isLoading: boolean
  error: string | undefined
}
type Handlers = {
  changeSearchFilterData: (value: IAsset[]) => void
}

const initialState: Store = {
  data: [],
  searchFilterData: [],
  isLoading: false,
  error: undefined,
}
const assetStore = create<Store>(() => initialState)

export const useAssets = () => {
  const { data, searchFilterData, isLoading, error } = assetStore()
  useEffect(() => {
    assetStore.setState({ isLoading: true })
    assetStore.setState({ data: assetListData, searchFilterData: assetListData })
    assetStore.setState({ isLoading: false })
  }, [data])
  const useAssetsHandlers: Handlers = {
    changeSearchFilterData: (value) => {
      assetStore.setState({ searchFilterData: value})
    }
  }

  return {
    data,
    searchFilterData,
    isLoading,
    error,
    useAssetsHandlers
  }
}

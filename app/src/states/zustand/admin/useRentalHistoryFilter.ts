import create from 'zustand'
import { useEffect } from 'react'
import { IRentalHistory } from 'src/types'
import { useRentalHistory } from '@states/swr/useRentalHistory'

type Store = {
  filterData: IRentalHistory[]
  userValue: string
  assetValue: string
  statusValue: string
  dateValue: string
}
type Handlers = {
  changeSelectStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickFilter: () => void
  onClickClear: () => void
}

const initialState = {
  filterData: [],
  userValue: '',
  assetValue: '',
  statusValue: '',
  dateValue: '',
}

const statusStore = create<Store>(() => initialState)

export const useRentalHistoryFilter = () => {
  const { filterData, userValue, assetValue, statusValue, dateValue } =
    statusStore()
  const { data } = useRentalHistory()

  useEffect(() => {
    if (data) {
      statusStore.setState({ filterData: data })
    }
  }, [data])

  const useRentalHistoryFilterHandlers: Handlers = {
    changeSelectStatus: (e) => {
      statusStore.setState({ statusValue: e.target.value })
    },
    changeInputStatus: (e) => {
      statusStore.setState({ [e.target.name]: e.target.value })
    },
    onClickFilter: () => {
      if (data) {
        const statusFilterData = statusValue
          ? data.filter((x) => x.status == statusValue)
          : data
        const AssetFilterData = assetValue
          ? statusFilterData.filter((x) => x.assetId.indexOf(assetValue) > -1)
          : statusFilterData
        const UserFilterData = userValue
          ? AssetFilterData.filter((x) => x.userId.indexOf(userValue) > -1)
          : AssetFilterData
        const DataFilterData = dateValue
          ? UserFilterData.filter((x) => x.date.indexOf(dateValue) > -1)
          : UserFilterData

        statusStore.setState({ filterData: DataFilterData })
      }
    },
    onClickClear: () => {
      statusStore.setState(initialState)
      statusStore.setState({ filterData: data })
    },
  }

  return {
    filterData,
    userValue,
    assetValue,
    statusValue,
    dateValue,
    useRentalHistoryFilterHandlers,
  }
}

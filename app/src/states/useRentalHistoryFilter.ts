import create from 'zustand'
import { useEffect } from 'react'
import { IRentalHistory } from 'src/types'
import { useRentalHistory } from '@states/useRentalHistory'

type Store = {
    filterData: IRentalHistory[]
    userValue: string
    assetValue: string
    statusValue: string
    dateValue: string
}
type Handlers = {}

const initialState = {
    filterData: [],
    userValue: "",
    assetValue: "",
    statusValue: "",
    dateValue: "",
}

const statusStore = create<Store>(() => initialState)

export const useRentalHistoryFilter = () => {
    const { filterData, userValue, assetValue, statusValue, dateValue } = statusStore()
    const { data } = useRentalHistory()

    useEffect(() => {
        if (data) {
            statusStore.setState({ filterData: data})
        }
    }, [data])

}
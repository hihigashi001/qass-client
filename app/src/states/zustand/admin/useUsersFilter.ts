import create from 'zustand'
import { useEffect } from 'react'
import { IUser } from 'src/types'
import { useUsers } from '@states/swr/useUsers'

type Store = {
  filterData: IUser[]
  idValue: string
  departmentValue: string
  nameValue: string
  statusValue: string
}
type Handlers = {
  changeSelectStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickFilter: () => void
  onClickClear: () => void
}

const initialState = {
  filterData: [],
  idValue: '',
  departmentValue: '',
  nameValue: '',
  statusValue: '',
}

const statusStore = create<Store>(() => initialState)

export const useUsersFilter = () => {
  const { filterData, nameValue, departmentValue, statusValue, idValue } =
    statusStore()
  const { data } = useUsers()

  useEffect(() => {
    if (data) {
      statusStore.setState({ filterData: data })
    }
  }, [data])

  const useUsersFilterHandlers: Handlers = {
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
        const AssetFilterData = departmentValue
          ? statusFilterData.filter(
              (x) => x.department.indexOf(departmentValue) > -1
            )
          : statusFilterData
        const nameFilterData = nameValue
          ? AssetFilterData.filter((x) => x.name.indexOf(nameValue) > -1)
          : AssetFilterData
        const idFilterData = idValue
          ? nameFilterData.filter((x) => x.id.indexOf(idValue) > -1)
          : nameFilterData

        statusStore.setState({ filterData: idFilterData })
      }
    },
    onClickClear: () => {
      statusStore.setState(initialState)
      statusStore.setState({ filterData: data })
    },
  }

  return {
    filterData,
    idValue,
    departmentValue,
    nameValue,
    statusValue,
    useUsersFilterHandlers,
  }
}

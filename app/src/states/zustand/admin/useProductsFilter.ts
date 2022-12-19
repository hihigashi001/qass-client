import create from 'zustand'
import { useEffect } from 'react'
import { ProductType } from 'src/types'
import { useProducts } from '@states/swr/useProducts'

type Store = {
  filterData: ProductType[]
  idValue: string
  nameValue: string
  modelValue: string
  categoryValue: string
}
type Handlers = {
  changeInputStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickFilter: () => void
  onClickClear: () => void
}

const initialState = {
  filterData: [],
  idValue: '',
  nameValue: '',
  modelValue: '',
  categoryValue: '',
}

const statusStore = create<Store>(() => initialState)

export const useProductsFilter = () => {
  const { filterData, idValue, nameValue, modelValue, categoryValue } =
    statusStore()
  const { data } = useProducts()

  useEffect(() => {
    if (data) {
      statusStore.setState({ filterData: data })
    }
  }, [data])

  const useProductsFilterHandlers: Handlers = {
    changeInputStatus: (e) => {
      statusStore.setState({ [e.target.name]: e.target.value })
    },
    onClickFilter: () => {
      if (data) {
        const idFilterData = idValue
          ? data.filter((x) => x.id.indexOf(idValue) > -1)
          : data
        const nameFilterData = nameValue
          ? idFilterData.filter((x) => x.name.indexOf(nameValue) > -1)
          : idFilterData
        const modelFilterData = modelValue
          ? nameFilterData.filter((x) => x.model.indexOf(modelValue) > -1)
          : nameFilterData
        const categoryFilterData = categoryValue
          ? modelFilterData.filter(
              (x) => x.category.indexOf(categoryValue) > -1
            )
          : modelFilterData

        statusStore.setState({ filterData: categoryFilterData })
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
    nameValue,
    modelValue,
    categoryValue,
    useProductsFilterHandlers,
  }
}

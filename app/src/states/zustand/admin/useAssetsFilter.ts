import create from 'zustand'
import { useEffect } from 'react'
import { IAsset } from 'src/types'
import { useAssets } from '@states/swr/useAssets'

type Store = {
  filterData: IAsset[]
  idValue: string
  qrImagePathValue: string
  simIdValue: string
  noteValue: string
  productIdValue: string
  userIdValue: string
  buyDateValue: string
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
  qrImagePathValue: '',
  simIdValue: '',
  noteValue: '',
  productIdValue: '',
  userIdValue: '',
  buyDateValue: '',
  statusValue: '',
}

const statusStore = create<Store>(() => initialState)

export const useAssetsFilter = () => {
  const {
    filterData,
    idValue,
    qrImagePathValue,
    simIdValue,
    noteValue,
    productIdValue,
    userIdValue,
    buyDateValue,
    statusValue,
  } = statusStore()
  const { data } = useAssets()

  useEffect(() => {
    if (data) {
      statusStore.setState({ filterData: data })
    }
  }, [data])

  const useAssetsFilterHandlers: Handlers = {
    changeSelectStatus: (e) => {
      statusStore.setState({ statusValue: e.target.value })
    },
    changeInputStatus: (e) => {
      statusStore.setState({ [e.target.name]: e.target.value })
    },
    onClickFilter: () => {
      if (data) {
        const idFilterData = idValue
          ? data.filter((x) => x.id.indexOf(idValue) > -1)
          : data
        const qrImagePathFilterData = qrImagePathValue
          ? idFilterData.filter(
              (x) => x.qrImagePath.indexOf(qrImagePathValue) > -1
            )
          : idFilterData
        const simIdFilterData = simIdValue
          ? qrImagePathFilterData.filter(
              (x) => x.simId.indexOf(simIdValue) > -1
            )
          : qrImagePathFilterData
        const noteFilterData = noteValue
          ? simIdFilterData.filter((x) => x.note.indexOf(noteValue) > -1)
          : simIdFilterData
        const productIdFilterData = productIdValue
          ? noteFilterData.filter(
              (x) => x.productId.id.indexOf(productIdValue) > -1
            )
          : noteFilterData
        const userIdFilterData = userIdValue
          ? productIdFilterData.filter(
              (x) => x.userId.id.indexOf(userIdValue) > -1
            )
          : productIdFilterData
        const buyDateFilterData = buyDateValue
          ? userIdFilterData.filter((x) => x.buyDate.indexOf(buyDateValue) > -1)
          : userIdFilterData
        const statusFilterData = statusValue
          ? buyDateFilterData.filter((x) => x.status.indexOf(statusValue) > -1)
          : buyDateFilterData

        statusStore.setState({ filterData: statusFilterData })
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
    qrImagePathValue,
    simIdValue,
    noteValue,
    productIdValue,
    userIdValue,
    buyDateValue,
    statusValue,
    useAssetsFilterHandlers,
  }
}

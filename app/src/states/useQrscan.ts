import { useEffect, useRef } from 'react'
import create from 'zustand'
import { useSearch } from '@states/useSearch'
import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser'
import { Result } from '@zxing/library'

type Store = {
  isOpenModal: boolean
  resultData: string
  whichModal: 'assetValue' | 'userValue'
}
type Handlers = {
  changeOpenModal: () => void
  changeCloseModal: () => void
  changeResultData: (value: string) => void
  chanageWhichModal: (value: 'assetValue' | 'userValue') => void
  onClickSubmit: () => void
}

const initialState: Store = {
  isOpenModal: false,
  resultData: '',
  whichModal: 'assetValue',
}
const statusStore = create<Store>(() => initialState)

export const useQrscan = () => {
  const { isOpenModal, resultData, whichModal } = statusStore()
  const { useSearchHandlers } = useSearch()

  const controlsRef = useRef<IScannerControls | null>()
  const videoRef = useRef<HTMLVideoElement>(null)

  const onReadQRCode = (result:Result) => {
    useQrscanHandlers.changeResultData(result.getText())
    useQrscanHandlers.onClickSubmit()
  }

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    const codeReader = new BrowserQRCodeReader(undefined, undefined)
    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error, controls) => {
        if (error) {
          return
        }
        if (result) {
          onReadQRCode(result)
        }
        controlsRef.current = controls
      }
    )
    return () => {
      if (!controlsRef.current) {
        return
      }

      controlsRef.current.stop()
      controlsRef.current = null
    }
  }, [onReadQRCode])

  const useQrscanHandlers: Handlers = {
    changeOpenModal: () => {
      statusStore.setState({ isOpenModal: true })
    },
    changeCloseModal: () => {
      statusStore.setState(initialState)
    },
    changeResultData: (value) => {
      useSearchHandlers.changeQrscanStatus(value, whichModal)
      statusStore.setState(initialState)
    },
    chanageWhichModal: (value) => {
      statusStore.setState({ whichModal: value })
    },
    onClickSubmit: () => {
      useSearchHandlers.changeQrscanStatus(resultData, whichModal)
      statusStore.setState(initialState)
    },
  }

  return { isOpenModal, resultData, whichModal, useQrscanHandlers, videoRef }
}

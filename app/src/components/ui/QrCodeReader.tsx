import { useRef, useEffect } from 'react'
import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser'
import { Result } from '@zxing/library'

type Props = {
  onReadQRCode: (text: Result) => void
}

export const QrCodeReader = ({ onReadQRCode }: Props) => {
  const controlsRef = useRef<IScannerControls | null>()
  const videoRef = useRef<HTMLVideoElement>(null)

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

  return (
    <video
      style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
      ref={videoRef}
    />
  )
}

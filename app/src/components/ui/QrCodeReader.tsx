import { useZxing } from 'react-zxing'


type Props = {
  useQrscanHandlers: any
}

export const QrCodeReader = ({ useQrscanHandlers }: Props) => {
  const { ref } = useZxing({
    onResult(result) {
      useQrscanHandlers.changeResultData(result.getText())
    },
  })

  return (
    <video
      style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
      ref={ref}
    />
  )
}

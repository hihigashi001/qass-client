import { useZxing } from 'react-zxing'

type Props = {
  changeResultData: (value: string) => void
}

export const QrCodeReader = ({ changeResultData }: Props) => {
  const { ref } = useZxing({
    onResult(result) {
      changeResultData(result.getText())
    },
  })

  return (
    <video
      style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
      ref={ref}
    />
  )
}

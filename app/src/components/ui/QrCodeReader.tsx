type Props = {
  videoRef: React.LegacyRef<HTMLVideoElement>
}

export const QrCodeReader = ({ videoRef }: Props) => {
  return (
    <video
      style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
      ref={videoRef}
    />
  )
}

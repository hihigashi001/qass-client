export const statusToString = (value: string) => {
  if (value == 'active') return '貸出可能'
  if (value == 'inActive') return '貸出中'
  return '故障中'
}

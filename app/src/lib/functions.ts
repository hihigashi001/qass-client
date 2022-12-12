export const statusToString = (value: string) => {
  if (value == 'active') return '貸出可能'
  if (value == 'inActive') return '貸出中'
  if (value == 'broken') return '故障中'
  return '---'
}

export const statusToJapanese = (value: string) => {
  if (value == 'active') return '貸出可能'
  if (value == 'inActive') return '貸出中'
  if (value == 'broken') return '故障中'
  if (value == 'maintenance') return 'メンテ中'
  return '---'
}

export const userStatusToJapanese = (value: string) => {
  if (value == 'enrolled') return '在籍'
  if (value == 'retired') return '退職者'
  if (value == 'suspended') return '休職中'
  return '---'
}

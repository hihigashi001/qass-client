import { Select } from '@chakra-ui/react'

type Props = {
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  which: 'asset' | 'user'
}

export const SelectStatus = ({
  placeholder,
  value,
  onChange,
  which,
}: Props) => {
  if (which == 'asset') {
    return (
      <Select
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        color={'gray.500'}
      >
        <option value="inActive">貸出中</option>
        <option value="active">貸出可能</option>
        <option value="broken">故障中</option>
        <option value="maintenance">メンテ中</option>
      </Select>
    )
  } else {
    return (
      <Select
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        color={'gray.500'}
      >
        <option value="enrolled">在籍</option>
        <option value="retired">退職者</option>
        <option value="suspended">休職中</option>
      </Select>
    )
  }
}

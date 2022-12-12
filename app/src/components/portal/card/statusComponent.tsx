import { Text } from '@chakra-ui/react'

type Props = {
  status: string
  username: string
}

export const StatusComponent = ({ status, username }: Props) => {
  if (status == 'active') {
    return (
      <Text color="teal.600" fontSize="2xl">
        貸出可能
      </Text>
    )
  } else if (status == 'inActive') {
    return (
      <Text color="red.600" fontSize="2xl">
        貸出中: {username}
      </Text>
    )
  } else {
    return (
      <Text color="red.600" fontSize="2xl">
        故障中
      </Text>
    )
  }
}

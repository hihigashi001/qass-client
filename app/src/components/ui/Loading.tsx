import { CircularProgress, Flex } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Flex justifyContent={'center'} marginTop={'16'}>
      <CircularProgress isIndeterminate color="green.300" />
    </Flex>
  )
}

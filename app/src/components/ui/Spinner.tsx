import { CircularProgress, Flex } from '@chakra-ui/react'

export const Spinner = () => {
  return (
    <Flex justifyContent={'center'} marginTop={'16'}>
      <CircularProgress isIndeterminate color="green.300" />
    </Flex>
  )
}

import { Button, Text, Flex, Input } from '@chakra-ui/react'
import { useSearch } from '@states/zustand/portal/useSearch'
import { useQrscanSearch } from '@states/zustand/portal/useQrscanSearch'

export const UserSearch = () => {
  const { userValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscanSearch()
  const onClickHandler = () => {
    useQrscanHandlers.changeOpenModal()
    useQrscanHandlers.chanageWhichModal('userValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>ċİç¨èċ:</Text>
      <Flex>
        <Input
          placeholder="---"
          name="userValue"
          value={userValue}
          onChange={(e) => useSearchHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

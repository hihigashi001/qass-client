import { Button, Text, Flex, Input } from '@chakra-ui/react'

import { useSearch } from '@states/useSearch'
import { useQrscan } from '@states/useQrscan'

export const UserSearch = () => {
  const { userValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscan()
  const onClickHandler = () => {
    useQrscanHandlers.changeOpenModal()
    useQrscanHandlers.chanageWhichModal('userValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>利用者名:</Text>
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

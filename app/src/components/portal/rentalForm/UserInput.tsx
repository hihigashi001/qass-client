import { Button, Text, Flex, Input } from '@chakra-ui/react'

import { useRentalForm } from '@states/useRentalForm'
import { useQrscanRentalForm } from '@states/useQrscanRentalForm'

export const UserInput = () => {
  const { userValue, useRentalFormHandlers } = useRentalForm()
  const { useQrscanHandlers } = useQrscanRentalForm()
  const onClickHandler = () => {
    useQrscanHandlers.changeOpenModal()
    useQrscanHandlers.chanageWhichModal('userValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>ユーザID:</Text>
      <Flex>
        <Input
          placeholder="---"
          name="userValue"
          value={userValue}
          onChange={(e) => useRentalFormHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

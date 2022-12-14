import { Button, Text, Flex, Input } from '@chakra-ui/react'
import { useRentalForm } from '@states/zustand/portal/useRentalForm'
import { useQrscanRentalForm } from '@states/zustand/portal/useQrscanRentalForm'

export const AssetInput = () => {
  const { assetValue, useRentalFormHandlers } = useRentalForm()
  const { useQrscanHandlers } = useQrscanRentalForm()
  const onClickHandler = () => {
    useQrscanHandlers.changeOpenModal()
    useQrscanHandlers.chanageWhichModal('assetValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>機器ID:</Text>
      <Flex>
        <Input
          placeholder="---"
          name="assetValue"
          value={assetValue}
          onChange={(e) => useRentalFormHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

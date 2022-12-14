import { Button, Text, Flex, Input } from '@chakra-ui/react'
import { useSearch } from '@states/zustand/portal/useSearch'
import { useQrscanSearch } from '@states/zustand/portal/useQrscanSearch'

export const AssetSearch = () => {
  const { assetValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscanSearch()
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
          onChange={(e) => useSearchHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

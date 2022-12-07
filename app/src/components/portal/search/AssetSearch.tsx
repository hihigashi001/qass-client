import { Button, Text, Flex, Input } from '@chakra-ui/react'

import { useSearch } from '@states/useSearch'
import { useQrscan } from '@states/useQrscan'

export const AssetSearch = () => {
  const { assetValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscan()
  const onClickHandler = () => {
    useQrscanHandlers.changeIsOpenModal()
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

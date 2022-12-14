import { useSearch } from '@states/zustand/portal/useSearch'
import { Flex, Text } from '@chakra-ui/react'
import { statusToJapanese } from '@lib/functions'

export const FilterValueHeader = () => {
  const { statusValue, assetValue, userValue } = useSearch()
  return (
    <Flex gap={'4'} marginTop={'2'}>
      <Text>{'Filter: '}</Text>
      <Text backgroundColor={'gray.400'} paddingX={'4'} color={'white'}>
        {statusValue ? statusToJapanese(statusValue) : '---'}
      </Text>
      <Text backgroundColor={'gray.400'} paddingX={'4'} color={'white'}>
        {assetValue ? assetValue : '---'}
      </Text>
      <Text backgroundColor={'gray.400'} paddingX={'4'} color={'white'}>
        {userValue ? userValue : '---'}
      </Text>
    </Flex>
  )
}

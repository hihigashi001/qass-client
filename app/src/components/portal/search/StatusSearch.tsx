import { Text, Flex } from '@chakra-ui/react'
import { SelectStatus } from '@ui/SelectStatus'
import { useSearch } from '@states/zustand/portal/useSearch'

export const StatusSearch = () => {
  const { statusValue, useSearchHandlers } = useSearch()
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>ステータス:</Text>
      <SelectStatus
        placeholder="---"
        value={statusValue}
        onChange={useSearchHandlers.changeSelectStatus}
        which="asset"
      />
    </Flex>
  )
}

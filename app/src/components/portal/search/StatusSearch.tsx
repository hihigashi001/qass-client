import { Text, Flex, Select } from '@chakra-ui/react'

import { useSearch } from '@states/useSearch'

export const StatusSearch = () => {
  const { statusValue, useSearchHandlers } = useSearch()
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>ステータス:</Text>
      <Select
        placeholder="---"
        value={statusValue}
        onChange={(e) => {
          useSearchHandlers.changeSelectStatus(e)
        }}
      >
        <option value="inActive">貸出中</option>
        <option value="active">貸出可能</option>
        <option value="broken">故障中</option>
      </Select>
    </Flex>
  )
}

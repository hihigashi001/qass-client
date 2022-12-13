import { Flex, Select, Input, Button } from '@chakra-ui/react'

export const FilterHeader = () => {
  return (
    <Flex gap={'4'} padding={'4'}>
      <Flex justifyItems={'center'} alignItems={'center'}>
        Filter:
      </Flex>
      <Input placeholder="ユーザID 検索" />
      <Input placeholder="備品ID 検索" />
      <Select placeholder="ステータス  検索"></Select>
      <Input placeholder="日付  検索" />
      <Button colorScheme="teal">実行</Button>
    </Flex>
  )
}

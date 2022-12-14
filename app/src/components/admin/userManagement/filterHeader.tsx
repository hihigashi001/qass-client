import { Flex, Input, Button } from '@chakra-ui/react'
import { useUsersFilter } from '@states/zustand/admin/useUsersFilter'
import { SelectStatus } from '@ui/SelectStatus'

export const FilterHeader = () => {
  const {
    idValue,
    departmentValue,
    nameValue,
    statusValue,
    useUsersFilterHandlers,
  } = useUsersFilter()
  return (
    <Flex gap={'4'} paddingY={'4'}>
      <Flex justifyItems={'center'} alignItems={'center'}>
        Filter:
      </Flex>
      <Input
        name="idValue"
        placeholder="ID 検索"
        value={idValue}
        onChange={(e) => useUsersFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="departmentValue"
        placeholder="所属 検索"
        value={departmentValue}
        onChange={(e) => useUsersFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="nameValue"
        placeholder="名前  検索"
        value={nameValue}
        onChange={(e) => useUsersFilterHandlers.changeInputStatus(e)}
      />
      <SelectStatus
        placeholder="ステータス  検索"
        value={statusValue}
        onChange={useUsersFilterHandlers.changeSelectStatus}
        which="user"
      />
      <Button
        colorScheme="teal"
        onClick={() => useUsersFilterHandlers.onClickFilter()}
      >
        実行
      </Button>
      <Button
        colorScheme="gray"
        onClick={() => useUsersFilterHandlers.onClickClear()}
      >
        消
      </Button>
    </Flex>
  )
}

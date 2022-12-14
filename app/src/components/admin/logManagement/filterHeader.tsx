import { Flex, Input, Button } from '@chakra-ui/react'
import { useRentalHistoryFilter } from '@states/zustand/admin/useRentalHistoryFilter'
import { SelectStatus } from '@ui/SelectStatus'

export const FilterHeader = () => {
  const {
    userValue,
    assetValue,
    statusValue,
    dateValue,
    useRentalHistoryFilterHandlers,
  } = useRentalHistoryFilter()
  return (
    <Flex gap={'4'} paddingY={'4'}>
      <Flex justifyItems={'center'} alignItems={'center'}>
        Filter:
      </Flex>
      <Input
        name="userValue"
        placeholder="ユーザID 検索"
        value={userValue}
        onChange={(e) => useRentalHistoryFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="assetValue"
        placeholder="備品ID 検索"
        value={assetValue}
        onChange={(e) => useRentalHistoryFilterHandlers.changeInputStatus(e)}
      />
      <SelectStatus
        placeholder="ステータス  検索"
        value={statusValue}
        onChange={useRentalHistoryFilterHandlers.changeSelectStatus}
        which="asset"
      />
      <Input
        name="dateValue"
        placeholder="日付  検索"
        value={dateValue}
        onChange={(e) => useRentalHistoryFilterHandlers.changeInputStatus(e)}
      />
      <Button
        colorScheme="teal"
        onClick={() => useRentalHistoryFilterHandlers.onClickFilter()}
      >
        実行
      </Button>
      <Button
        colorScheme="gray"
        onClick={() => useRentalHistoryFilterHandlers.onClickClear()}
      >
        消
      </Button>
    </Flex>
  )
}

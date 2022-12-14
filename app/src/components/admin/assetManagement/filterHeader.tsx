import { Flex, Input, Button } from '@chakra-ui/react'
import { useAssetsFilter } from '@states/zustand/admin/useAssetsFilter'
import { SelectStatus } from '@ui/SelectStatus'

export const FilterHeader = () => {
  const {
    idValue,
    simIdValue,
    noteValue,
    productIdValue,
    userIdValue,
    buyDateValue,
    statusValue,
    useAssetsFilterHandlers,
  } = useAssetsFilter()
  return (
    <Flex gap={'4'} paddingY={'4'}>
      <Flex justifyItems={'center'} alignItems={'center'}>
        Filter:
      </Flex>
      <Input
        name="idValue"
        placeholder="ID 検索"
        value={idValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="simIdValue"
        placeholder="SIM 検索"
        value={simIdValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="noteValue"
        placeholder="備考 検索"
        value={noteValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="productIdValue"
        placeholder="商品ID 検索"
        value={productIdValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="userIdValue"
        placeholder="ユーザID 検索"
        value={userIdValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="buyDateValue"
        placeholder="購入日 検索"
        value={buyDateValue}
        onChange={(e) => useAssetsFilterHandlers.changeInputStatus(e)}
      />
      <SelectStatus
        placeholder="ステータス  検索"
        value={statusValue}
        onChange={useAssetsFilterHandlers.changeSelectStatus}
        which="asset"
      />
      <Button
        colorScheme="teal"
        onClick={() => useAssetsFilterHandlers.onClickFilter()}
      >
        実行
      </Button>
      <Button
        colorScheme="gray"
        onClick={() => useAssetsFilterHandlers.onClickClear()}
      >
        消
      </Button>
    </Flex>
  )
}

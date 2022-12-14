import { Flex, Input, Button } from '@chakra-ui/react'
import { useProductsFilter } from '@states/zustand/admin/useProductsFilter'

export const FilterHeader = () => {
  const {
    idValue,
    nameValue,
    modelValue,
    categoryValue,
    useProductsFilterHandlers,
  } = useProductsFilter()
  return (
    <Flex gap={'4'} paddingY={'4'}>
      <Flex justifyItems={'center'} alignItems={'center'}>
        Filter:
      </Flex>
      <Input
        name="idValue"
        placeholder="ID 検索"
        value={idValue}
        onChange={(e) => useProductsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="nameValue"
        placeholder="名前 検索"
        value={nameValue}
        onChange={(e) => useProductsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="modelValue"
        placeholder="モデル 検索"
        value={modelValue}
        onChange={(e) => useProductsFilterHandlers.changeInputStatus(e)}
      />
      <Input
        name="categoryValue"
        placeholder="カテゴリ 検索"
        value={categoryValue}
        onChange={(e) => useProductsFilterHandlers.changeInputStatus(e)}
      />
      <Button
        colorScheme="teal"
        onClick={() => useProductsFilterHandlers.onClickFilter()}
      >
        実行
      </Button>
      <Button
        colorScheme="gray"
        onClick={() => useProductsFilterHandlers.onClickClear()}
      >
        消
      </Button>
    </Flex>
  )
}

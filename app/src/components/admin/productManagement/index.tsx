import { Box, Text } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useProducts } from '@states/swr/useProducts'
import { useProductsFilter } from '@states/zustand/admin/useProductsFilter'
import { CustomTable } from '@ui/CustomTable'
import { Loading } from '@ui/Loading'
import { IProduct } from 'src/types'
import { FilterHeader } from './filterHeader'

const columnHelper = createColumnHelper<IProduct>()

const columns = [
  columnHelper.accessor('id', {
    header: 'id',
  }),
  columnHelper.accessor('imagePath', {
    header: 'イメージ',
  }),
  columnHelper.accessor('name', {
    header: '名前',
  }),
  columnHelper.accessor('maker', {
    header: 'メーカー',
  }),
  columnHelper.accessor('model', {
    header: 'モデル',
  }),
  columnHelper.accessor('accessories', {
    header: '付属品',
  }),
  columnHelper.accessor('note', {
    header: '日付',
  }),
  columnHelper.accessor('category', {
    header: 'カテゴリ',
  }),
]

export const ProductManagement = () => {
  const { isLoading } = useProducts()
  const { filterData } = useProductsFilter()

  if (isLoading) return <Loading />
  if (filterData == undefined ) return <Loading />

  return (
    <Box padding={'4'}>
      <Text fontSize={'3xl'}>製品管理</Text>
      <FilterHeader />
      <CustomTable columns={columns} data={filterData} />
    </Box>
  )
}

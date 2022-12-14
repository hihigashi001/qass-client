import { Box, Text } from '@chakra-ui/react'
import { useAssets } from '@states/swr/useAssets'
import { useAssetsFilter } from '@states/zustand/admin/useAssetsFilter'
import { CustomTable } from '@ui/CustomTable'
import { Loading } from '@ui/Loading'
import { statusToJapanese } from '@lib/functions'
import { IAsset } from 'src/types'
import { FilterHeader } from './filterHeader'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<IAsset>()

const columns = [
  columnHelper.accessor('id', {
    header: 'id',
  }),
  columnHelper.accessor('qrImagePath', {
    header: 'ユーザID',
  }),
  columnHelper.accessor('simId', {
    header: 'SIM',
  }),
  columnHelper.accessor('note', {
    header: '備考',
  }),
  columnHelper.accessor('productId.id', {
    header: '商品ID',
  }),
  columnHelper.accessor('userId.id', {
    header: 'ユーザID',
  }),
  columnHelper.accessor('buyDate', {
    header: '購入日',
  }),
  columnHelper.accessor('status', {
    header: 'ステータス',
    cell: (props) => statusToJapanese(props.getValue()),
  }),
]

export const AssetManagement = () => {
  const { isLoading } = useAssets()
  const { filterData } = useAssetsFilter()

  if (isLoading) return <Loading />
  if (filterData == undefined ) return <Loading />

  return (
    <Box padding={'4'}>
      <Text fontSize={'3xl'}>備品管理</Text>
      <FilterHeader />
      <CustomTable columns={columns} data={filterData} />
    </Box>
  )
}

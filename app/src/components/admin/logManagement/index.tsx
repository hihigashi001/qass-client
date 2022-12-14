import { Box, Text } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useRentalHistory } from '@states/swr/useRentalHistory'
import { useRentalHistoryFilter } from '@states/zustand/admin/useRentalHistoryFilter'
import { CustomTable } from '@ui/CustomTable'
import { Loading } from '@ui/Loading'
import { statusToJapanese } from '@lib/functions'
import { IRentalHistory } from 'src/types'
import { FilterHeader } from './filterHeader'

const columnHelper = createColumnHelper<IRentalHistory>()

const columns = [
  columnHelper.accessor('id', {
    header: 'id',
  }),
  columnHelper.accessor('userId', {
    header: 'ユーザID',
  }),
  columnHelper.accessor('assetId', {
    header: '備品ID',
  }),
  columnHelper.accessor('status', {
    header: 'ステータス',
    cell: (props) => statusToJapanese(props.getValue()),
  }),
  columnHelper.accessor('date', {
    header: '日付',
  }),
]

export const LogManagement = () => {
  const { isLoading } = useRentalHistory()
  const { filterData } = useRentalHistoryFilter()

  if (isLoading) return <Loading />
  if (filterData == undefined ) return <Loading />

  return (
    <Box padding={'4'}>
      <Text fontSize={'3xl'}>貸出履歴</Text>
      <FilterHeader />
      <CustomTable columns={columns} data={filterData} />
    </Box>
  )
}

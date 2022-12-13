import { Box } from '@chakra-ui/react'
import { useRentalHistory } from '@states/useRentalHistory'
import { CustomTable } from '@ui/CustomTable'
import { Loading } from '@ui/Loading'
import { statusToString } from '@lib/functions'
import { IRentalHistory } from 'src/types'

import { FilterHeader } from './filterHeader'
import { createColumnHelper } from '@tanstack/react-table'

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
    cell: (props) => statusToString(props.getValue()),
  }),
  columnHelper.accessor('date', {
    header: '日付',
  }),
]

export const LogManagement = () => {
  const { data, isLoading } = useRentalHistory()

  if (isLoading) return <Loading />
  if (!data) return <Box padding={'4'}>データがありません。</Box>

  return (
    <Box padding={'4'}>
      <FilterHeader />
      <CustomTable columns={columns} data={data} />
    </Box>
  )
}

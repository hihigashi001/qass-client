import { Box, Text } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useUsers } from '@states/swr/useUsers'
import { useUsersFilter } from '@states/zustand/admin/useUsersFilter'
import { CustomTable } from '@ui/CustomTable'
import { Loading } from '@ui/Loading'
import { userStatusToJapanese } from '@lib/functions'
import { IUser } from 'src/types'
import { FilterHeader } from './filterHeader'

const columnHelper = createColumnHelper<IUser>()

const columns = [
  columnHelper.accessor('id', {
    header: 'id',
  }),
  columnHelper.accessor('qrImagePath', {
    header: 'イメージ',
  }),
  columnHelper.accessor('department', {
    header: '所属',
  }),
  columnHelper.accessor('name', {
    header: '名前',
  }),
  columnHelper.accessor('status', {
    header: 'ステータス',
    cell: (props) => userStatusToJapanese(props.getValue()),
  }),
  columnHelper.accessor('password', {
    header: 'パスワード',
  }),
]

export const UserManagement = () => {
  const { isLoading, data } = useUsers()
  // const { filterData } = useUsersFilter()

  if (isLoading) return <Loading />
  if (!data) return <Loading />

  return (
    <Box padding={'4'}>
      <Text fontSize={'3xl'}>ユーザ管理</Text>
      <FilterHeader />
      <CustomTable columns={columns} data={data} />
    </Box>
  )
}

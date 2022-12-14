import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react'

type Props<T extends object> = {
  columns: ColumnDef<T, any>[]
  data: T[]
}

export const CustomTable = <T extends object>({ columns, data }: Props<T>) => {
  const instance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <Table>
        <Thead backgroundColor={'gray.200'}>
          {instance.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {instance.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {instance.getRowModel().rows.length == 0 && (
        <Box fontSize={'2xl'} color={'gray.700'}>
          データがありません。
        </Box>
      )}
    </>
  )
}

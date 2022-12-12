import { SimpleGrid } from '@chakra-ui/react'

import { useSearch } from '@states/useSearch'
import { useAssets } from '@states/useAssets'
import { Spinner } from '@ui/Spinner'
import { CardComponent } from './cardComponent'

export const PortalCard = () => {
  const { filterData } = useSearch()
  const { isLoading } = useAssets()

  if (isLoading) return <Spinner />

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={4} padding={4}>
      {filterData.map((asset, i) => (
        <CardComponent key={i} asset={asset} />
      ))}
    </SimpleGrid>
  )
}

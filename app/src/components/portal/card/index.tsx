import { SimpleGrid } from '@chakra-ui/react'
import { useSearch } from '@states/zustand/portal/useSearch'
import { useAssets } from '@states/swr/useAssets'
import { Loading } from '@ui/Loading'
import { CardComponent } from '@components/portal/card/cardComponent'

export const PortalCard = () => {
  const { filterData } = useSearch()
  const { isLoading } = useAssets()

  if (isLoading) return <Loading />

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={4} padding={4}>
      {filterData.map((asset, i) => (
        <CardComponent key={i} asset={asset} />
      ))}
    </SimpleGrid>
  )
}

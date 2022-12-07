import { SimpleGrid } from '@chakra-ui/react'

import { useAssets } from '@states/useAssets'
import { CardComponent } from './cardComponent'

export const PortalCard = () => {
  const { searchFilterData } = useAssets()

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={8} padding={8}>
      {searchFilterData.map((asset, i) => (
        <CardComponent key={i} asset={asset} />
      ))}
    </SimpleGrid>
  )
}

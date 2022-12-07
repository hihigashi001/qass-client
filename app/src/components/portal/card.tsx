import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'

import { IAsset } from '@states/types'
import { useDetail } from '@states/useDetail'
import { useAssets } from '@states/useAssets'

type Props = {
  asset: IAsset
}

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

const CardComponent = ({ asset }: Props) => {
  const { useDetailHander } = useDetail()
  return (
    <Card background={'whiteAlpha.700'}>
      <CardHeader background={'gray.800'}>
        <Heading size="md" textColor={'white'}>
          {asset.id}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing="3">
          <Text>{asset.categoryId.model}</Text>
          {statusComponent(asset.status, asset.userId.name)}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="teal"
          paddingX={'16'}
          marginX={'auto'}
          onClick={() => useDetailHander.onChange(asset)}
        >
          詳細画面
        </Button>
      </CardFooter>
    </Card>
  )
}

const statusComponent = (status: string, username: string) => {
  if (status == 'active') {
    return (
      <Text color="teal.600" fontSize="2xl">
        貸出可能
      </Text>
    )
  } else if (status == 'inActive') {
    return (
      <Text color="red.600" fontSize="2xl">
        貸出中: {username}
      </Text>
    )
  } else {
    return (
      <Text color="red.600" fontSize="2xl">
        故障中
      </Text>
    )
  }
}

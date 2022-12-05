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
import { IAsset } from 'src/states/types'

type Props = {
  assetList: IAsset[]
}

type Props2 = {
  asset: IAsset
}

export const PortalCard = ({ assetList }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} gap={8} padding={8}>
      {assetList.map((asset, i) => (
        <CardComponent key={i} asset={asset} />
      ))}
    </SimpleGrid>
  )
}

const CardComponent = ({ asset }: Props2) => {
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
          colorScheme="blue"
          paddingX={'16'}
          marginX={'auto'}
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
      <Text color="blue.600" fontSize="2xl">
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

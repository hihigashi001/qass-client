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
} from '@chakra-ui/react'
import { AssetType } from 'src/types'
import { useDetail } from '@states/zustand/portal/useDetail'
import { StatusComponent } from '@components/portal/card/statusComponent'

type Props = {
  asset: AssetType
}

export const CardComponent = ({ asset }: Props) => {
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
          <Text>{asset.productId.model}</Text>
          <StatusComponent status={asset.status} username={asset.userId.name} />
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

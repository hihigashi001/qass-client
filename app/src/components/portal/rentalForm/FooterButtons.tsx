import { Button, Flex } from '@chakra-ui/react'
import { Handers } from '@states/useRentalForm'

type Props = {
  status: string
  useRentalFormHandlers: Handers
}

export const FooterButtons = ({ status, useRentalFormHandlers }: Props) => {
  if (status == 'active') {
    return (
      <Flex gap={'4'}>
        <Button
          variant="ghost"
          onClick={() => {
            useRentalFormHandlers.onClickClear()
          }}
        >
          クリア
        </Button>
        <Button
          colorScheme="red"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('broken')
          }}
        >
          故障
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('inActive')
          }}
        >
          貸出
        </Button>
      </Flex>
    )
  } else if (status == 'inActive') {
    return (
      <Flex gap={'4'}>
        <Button
          variant="ghost"
          onClick={() => {
            useRentalFormHandlers.onClickClear()
          }}
        >
          クリア
        </Button>
        <Button
          colorScheme="red"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('broken')
          }}
        >
          故障
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('active')
          }}
        >
          返却
        </Button>
      </Flex>
    )
  } else if (status == 'broken') {
    return (
      <Flex gap={'4'}>
        <Button
          variant="ghost"
          onClick={() => {
            useRentalFormHandlers.onClickClear()
          }}
        >
          クリア
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('active')
          }}
        >
          返却
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => {
            useRentalFormHandlers.onClickSubmit('inActive')
          }}
        >
          貸出
        </Button>
      </Flex>
    )
  } else {
    return (
      <Flex gap={'4'}>
        <Button
          variant="ghost"
          onClick={() => {
            useRentalFormHandlers.onClickClear()
          }}
        >
          クリア
        </Button>
      </Flex>
    )
  }
}

import {
  Button,
  Text,
  Flex,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { FaPlusCircle } from 'react-icons/fa'

import { useRentalForm } from '@states/useRentalForm'
import { AssetInput } from '@components/portal/rentalForm/AssetInput'
import { UserInput } from '@components/portal/rentalForm/UserInput'

export const RentalForm = () => {
  const { isOpen, useRentalFormHandlers } = useRentalForm()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={() => {
          useRentalFormHandlers.changeIsOpen()
        }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex gap={'2'} color="gray.500">
              <FaPlusCircle size={'28'} />
              <Text>Rental</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={{ sm: 3 }} gap={8} padding={8}>
              <AssetInput />
              <UserInput />
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
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
                  useRentalFormHandlers.onClickClear()
                }}
              >
                故障
              </Button>
              <Button
                colorScheme="gray"
                onClick={() => {
                  // useSearchHandlers.onClickSearch()
                }}
              >
                返却
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => {
                  // useSearchHandlers.onClickSearch()
                }}
              >
                貸出
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

import {
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
import { FooterButtons } from '@components/portal/rentalForm/FooterButtons'
import { statusToString } from '@lib/functions'

export const RentalForm = () => {
  const { isOpen, status, useRentalFormHandlers } = useRentalForm()

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
              <Text fontSize={'4xl'}>{statusToString(status)}</Text>
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
            <FooterButtons
              status={status}
              useRentalFormHandlers={useRentalFormHandlers}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

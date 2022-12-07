import {
  Box,
  Button,
  Text,
  Flex,
  Select,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
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

export const RentalForm = () => {
  const { isOpen, useReantalFormHandlers } = useRentalForm()

  return (
    <>
      <Box
        position={'fixed'}
        zIndex={5}
        top={'4'}
        right={'4'}
        onClick={() => {useReantalFormHandlers.changeIsOpen()}}
      >
        <Button colorScheme={'whiteAlpha.900'}>
          <FaPlusCircle size={'40'} color="teal" />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="top" onClose={() => {useReantalFormHandlers.changeIsOpen()}}>
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
              {/* <AssetSearch />
              <UserSearch /> */}
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
            <Flex gap={'4'}>
              <Button
                variant="ghost"
                onClick={() => {
                  // useSearchHandlers.onClickSearchClear()
                }}
              >
                キャンセル
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  // useSearchHandlers.onClickSearch()
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

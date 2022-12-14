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
import { FaSearch } from 'react-icons/fa'
import { useSearch } from '@states/zustand/portal/useSearch'
import { StatusSearch } from '@components/portal/search/StatusSearch'
import { AssetSearch } from '@components/portal/search/AssetSearch'
import { UserSearch } from '@components/portal/search/UserSearch'

export const SearchBox = () => {
  const { isOpen, useSearchHandlers } = useSearch()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={() => useSearchHandlers.changeIsOpen()}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex gap={'2'} color="gray.500">
              <FaSearch size={'28'} />
              <Text>Search</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={{ sm: 3 }} gap={8} padding={8}>
              <StatusSearch />
              <AssetSearch />
              <UserSearch />
            </SimpleGrid>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="ghost"
              onClick={() => {
                useSearchHandlers.onClickSearchClear()
              }}
            >
              クリア
            </Button>
            <Button
              colorScheme="teal"
              onClick={() => {
                useSearchHandlers.onClickSearch()
              }}
            >
              検索
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

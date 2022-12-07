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
import { FaSearch } from 'react-icons/fa'

import { useSearch } from '@states/useSearch'
import { useQrscan } from '@states/useQrscan'

export const SearchBox = () => {
  const { isOpen, useSearchHandlers } = useSearch()

  return (
    <>
      <Box
        position={'fixed'}
        zIndex={5}
        top={'4'}
        left={'4'}
        onClick={() => useSearchHandlers.changeIsOpen()}
      >
        <SearchInputImage />
      </Box>
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
              キャンセル
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

const SearchInputImage = () => {
  return (
    <InputGroup backgroundColor={'whiteAlpha.500'}>
      <InputLeftElement pointerEvents="none">
        <FaSearch color="gray.300" />
      </InputLeftElement>
      <Input type="tel" placeholder="Search" readOnly />
    </InputGroup>
  )
}

const StatusSearch = () => {
  const { statusValue, useSearchHandlers } = useSearch()
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>ステータス:</Text>
      <Select
        placeholder="---"
        value={statusValue}
        onChange={(e) => {
          useSearchHandlers.changeSelectStatus(e)
        }}
      >
        <option value="inActive">貸出中</option>
        <option value="active">貸出可能</option>
        <option value="broken">故障中</option>
      </Select>
    </Flex>
  )
}

const AssetSearch = () => {
  const { assetValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscan()
  const onClickHandler = () => {
    useQrscanHandlers.changeIsOpenModal()
    useQrscanHandlers.chanageWhichModal('assetValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>機器ID:</Text>
      <Flex>
        <Input
          placeholder="---"
          name="assetValue"
          value={assetValue}
          onChange={(e) => useSearchHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

const UserSearch = () => {
  const { userValue, useSearchHandlers } = useSearch()
  const { useQrscanHandlers } = useQrscan()
  const onClickHandler = () => {
    useQrscanHandlers.changeIsOpenModal()
    useQrscanHandlers.chanageWhichModal('userValue')
  }
  return (
    <Flex flexDirection={'column'}>
      <Text fontSize={'lg'}>利用者名:</Text>
      <Flex>
        <Input
          placeholder="---"
          name="userValue"
          value={userValue}
          onChange={(e) => useSearchHandlers.changeInputStatus(e)}
        />
        <Button colorScheme="teal" onClick={onClickHandler}>
          QR
        </Button>
      </Flex>
    </Flex>
  )
}

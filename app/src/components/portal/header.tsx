import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FaSearch, FaPlusCircle } from 'react-icons/fa'
import { FilterValueHeader } from '@components/portal/search/filterValueHeader'
import { useSearch } from '@states/zustand/portal/useSearch'
import { useRentalForm } from '@states/zustand/portal/useRentalForm'

export const Header = () => {
  const { useSearchHandlers } = useSearch()
  const { useRentalFormHandlers } = useRentalForm()

  return (
    <Box
      position={'sticky'}
      top={'0'}
      backgroundColor={'whiteAlpha.700'}
      padding={'4'}
      zIndex={'10'}
    >
      <Flex justifyContent={'space-between'}>
        <Box onClick={() => useSearchHandlers.changeIsOpen()}>
          <InputGroup backgroundColor={'whiteAlpha.500'} color="gray.500">
            <InputLeftElement pointerEvents="none">
              <FaSearch />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search"
              readOnly
              cursor={'pointer'}
            />
          </InputGroup>
        </Box>
        <Button
          onClick={() => {
            useRentalFormHandlers.changeIsOpen()
          }}
          colorScheme={'whiteAlpha.900'}
        >
          <FaPlusCircle size={'40'} color="teal" />
        </Button>
      </Flex>
      <FilterValueHeader />
    </Box>
  )
}

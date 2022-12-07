import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FaSearch, FaPlusCircle } from 'react-icons/fa'

import { useSearch } from '@states/useSearch'
import { useRentalForm } from '@states/useRentalForm'

export const Header = () => {
  const { useSearchHandlers } = useSearch()
  const { useReantalFormHandlers } = useRentalForm()

  return (
    <Flex
      position={'sticky'}
      top={'0'}
      backgroundColor={'whiteAlpha.700'}
      justifyContent={'space-between'}
      padding={'4'}
      zIndex={'10'}
    >
      <Box onClick={() => useSearchHandlers.changeIsOpen()}>
        <InputGroup backgroundColor={'whiteAlpha.500'} color="gray.500">
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" readOnly cursor={'pointer'} />
        </InputGroup>
      </Box>
      <Button
        onClick={() => {
          useReantalFormHandlers.changeIsOpen()
        }}
        colorScheme={'whiteAlpha.900'}
      >
        <FaPlusCircle size={'40'} color="teal" />
      </Button>
    </Flex>
  )
}

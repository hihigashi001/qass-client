import { useLogin } from '@states/useLogin'
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export const LoginForm = () => {
  const { username, password, showPassword, useLoginHandlers } = useLogin()

  return (
    <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Qass</Heading>
      <Box minW={{ base: '90%', md: '468px' }}>
        <form
          autoComplete="off"
          onSubmit={(e) => useLoginHandlers.onClickLogin(e)}
        >
          <Box p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <CFaUserAlt color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => useLoginHandlers.onChange(e)}
                />
              </InputGroup>
            </FormControl>
            <FormControl marginTop="4">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <CFaLock color="gray.300" />
                </InputLeftElement>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => useLoginHandlers.onChange(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={useLoginHandlers.changeShowPassword}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              marginTop="8"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Stack>
  )
}

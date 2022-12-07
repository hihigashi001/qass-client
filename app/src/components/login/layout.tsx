import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      minH="100vh"
      height="100%"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  )
}

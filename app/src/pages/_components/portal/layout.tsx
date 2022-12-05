import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Box width="100%" height="100%" minH="100vh" backgroundColor="gray.200">
      {children}
    </Box>
  )
}

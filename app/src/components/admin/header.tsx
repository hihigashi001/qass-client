import { Text, Flex, Box } from '@chakra-ui/react'
import { HeaderMenu } from '@ui/HeaderMenu'
import { useRouter } from '@hooks/useRouter'
import { AiFillHome } from 'react-icons/ai'

export const Header = () => {
  const { onClickPortalPage, onClickloginPage, onClickAdminPage } = useRouter()

  const menus = [
    {
      name: 'portalPage',
      function: onClickPortalPage,
    },
    {
      name: 'sginOut',
      function: onClickloginPage,
    },
  ]
  return (
    <Box
      position={'sticky'}
      top={'0'}
      backgroundColor={'whiteAlpha.700'}
      padding={'4'}
      zIndex={'10'}
    >
      <Flex justifyContent={'space-between'}>
        <Flex justifyItems={'center'} alignItems={'center'} onClick={onClickAdminPage}>
          <AiFillHome size={'30'} color={'gray'} />
          <Text fontSize={'2xl'} padding={'4'}>
            Qass 管理画面
          </Text>
        </Flex>
        <HeaderMenu menus={menus} />
      </Flex>
    </Box>
  )
}

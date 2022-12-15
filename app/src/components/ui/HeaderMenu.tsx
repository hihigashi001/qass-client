import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'

type IMenu = {
  name: string
  function: () => void
}
type Props = {
  menus: IMenu[]
}

export const HeaderMenu = ({ menus }: Props) => {
  return (
    <Menu colorScheme={'gray.500'}>
      <MenuButton as={Button} rightIcon={<AiOutlineMenu />} variant="outline">
        Menu
      </MenuButton>
      <MenuList>
        {menus &&
          menus.map((menu, i) => (
            <MenuItem key={i} onClick={menu.function}>
              {menu.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}

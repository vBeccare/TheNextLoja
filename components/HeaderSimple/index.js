import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Text,
  Flex,
  Input,
} from '@chakra-ui/react'

import useLocal from '../../hooks/useLocal'
import useHeader from './hooks/useHeader'

const HeaderSimple = () => {
  const { isAdmin } = useLocal()
  const { isLogged = false, userName = 'Visitante', handleHome } = useHeader()

  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      paddingX={{ base: '16px', md: '160px' }}
      h="120px"
      bgColor="teal.500"
    >
      <Image
        boxSize="100px"
        cursor="pointer"
        src="/logoadm.png"
        alt="logo"
        onClick={handleHome}
      />
      <Box></Box>
    </Box>
  )
}

export default HeaderSimple

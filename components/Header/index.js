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

import styles from './style.module.css'

import useLocal from '../../hooks/useLocal'
import useHeader from './hooks/useHeader'

const Header = () => {
  const { isAdmin } = useLocal()
  const { isLogged = false, userName = 'Visitante', handleHome } = useHeader()

  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      paddingX="160px"
      h="120px"
      bgColor="teal.500"
    >
      <Image
        boxSize="100px"
        cursor="pointer"
        src="/logoadm.png"
        onClick={handleHome}
      />
      <Box
        display="flex"
        marginLeft="80px"
        alignItems="center"
        width="100%"
        fontSize={16}
      >
        <Flex
          alignItems="center"
          width="100%"
          justifyContent="start"
          marginRight="16px"
        >
          <Input
            color="white"
            placeholder=""
            maxWidth="400px"
            size="md"
            type="search"
          />

          <Image marginLeft="8px" boxSize="20px" src="/iconSearch2.png" />
        </Flex>
        <Menu>
          <MenuButton
            className={styles.menuWrapper}
            as={Flex}
            cursor="pointer"
            padding={3}
          >
            <Flex className="flexMenu">
              <Image
                boxSize="40px"
                src="/avatar.png"
                bgColor="gray.200"
                borderRadius="50%"
                padding="8px"
              />
              <Text
                fontSize="12px"
                marginLeft="8px"
                fontWeight="bold"
                color="white"
              >
                {isLogged
                  ? `Olá, ${userName}`
                  : 'Olá, faça login ou cadastre-se'}
              </Text>
            </Flex>
          </MenuButton>

          <MenuList>
            <MenuItem onClick={() => null}>Entre</MenuItem>
            <MenuItem onClick={() => null}>Cadastre-se</MenuItem>
          </MenuList>
        </Menu>
        <Image marginLeft="auto" boxSize="50px" src="/carrinho.png" />
      </Box>
      <Box></Box>
    </Box>
  )
}

export default Header

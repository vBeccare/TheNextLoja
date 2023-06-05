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

const Header = ({ reload, setReload, hasFilter = true }) => {
  const {
    isLogged,
    clientName,
    handleHome,
    handleSignUp,
    handleSignIn,
    handleModify,
    handleLogout,
    handleRequests,
    handleCart,
    cartItems,
    totalItems,
  } = useHeader({ reload, setReload })

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
        boxSize={{ base: '60px', md: '120px' }}
        cursor="pointer"
        src="/logoadm.png"
        alt="logo"
        onClick={handleHome}
      />
      <Box
        display="flex"
        marginLeft={{ base: '16px', md: '80px' }}
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
            disabled={!hasFilter}
            maxWidth={{ base: '200px', md: '400px' }}
            size="md"
            type="search"
          />

          <Image
            marginLeft="8px"
            boxSize="20px"
            src="/iconSearch2.png"
            alt="pesquisa"
          />
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
                alt="avatar"
                padding="8px"
              />
              <Text
                fontSize="12px"
                marginLeft="8px"
                display={{ base: 'none', md: 'block' }}
                fontWeight="bold"
                minWidth="120px"
                color="white"
              >
                {isLogged
                  ? `Olá, ${clientName}`
                  : 'Olá, faça login ou cadastre-se'}
              </Text>
            </Flex>
          </MenuButton>

          {!isLogged && (
            <MenuList>
              <MenuItem
                display={{ base: 'flex', md: 'none' }}
                onClick={handleCart}
              >
                Carrinho{' '}
                {cartItems?.length > 0 && (
                  <Text
                    marginLeft="8px"
                    borderRadius="50%"
                    padding="1px 7px"
                    color="white"
                    background="red"
                  >
                    {totalItems}
                  </Text>
                )}
              </MenuItem>
              <MenuItem onClick={handleSignIn}>Entre</MenuItem>
              <MenuItem onClick={handleSignUp}>Cadastre-se</MenuItem>
            </MenuList>
          )}

          {isLogged && (
            <MenuList>
              <MenuItem
                display={{ base: 'flex', md: 'none' }}
                onClick={handleCart}
              >
                Carrinho{' '}
                {cartItems?.length > 0 && (
                  <Text
                    marginLeft="8px"
                    borderRadius="50%"
                    padding="1px 7px"
                    color="white"
                    background="red"
                  >
                    {totalItems}
                  </Text>
                )}
              </MenuItem>
              <MenuItem onClick={handleRequests}>Meus pedidos</MenuItem>
              <MenuItem onClick={handleModify}>Alterar cadastro</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
          )}
        </Menu>
        <Flex
          className={styles.cartWrapper}
          display={{ base: 'none', md: 'flex' }}
          onClick={handleCart}
        >
          <Image
            marginLeft="auto"
            boxSize="48px"
            src="/carrinho.png"
            alt="carrinho"
          />
          {cartItems?.length > 0 && (
            <span className={styles.cart}>{totalItems}</span>
          )}
        </Flex>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default Header

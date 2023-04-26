import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'

import useIndex from './hooks/useIndex'
import HeaderSimple from '../../components/HeaderSimple'

const Login = () => {
  const { handleChangeEmail, handleChangePassword, handleLogin, goToSignUp } =
    useIndex()
  return (
    <Flex flexDirection="column">
      <HeaderSimple />
      <Flex
        direction="column"
        alignItems="center"
        bgColor="gray.300"
        height="100vh"
        px={32}
        py={16}
        borderRadius={8}
      >
        <Image boxSize="160px" src="/logohome.png" />
        <Flex flexDirection="column">
          <Input
            placeholder="email@email.com"
            variant="outline"
            mb={4}
            onChange={handleChangeEmail}
          />
          <Input
            placeholder="*******"
            variant="outline"
            type="password"
            mb={12}
            onChange={handleChangePassword}
          />
        </Flex>
        <Button colorScheme="teal" mb={6} onClick={handleLogin}>
          Entrar
        </Button>
        <Text>Ainda não possui cadastro?</Text>
        <Text
          marginLeft={2}
          display="inline"
          color="teal.400"
          textDecoration="underline"
          cursor="pointer"
          fontWeight="bold"
          onClick={goToSignUp}
        >
          Cadastre-se
        </Text>
      </Flex>
    </Flex>
  )
}

export default Login

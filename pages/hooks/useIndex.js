import { useToast } from '@chakra-ui/react'
import Router from 'next/router'
import { userLogin } from '../../services/users'

const useIndex = () => {
  const toast = useToast()

  const handleSignUp = (data) => {
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
    localStorage.setItem('nome', data.name)
    Router.push('/home')
  }

  const handleLogin = () => {
    userLogin()
      .then((res) => {
        handleSignUp(res.data)
      })
      .catch(() => {
        toast({
          title: 'Login',
          description: 'Falha ao tentar entrar',
          position: 'top-right',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return {
    handleSignUp,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  }
}

export default useIndex

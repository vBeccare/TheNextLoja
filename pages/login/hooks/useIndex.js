import { useToast } from '@chakra-ui/react'
import Router from 'next/router'
import { useState } from 'react'
import { clientLogin } from '../../../services/cliente'

const useIndex = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toast = useToast()

  const handleSignUp = (data) => {
    localStorage.setItem('token', data.token)
    localStorage.setItem('id', data.id)
    localStorage.setItem('nome', data.name)
    localStorage.setItem('email', data.email)
    localStorage.setItem('cpf', data.cpf)
    localStorage.setItem('dataNascimento', data.dataNascimento)
    localStorage.setItem('genero', data.genero)
    Router.push('/')
  }

  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)

  const payload = { email: email, password: password }

  const handleLogin = () => {
    clientLogin(payload)
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

  const goToSignUp = () => {
    Router.push('/cadastrar')
  }

  return {
    handleSignUp,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    goToSignUp,
  }
}

export default useIndex

import Router from 'next/router'
import { useEffect, useState } from 'react'

const useHeader = ({ reload, setReload }) => {
  const [clientName, setClientName] = useState()
  const [isLogged, setIsLogged] = useState()

  const handleHome = () => {
    Router.push('/')
  }

  const handleSignUp = () => {
    Router.push('/cadastrar')
  }

  const handleSignIn = () => {
    Router.push('/login')
  }

  const handleModify = () => {
    Router.push('/alterar-cadastro')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setReload(true)
  }

  useEffect(() => {
    setClientName(localStorage.getItem('nome'))
    setIsLogged(localStorage.getItem('token'))
    setReload(false)
  }, [reload])

  return {
    handleHome,
    handleSignUp,
    handleSignIn,
    handleModify,
    handleLogout,
    clientName,
    isLogged,
  }
}

export default useHeader

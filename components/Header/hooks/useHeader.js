import Router from 'next/router'
import { useEffect, useState } from 'react'

const useHeader = ({ reload, setReload }) => {
  const [clientName, setClientName] = useState()
  const [cartItems, setCartItems] = useState([])
  const [isLogged, setIsLogged] = useState()

  const totalItems = cartItems?.reduce((acc, item) => {
    return acc + item.qtd
  }, 0)

  const handleHome = () => {
    Router.push('/')
  }

  const handleSignUp = () => {
    Router.push('/cadastrar')
  }

  const handleSignIn = () => {
    Router.push('/login')
  }

  const handleCart = () => {
    Router.push('/carrinho')
  }

  const handleModify = () => {
    Router.push('/alterar-cadastro')
  }
  const handleRequests = () => {
    Router.push('/meus-pedidos')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setReload(true)
  }

  useEffect(() => {
    setClientName(localStorage.getItem('nome'))
    setIsLogged(localStorage.getItem('token'))
    setCartItems(JSON.parse(localStorage.getItem('carrinho')))
    setReload(false)
  }, [reload])

  return {
    handleHome,
    handleSignUp,
    handleSignIn,
    handleModify,
    handleLogout,
    handleCart,
    clientName,
    handleRequests,
    isLogged,
    cartItems,
    totalItems
  }
}

export default useHeader

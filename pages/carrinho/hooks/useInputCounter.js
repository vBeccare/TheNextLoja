import { useEffect, useState } from 'react'

const useInputCounter = ({ reload, setReload }) => {
  const [cartItems, setCartItems] = useState([])

  const handleUpdateQtd = (value, id) => {
    const carrinho = JSON.parse(localStorage?.getItem('carrinho'))
    const currentProduct = carrinho?.find((item) => item.id === id)
    const currentProductIndex = carrinho.findIndex((item) => item.id === id)

    currentProduct.qtd = Number(value)
    currentProduct.totalValue =
      Number(currentProduct.qtd) * Number(currentProduct.value)

    carrinho.splice(currentProductIndex, 1, currentProduct)
    localStorage.setItem('carrinho', JSON.stringify([...carrinho]))

    setReload(true)
  }

  const handleRemoveItem = (id) => {
    const carrinho = JSON.parse(localStorage?.getItem('carrinho'))
    const currentProductIndex = carrinho.findIndex((item) => item.id === id)
    if (currentProductIndex > -1) {
      carrinho.splice(currentProductIndex, 1)
      localStorage.setItem('carrinho', JSON.stringify([...carrinho]))

      setReload(true)
    }
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('carrinho')))

    setReload(false)
  }, [reload])

  return {
    cartItems,
    handleUpdateQtd,
    handleRemoveItem
  }
}

export default useInputCounter

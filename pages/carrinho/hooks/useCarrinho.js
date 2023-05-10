import { useEffect, useState } from 'react'
import Router from 'next/router'
import { getMoneyMask } from '../../../utils/formatters'
import { getAllclients } from '../../../services/cliente'

const useCarrinho = ({ reload, setReload }) => {
  const [freteSelected, setFreteSelected] = useState()
  const [freteItems, setFreteItems] = useState([])
  const [cep, setCep] = useState('')

  const [freteValue, setFreteValue] = useState()
  const [sumProductsCart, setSumProductsCart] = useState()
  const [totalValue, setTotalValue] = useState()

  const [isLogged, setIsLogged] = useState()

  const validCep = cep.replace('_', '').length === 9

  const handleGenerateFrete = () => {
    const freteArray = [
      {
        name: 'PAC',
        value: getMoneyMask(
          (Math.random() * (50 - 10) + 10).toFixed(2),
          'R$ ',
          2,
        ),
      },
      {
        name: 'SEDEX',
        value: getMoneyMask(
          (Math.random() * (50 - 10) + 10).toFixed(2),
          'R$ ',
          2,
        ),
      },
      {
        name: 'AZUL',
        value: getMoneyMask(
          (Math.random() * (50 - 10) + 10).toFixed(2),
          'R$ ',
          2,
        ),
      },
    ]
    setFreteItems(freteArray)
    setFreteSelected('0')
  }

  const handleFinishRequest = () => {
    isLogged
      ? Router.push('/endereco-compra')
      : Router.push('/login?redirect=carrinho')
  }

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    const sum = carrinho?.reduce((acc, item) => {
      return acc + item.totalValue
    }, 0)
    setSumProductsCart(sum)
    setIsLogged(localStorage.getItem('token'))
  }, [reload])

  useEffect(() => {
    const frete = freteItems[Number(freteSelected)]?.value
    setFreteValue(frete)
  }, [freteSelected])

  useEffect(() => {
    if (isLogged) {
      getAllclients().then((res) => {
        const clientList = res?.data

        console.log({ clientList })

        const client = clientList.find((client) => {
          return client.id === Number(localStorage.getItem('id'))
        })

        const clientCep = client.endereco.find((address) => address.padrao)?.cep
        setCep(clientCep)
      })
      handleGenerateFrete()
    }
  }, [isLogged])

  useEffect(() => {
    setTotalValue(
      parseFloat(freteValue?.replace('R$ ', '').replace(',', '.')) +
        sumProductsCart,
    )
  }, [freteValue, sumProductsCart])

  return {
    freteValue,
    setFreteValue,
    setFreteSelected,
    freteSelected,
    handleGenerateFrete,
    freteItems,
    setCep,
    validCep,
    cep,
    sumProductsCart,
    totalValue,
    handleFinishRequest,
  }
}

export default useCarrinho

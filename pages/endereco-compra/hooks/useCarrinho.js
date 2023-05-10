import { useEffect, useState } from 'react'
import Router from 'next/router'
import { getMoneyMask } from '../../../utils/formatters'

const useCarrinho = () => {
  const [freteSelected, setFreteSelected] = useState()
  const [freteItems, setFreteItems] = useState([])
  const [cep, setCep] = useState('')

  const [freteValue, setFreteValue] = useState()
  const [sumProductsCart, setSumProductsCart] = useState(1000)
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
    isLogged ? Router.push('/endereço') : Router.push('/login')
  }

  useEffect(() => {
    const frete = freteItems[Number(freteSelected)]?.value
    setFreteValue(frete)
    setIsLogged(localStorage.getItem('token'))
  }, [freteSelected])

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
		sumProductsCart,
		totalValue,
    handleFinishRequest
  }
}

export default useCarrinho

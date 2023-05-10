import { useEffect, useState } from 'react'
import Router from 'next/router'
import { getMoneyMask } from '../../../utils/formatters'
import { useRouter } from 'next/router'

const useCarrinho = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank-slip')
  const [totalCompra, setTotalCompra] = useState()

  console.log({totalCompra})

  const router = useRouter()

  const handleFinishRequest = (requestNumber) => {
    router.push(`/resumos?request=${requestNumber}`)
  }

  useEffect(() => {
    localStorage.setItem('paymentMethod', paymentMethod)
  }, [paymentMethod])

  useEffect(() => {
    setTotalCompra(parseFloat(localStorage.getItem('totalCompra')))
  }, [])

  const installmentsList = [
    {value: '1', label: `1x de ${getMoneyMask(totalCompra, 'R$', 2)}`},
    {value: '2', label: `2x de ${getMoneyMask(totalCompra/2, 'R$', 2)}`},
    {value: '3', label: `3x de ${getMoneyMask(totalCompra/3, 'R$', 2)}`},

  ]

  return {
    paymentMethod,
    setPaymentMethod,
    handleFinishRequest,
    installmentsList
  }
}

export default useCarrinho

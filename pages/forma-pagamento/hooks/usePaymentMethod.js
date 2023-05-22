import { useEffect, useState } from 'react'
import Router from 'next/router'
import { getMoneyMask } from '../../../utils/formatters'
import { useRouter } from 'next/router'

const useCarrinho = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank-slip')
  const [totalCompra, setTotalCompra] = useState()
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [installments, setInstallments] = useState('1')

  const router = useRouter()

  const handleFinishRequest = (requestNumber) => {
    router.push(`/resumos?request=${requestNumber}`)
  }

  useEffect(() => {
    localStorage.setItem('paymentMethod', paymentMethod)
    localStorage.setItem(
      'paymentData',
      JSON.stringify({
        cardNumber,
        cardName,
        cardDate,
        cardCvv,
        installments,
      }),
    )
  }, [paymentMethod, cardNumber, cardName, cardDate, cardCvv, installments])

  useEffect(() => {
    setTotalCompra(parseFloat(localStorage.getItem('totalCompra')))
  }, [])

  const installmentsList = [
    { value: '1', label: `1x de ${getMoneyMask(totalCompra, 'R$', 2)}` },
    { value: '2', label: `2x de ${getMoneyMask(totalCompra / 2, 'R$', 2)}` },
    { value: '3', label: `3x de ${getMoneyMask(totalCompra / 3, 'R$', 2)}` },
  ]

  return {
    paymentMethod,
    setPaymentMethod,
    handleFinishRequest,
    installmentsList,
    cardNumber,
    setCardNumber,
    cardName,
    setCardName,
    cardDate,
    setCardDate,
    cardCvv,
    setCardCvv,
    installments,
    setInstallments,
  }
}

export default useCarrinho

import { useRouter } from 'next/router'
import { requests } from '../constants'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { getAllclients } from '../../../services/cliente'

const useRequestDetails = () => {
  const router = useRouter()

  const [cart, setCart] = useState([])
  const [totalCompra, setTotalCompra] = useState(0)
  const [frete, setFrete] = useState(0)
  const [address, setAddress] = useState()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentDetails, setPaymentDetails] = useState({})
  const [sumProductsCart, setSumProductsCart] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'))
    const totalCompra = localStorage.getItem('totalCompra')
    const frete = JSON.parse(localStorage.getItem('frete'))
    const paymentMethod = localStorage.getItem('paymentMethod')
    const paymentDetails = JSON.parse(localStorage.getItem('paymentData'))
    const addressId = localStorage.getItem('enderecoSelecionado')

    getAllclients().then((res) => {
      const clientList = res?.data

      const client = clientList.find((client) => {
        return client.id === Number(localStorage.getItem('id'))
      })

      const choiceAddress = client.endereco.filter(
        (address) => address.id === Number(addressId),
      )
      setAddress(choiceAddress[0])
    })

    const sum = cart?.reduce((acc, item) => {
      return acc + item.totalValue
    }, 0)

    setSumProductsCart(sum)
    setTotalCompra(totalCompra)
    setFrete(frete)
    setPaymentMethod(paymentMethod)
    setPaymentDetails(paymentDetails)
    setAddress(address)
    setCart(cart)
  }, [])

  const payload = {
    nome: paymentDetails?.cardName,
    numeroCartao: paymentDetails?.cardNumber,
    dataVencimento: paymentDetails?.cardDate,
    codigo: paymentDetails?.cardCvv,
    parcelas: paymentDetails?.installments,
    enderecoEntrega: address?.endereco,
    valorTotal: sumProductsCart,
    totalGeral: totalCompra,
    pagamento: paymentMethod === 'bank-slip' ? 1 : 2,
    frete: frete,
    produto: cart.map((item) => ({
      id: item.id,
      quantidade: item.qtd,
    })),
  }

  const handleFinishRequest = () => {
    //enviar para o backend

    Router.push('/meus-pedidos')
  }

  const handleReturnPayment = () => {
    Router.push('/forma-pagamento')
  }

  return {
    handleFinishRequest,
    handleReturnPayment,
    cart,
    totalCompra,
    address,
    paymentMethod,
    paymentDetails,
    frete,
    sumProductsCart,
  }
}

export default useRequestDetails

import { useRouter } from 'next/router'
import { requests } from '../constants'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { getAllclients } from '../../../services/cliente'
import { postItemCart, postCart } from '../../../services/orders'

const useRequestDetails = () => {
  const router = useRouter()

  const [cart, setCart] = useState([])
  const [clientId, setClientId] = useState()
  const [totalCompra, setTotalCompra] = useState(0)
  const [frete, setFrete] = useState(0)
  const [address, setAddress] = useState()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [paymentDetails, setPaymentDetails] = useState({})
  const [sumProductsCart, setSumProductsCart] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'))
    const totalCompra = Number(localStorage.getItem('totalCompra'))
    const frete = JSON.parse(localStorage.getItem('frete'))
    const paymentMethod = localStorage.getItem('paymentMethod')
    const paymentDetails = JSON.parse(localStorage.getItem('paymentData'))
    const addressId = localStorage.getItem('enderecoSelecionado')

    getAllclients().then((res) => {
      const clientList = res?.data

      const client = clientList.find((client) => {
        setClientId(Number(localStorage.getItem('id')))
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

  const cartItems = cart.map((item) => ({
    id: item.id,
    quantidade: item.qtd,
    valorUnitario: item.value,
    nome: item.name,
  }))

  const payload = {
    nome: paymentDetails?.cardName,
    numeroCartao: paymentDetails?.cardNumber,
    dataVencimento: paymentDetails?.cardDate,
    codigo: paymentDetails?.cardCvv,
    parcelas: Number(paymentDetails?.installments),
    endereçoEntrega: address?.endereco,
    valorTotal: sumProductsCart,
    totalGeral: parseFloat(totalCompra),
    pagamento: paymentMethod === 'bank-slip' ? 1 : 2,
    frete: frete,
    cliente: { id: clientId },
  }

  const handleFinishRequest = () => {
    cartItems.map((item) => {
      postItemCart(item)
    })

    setTimeout(() => {
      postCart(payload)
        .then(() => {
          localStorage.removeItem('carrinho')
          Router.push('/meus-pedidos')
        })
        .catch(() => {
          alert('Falha ao realizar a compra')
        })
    }, 1500)
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

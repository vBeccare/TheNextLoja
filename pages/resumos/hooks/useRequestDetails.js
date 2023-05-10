import { useRouter } from 'next/router'
import { requests } from '../constants'
import Router from 'next/router'

const useRequestDetails = () => {
  const router = useRouter()
  const requestNumber = router.query.request



  const requestDetails = requests.find((item) => item.number === requestNumber)
  const cartArray = requestDetails?.products

  const handleSumProducts = () => {
    const sum = cartArray?.reduce((acc, item) => {
      return acc + item.value * item.qtd
    }, 0)

    return sum
  }

  const handleFinishRequest = () => {
    Router.push('/meus-pedidos')
  }

  const handleReturnPayment = () => {
    Router.push('/forma-pagamento')
  }

  return {
    requestNumber,
    handleSumProducts,
    requestDetails,
    cartArray,
    handleFinishRequest,
    handleReturnPayment,
  }
}

export default useRequestDetails

import { useRouter } from 'next/router'
import { requests } from '../../constants'

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

  return {
    requestNumber,
    handleSumProducts,
    requestDetails,
    cartArray,
  }
}

export default useRequestDetails

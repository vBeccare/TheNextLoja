import { useRouter } from 'next/router'

const useRequestItem = () => {
  const router = useRouter()

  const handleRequestDetails = (requestNumber) => {
    router.push(`/meus-pedidos/detalhes?request=${requestNumber}`)
  }
  return {
		handleRequestDetails
	}
}

export default useRequestItem

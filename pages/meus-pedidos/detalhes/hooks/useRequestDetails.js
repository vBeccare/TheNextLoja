import { useRouter } from 'next/router'
import { requests } from '../../constants'
import { useEffect, useState } from 'react'
import { getAllItems, getAllRequests } from '../../../../services/orders'

const useRequestDetails = () => {
  const [order, setOrder] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const [clientId, setClientId] = useState()

  const router = useRouter()
  const requestNumber = router.query.request

  const handleRequestDetails = () => {
    getAllRequests().then((res) => {
      const orderList = res.data
      const currentOrder = orderList.find(
        (order) => order?.id === Number(requestNumber),
      )

      setOrder(currentOrder)

      getAllItems().then((res) => {
        const itemsList = res.data

        const currentOrderItems = itemsList.filter(
          (item) => item?.codigo === currentOrder?.codigoItem,
        )

        const formattedCurrentOrderItems = currentOrderItems.map((item) => ({
          id: item.id,
          name: item.nome,
          value: item.valorUnitario,
          qtd: item.quantidade,
        }))

        setOrderItems(formattedCurrentOrderItems)
      })
    })
  }

  useEffect(() => {
    handleRequestDetails()
  }, [])

  return {
    requestNumber,
    order,
    orderItems,
  }
}

export default useRequestDetails

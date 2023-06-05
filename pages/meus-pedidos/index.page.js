import { Flex, Text } from '@chakra-ui/react'

import Header from '../../components/Header'
import RequestItem from './components/RequestItem'
import { getAllRequests } from '../../services/orders'
import { useEffect, useState } from 'react'

const MyRequests = ({ reload, setReload }) => {
  const [orderList, setOrderList] = useState([])
  const [clientId, setClientId] = useState()

  const handleRequestDetails = () => {
    getAllRequests().then((res) => {
      const orderList = res.data

      const filteredOrderList = orderList.filter(
        (order) => order?.cliente?.id === clientId,
      )

      const formattedOrderList = filteredOrderList.map((order) => ({
        number: order.id,
        date: order.data,
        totalValue: order.totalGeral,
        status: order.status,
      }))

      setOrderList(formattedOrderList.reverse())
    })
  }

  useEffect(() => {
    setClientId(Number(localStorage.getItem('id')))
    if (clientId) {
      handleRequestDetails()
    }
  }, [clientId])
  return (
    <Flex
      height="100vh"
      marginBottom={16}
      display="flex"
      flexDirection="column"
    >
      <Header reload={reload} setReload={setReload} hasFilter={false} />
      <Flex marginX={{ base: 0, md: 32 }} marginTop={16} flexDirection="column">
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Meus pedidos
        </Text>
        <Flex gap={8} marginTop={8} marginX={16} flexDirection="column">
          {orderList.map(({ status, number, totalValue, date }) => {
            return (
              <RequestItem
                status={status}
                number={number}
                totalValue={totalValue}
                date={date}
              />
            )
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MyRequests

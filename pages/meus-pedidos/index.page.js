import { Flex, Text } from '@chakra-ui/react'

import Header from '../../components/Header'
import RequestItem from './components/RequestItem'
import { requests } from './constants'

const MyRequests = ({ reload, setReload }) => {
  return (
    <Flex
      height="100vh"
      marginBottom={16}
      display="flex"
      flexDirection="column"
    >
      <Header reload={reload} setReload={setReload} hasFilter={false} />
      <Flex marginX={32} marginTop={16} flexDirection="column">
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Meus pedidos
        </Text>
        <Flex gap={8} marginTop={8} marginX={16} flexDirection="column">
          {requests.map(({ status, number, totalValue, date }) => {
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

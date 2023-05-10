import { Button, Flex, Text } from '@chakra-ui/react'

import Header from '../../../components/Header'
import RequestItem from './components/RequestItem'
import useRequestDetails from './hooks/useRequestDetails'
import { getMoneyMask } from '../../../utils/formatters'

const MyRequests = ({ reload, setReload }) => {
  const { requestNumber, handleSumProducts, cartArray, requestDetails } =
    useRequestDetails()
  return (
    <Flex
      height="100vh"
      marginBottom={16}
      display="flex"
      flexDirection="column"
    >
      <Header reload={reload} setReload={setReload} hasFilter={false} />
      <Flex marginX={8} marginTop={16} flexDirection="column">
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Pedido #{requestNumber}
        </Text>
        <Flex gap={8} marginTop={8} marginX={16}>
          <Flex
            flexDirection="column"
            backgroundColor="gray.200"
            padding={8}
            flex={1}
            borderRadius={8}
            gap={8}
          >
            <Text fontSize={24}>Produtos</Text>
            {cartArray?.map(({ name, value, qtd }, idx) => {
              return (
                <Flex
                  key={idx}
                  justifyContent="space-between"
                  paddingRight={16}
                >
                  <Text>{name}</Text>

                  <Text>valor: {getMoneyMask(value, 'R$', 2)}</Text>
                  <Text>quantidade: {qtd}</Text>
                  <Text>valor total: {getMoneyMask(value * qtd, 'R$', 2)}</Text>
                </Flex>
              )
            })}
          </Flex>

          <Flex flexDirection="column">
            <Flex
              minWidth={400}
              backgroundColor="gray.200"
              padding={8}
              gap={4}
              height="100%"
              flexDirection="column"
              borderRadius={8}
            >
              <Text>Status: {requestDetails?.status}</Text>
              <Text>Data da compra: {requestDetails.date}</Text>
              <Text>
                Valor dos produtos: {getMoneyMask(handleSumProducts(), 'R$', 2)}
              </Text>
              <Text>Frete: {getMoneyMask(20, 'R$', 2)}</Text>
              <Text backgroundColor="gray.100" padding={2} borderRadius={8}>
                Total: {getMoneyMask(handleSumProducts() + 20, 'R$', 2)}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MyRequests

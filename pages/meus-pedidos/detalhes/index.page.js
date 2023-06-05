import { Spinner, Flex, Text } from '@chakra-ui/react'

import Header from '../../../components/Header'
import RequestItem from './components/RequestItem'
import useRequestDetails from './hooks/useRequestDetails'
import { getMoneyMask, formattedDate } from '../../../utils/formatters'

const MyRequests = ({ reload, setReload }) => {
  const { requestNumber, order, orderItems } = useRequestDetails()
  if (orderItems.length === 0) {
    return (
      <Flex justifyContent="center" aligItems="center">
        <Spinner color="teal.500" size="lg" />
      </Flex>
    )
  }
  return (
    <Flex
      height="100vh"
      marginBottom={16}
      display="flex"
      flexDirection="column"
    >
      <Header reload={reload} setReload={setReload} hasFilter={false} />
      <Flex
        marginX={8}
        marginTop={16}
        paddingBottom={{ base: 8, md: 0 }}
        flexDirection="column"
      >
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Pedido #{requestNumber}
        </Text>
        <Flex
          gap={8}
          marginTop={8}
          marginX={{ base: '0', md: '16' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex
            flexDirection="column"
            backgroundColor="gray.200"
            padding={8}
            flex={1}
            borderRadius={8}
            gap={8}
          >
            <Text fontSize={24}>Produtos</Text>
            {orderItems?.map(({ name, value, qtd }, idx) => {
              return (
                <Flex
                  key={idx}
                  justifyContent="space-between"
                  // paddingRight={{ base: 0, md: 16 }}
                  flexDirection={{ base: 'column', md: 'column' }}
                  border="1px solid white"
                  borderRadius={8}
                  marginBottom={2}
                  padding={4}
                  gap={{ base: 8, md: 0 }}
                >
                  <Text>{name}</Text>

                  <Flex gap={8} flexDirection={{ base: 'column', md: 'row' }}>
                    <Text minWidth={{ base: '100%', md: '140px' }}>
                      valor: {getMoneyMask(value, 'R$', 2)}
                    </Text>
                    <Text minWidth={{ base: '100%', md: '100px' }}>
                      quantidade: {qtd}
                    </Text>
                    <Text>
                      valor total: {getMoneyMask(value * qtd, 'R$', 2)}
                    </Text>
                  </Flex>
                </Flex>
              )
            })}
          </Flex>

          <Flex flexDirection="column">
            <Flex
              minWidth={{ base: '100', md: '400' }}
              backgroundColor="gray.200"
              padding={8}
              gap={4}
              height="100%"
              flexDirection="column"
              borderRadius={8}
            >
              <Text>Status: {order?.status}</Text>
              <Text>Data da compra: {formattedDate(order?.dataCompra)}</Text>
              <Text>
                Valor dos produtos: {getMoneyMask(order?.valorTotal, 'R$', 2)}
              </Text>
              <Text>Frete: {getMoneyMask(order?.frete, 'R$', 2)}</Text>
              <Text backgroundColor="gray.100" padding={2} borderRadius={8}>
                Total: {getMoneyMask(order?.totalGeral, 'R$', 2)}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MyRequests

import { Button, Flex, Text } from '@chakra-ui/react'

import Header from '../../components/Header'
import RequestItem from './components/RequestItem'
import useRequestDetails from './hooks/useRequestDetails'
import { getMoneyMask } from '../../utils/formatters'

const Pedidos = ({ reload, setReload }) => {
  const {
    cart,
    totalCompra,
    address,
    paymentMethod,
    paymentDetails,
    sumProductsCart,
    frete,
    isButtonDisabled,
    handleFinishRequest,
    handleReturnPayment,
  } = useRequestDetails()
  return (
    <Flex height="100vh" marginBottom={8} display="flex" flexDirection="column">
      <Header reload={reload} setReload={setReload} hasFilter={false} />
      <Flex marginX={8} marginTop={16} flexDirection="column">
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Resumo
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
            {cart?.map(({ name, value, qtd }, idx) => {
              return (
                <Flex
                  key={idx}
                  justifyContent="space-between"
                  gap={8}
                  border={{ base: '1px solid white', md: 'none' }}
                  borderRadius={8}
                  padding={{ base: 4, md: 0 }}
                  paddingRight={16}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Text minWidth={180} maxWidth={180}>
                    {name}
                  </Text>

                  <Text minWidth={100} maxWidth={100}>
                    Valor: {getMoneyMask(value, 'R$', 2)}
                  </Text>
                  <Text>Quantidade: {qtd}</Text>
                  <Text>Valor total: {getMoneyMask(value * qtd, 'R$', 2)}</Text>
                </Flex>
              )
            })}

            <Flex
              justifyContent="center"
              gap={16}
              marginTop={{ base: 50, md: 100 }}
            >
              <Button
                isDisabled={isButtonDisabled}
                onClick={handleReturnPayment}
                colorScheme="blue"
              >
                Voltar
              </Button>

              <Button
                isDisabled={isButtonDisabled}
                onClick={handleFinishRequest}
                colorScheme="teal"
              >
                Finalizar Compra
              </Button>
            </Flex>
          </Flex>

          <Flex flexDirection="column">
            <Flex
              minWidth={{ base: '200', md: '400' }}
              backgroundColor="gray.200"
              padding={8}
              gap={4}
              height="100%"
              flexDirection="column"
              borderRadius={8}
            >
              <Text>
                Forma de Pagamento:{' '}
                {paymentMethod === 'credit' ? 'Cartão de crédito' : 'Boleto'}
              </Text>
              <Text>Endereço de Entrega: {address?.endereco}</Text>
              <Text>Nº: {address?.numero}</Text>
              <Text>
                Valor dos produtos: {getMoneyMask(sumProductsCart, 'R$', 2)}
              </Text>
              <Text>Frete: {getMoneyMask(frete, 'R$', 2)}</Text>
              <Text backgroundColor="gray.100" padding={2} borderRadius={8}>
                Total: {getMoneyMask(totalCompra, 'R$', 2)}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Pedidos

import {
  Flex,
  HStack,
  Button,
  Input,
  Text,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import InputMask from 'react-input-mask'

import HeaderSimple from '../../components/HeaderSimple'

import useInputCounter from './hooks/useInputCounter'
import FreteItem from './components/FreteItem'
import useCarrinho from './hooks/useCarrinho'
import { getMoneyMask } from '../../utils/formatters'

const Carrinho = ({ setReload, reload, number= 12353 }) => {
  const { cartArray } = useInputCounter()
  const {
    freteValue,
    handleGenerateFrete,
    freteItems,
    validCep,
    setCep,
    freteSelected,
    setFreteSelected,
    sumProductsCart,
    totalValue,
    handleFinishRequest,
  } = useCarrinho()

  return (
    <Flex flexDirection="column">
      <HeaderSimple />
      <Text
        fontSize={32}
        fontWeight="bold"
        color="teal.400"
        marginTop={4}
        textAlign="center"
      >
        Forma de pagamento
      </Text>

      <Flex marginTop={16} paddingX={16} gap={16}>
        <Flex flex={1} gap={8} flexDirection="column">
          <Flex
            flexDirection="column"
            backgroundColor="gray.200"
            padding={8}
            borderRadius={8}
            gap={8}
          >
            <Text fontSize={24}>Produtos</Text>
          </Flex>
          <Flex flexDirection="column" paddingLeft={8} gap={8}>
            <Flex gap={8} alignItems="flex-end">
              <Flex maxWidth="250px">
                <FormControl isInvalid={false}>
                  <FormLabel>CEP</FormLabel>
                  <Input
                    as={InputMask}
                    mask="*****-***"
                    onChange={(e) => setCep(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <Button isDisabled={!validCep} onClick={handleGenerateFrete}>
                calcular
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex
            minWidth={400}
            backgroundColor="gray.200"
            padding={8}
            gap={4}
            flexDirection="column"
            borderRadius={8}
          >
            <Text fontSize={24}>Resumo</Text>
            <Text>Valor dos produtos: R$ {sumProductsCart}</Text>
            <Text>Frete: {freteValue ? freteValue : '-'}</Text>
            <Text backgroundColor="gray.100" padding={2} borderRadius={8}>
              Total:{' '}
              {freteValue
                ? getMoneyMask(totalValue, 'R$', 2)
                : getMoneyMask(sumProductsCart, 'R$', 2)}
            </Text>
          </Flex>
          <Button
            marginTop={8}
            colorScheme="teal"
            onClick={() =>handleFinishRequest(number)}
          >
            Revisar pedido
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Carrinho

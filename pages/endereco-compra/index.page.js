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
import useEndereco from './hooks/useEndereco'
import useCarrinho from './hooks/useCarrinho'
import FreteItem from './components/FreteItem'
import { getMoneyMask } from '../../utils/formatters'

const Carrinho = ({ setReload, reload }) => {
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

  const { handlePaymentMethod } = useEndereco()

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
        Endereço
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
            <Text fontSize={24}>Selecione o endereço de entrega</Text>
          </Flex>

          <Flex maxWitdh={100} justifyContent="flex-end">
            <Button
              marginTop={8}
              maxWitdh={100}
              colorScheme="teal"
              onClick={handlePaymentMethod}
            >
              Forma de pagamento
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection="column"></Flex>
      </Flex>
    </Flex>
  )
}

export default Carrinho

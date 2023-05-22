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
import InputCounter from './components/InputCounter'

const Carrinho = ({ setReload, reload }) => {
  const { cartItems, handleUpdateQtd, handleRemoveItem } = useInputCounter({
    reload,
    setReload,
  })

  const {
    freteValue,
    handleGenerateFrete,
    freteItems,
    validCep,
    setCep,
    cep,
    freteSelected,
    setFreteSelected,
    sumProductsCart,
    totalValue,
    handleFinishRequest,
  } = useCarrinho({ reload, setReload })

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
        Carrinho
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
            {cartItems?.length === 0 && (
              <Text>Nenhum produto adicionado ao carrinho</Text>
            )}
            {cartItems?.map(({ name, value, qtd, id, totalValue }, idx) => {
              return (
                <Flex
                  key={idx}
                  justifyContent="space-between"
                  paddingRight={16}
                >
                  <Text minWidth={240} maxWidth={350}>
                    {name}
                  </Text>

                  <InputCounter
                    defaultValue={qtd}
                    handleUpdateQtd={handleUpdateQtd}
                    handleRemoveItem={handleRemoveItem}
                    id={id}
                  />

                  <Text minWidth={100} textAlign="end">
                    {getMoneyMask(totalValue, 'R$ ', 2)}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
          <Flex flexDirection="column" paddingLeft={8} gap={8}>
            <Flex gap={8} alignItems="flex-end" marginBottom={16}>
              <Flex maxWidth="250px">
                <FormControl isInvalid={false}>
                  <FormLabel>CEP</FormLabel>
                  <Input
                    as={InputMask}
                    mask="*****-***"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <Button isDisabled={!validCep} onClick={handleGenerateFrete}>
                calcular
              </Button>
            </Flex>
          </Flex>
          {freteItems.length > 0 && (
            <Flex flexDirection="column" padding={8} borderRadius={8} gap={8}>
              <Text fontSize={24}>Frete</Text>
              <RadioGroup
                onChange={setFreteSelected}
                display="flex"
                flexDirection="column"
                gap={4}
                value={freteSelected}
              >
                {freteItems.map((item, idx) => {
                  return (
                    <FreteItem
                      idx={`${idx}`}
                      name={item.name}
                      value={item.value}
                    />
                  )
                })}
              </RadioGroup>
            </Flex>
          )}
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
            <Text>
              Valor dos produtos: {getMoneyMask(sumProductsCart, 'R$', 2)}
            </Text>
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
            isDisabled={cartItems?.length === 0 || cartItems === null}
            onClick={handleFinishRequest}
          >
            Finalizar pedido
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Carrinho

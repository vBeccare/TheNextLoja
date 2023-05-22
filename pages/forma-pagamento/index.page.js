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
  Select,
} from '@chakra-ui/react'

import InputMask from 'react-input-mask'

import HeaderSimple from '../../components/HeaderSimple'

import usePaymentMethod from './hooks/usePaymentMethod'
import { getMoneyMask } from '../../utils/formatters'

const Carrinho = ({ setReload, reload, number = 12353 }) => {
  const {
    paymentMethod,
    setPaymentMethod,
    handleFinishRequest,
    installmentsList,
    cardNumber,
    setCardNumber,
    cardName,
    setCardName,
    cardDate,
    setCardDate,
    cardCvv,
    setCardCvv,
    installments,
    setInstallments,
  } = usePaymentMethod()

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
        <Flex minWidth={800} gap={8} flexDirection="column">
          <Flex
            flexDirection="column"
            backgroundColor="gray.300"
            padding={8}
            borderRadius={8}
            gap={8}
          >
            <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
              <Stack direction="row">
                <Radio value="bank-slip">Boleto</Radio>
                <Radio value="credit">Cartão de crédito</Radio>
              </Stack>
            </RadioGroup>
            {paymentMethod === 'credit' && (
              <Flex gap={8} flexDirection="column">
                <Flex gap={8}>
                  <FormControl id="card-number">
                    <FormLabel>Número do cartão</FormLabel>

                    <Input
                      as={InputMask}
                      value={cardNumber}
                      mask="9999 9999 9999 9999"
                      onChange={(e) => {
                        setCardNumber(e.target.value)
                      }}
                    />
                  </FormControl>
                  <FormControl id="card-number">
                    <FormLabel>código verificador</FormLabel>

                    <Input
                      maxWidth={40}
                      value={cardCvv}
                      onChange={(e) => {
                        setCardCvv(e.target.value)
                      }}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={8}>
                  <FormControl id="card-number">
                    <FormLabel>Nome completo</FormLabel>

                    <Input
                      value={cardName}
                      onChange={(e) => {
                        setCardName(e.target.value)
                      }}
                    />
                  </FormControl>
                  <FormControl id="card-number">
                    <FormLabel>Data vencimento</FormLabel>

                    <Input
                      maxWidth={40}
                      as={InputMask}
                      value={cardDate}
                      mask="99/99"
                      onChange={(e) => {
                        setCardDate(e.target.value)
                      }}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={8}>
                  <FormControl id="card-number">
                    <FormLabel>Parcelas</FormLabel>

                    <Select
                      onChange={(e) => {
                        setInstallments(e.target.value)
                      }}
                    >
                      {installmentsList.map((installment) => {
                        return (
                          <option value={installment.value}>
                            {installment.label}
                          </option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Button
            marginTop={8}
            colorScheme="teal"
            onClick={() => handleFinishRequest(number)}
          >
            Revisar pedido
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Carrinho

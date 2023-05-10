import { Flex, Text, Button } from '@chakra-ui/react'

const RequestItem = () => {
  return (
    <Flex
      borderWidth={2}
      borderRadius={8}
      padding={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>#00001232</Text>
      <Text>19/10/2023</Text>
      <Text>R$ 1000,00</Text>
      <Text>Aguardando pagamento</Text>

      <Button colorScheme="blue">Detalhes</Button>
    </Flex>
  )
}

export default RequestItem

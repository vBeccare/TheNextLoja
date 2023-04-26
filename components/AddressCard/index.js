import { Button, Flex, Text } from '@chakra-ui/react'

const AddressCard = ({
  bairro,
  cep,
  address,
  number,
  complement,
  city,
  uf,
  isDefault,
  id,
}) => {
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      padding={8}
      backgroundColor="white"
      boxShadow="0px 7px 13px -5px rgba(0,0,0,0.75)"
      maxWidth={600}
      minWidth={300}
      cursor="pointer"
    >
      <Text
        whiteSpace="nowrap"
        maxWidth={180}
        marginY={4}
        overflow="hidden"
        textOverflow="ellipsis"
      >
        CEP: {cep}
      </Text>

      <Text>Endereço: {address}</Text>
      <Text>Bairro: {bairro}</Text>
      <Text>Número: {number}</Text>
      <Text>Complemento: {complement}</Text>
      <Text>Cidade: {city}</Text>
      <Text>UF: {uf}</Text>

      <Flex gap={8} marginTop={8}>
        <Button colorScheme={'yellow'} isDisabled={isDefault}>
          Padrão
        </Button>
        <Button colorScheme="red">Excluir</Button>
      </Flex>
    </Flex>
  )
}

export default AddressCard

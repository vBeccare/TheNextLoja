import { Button, Flex, Text } from '@chakra-ui/react'
import useAddressCard from './hooks/useAddressCard'

const AddressCard = ({
  bairro,
  cep,
  address,
  number,
  complement,
  city,
  uf,
  isDefault,
  tipo,
  id,
  setReloadAddress,
  reloadAddress,
  selectedAddress,
  isSelectedMode = false,
  setSelectedAddress,
}) => {
  const isFaturamento = tipo === 'F'

  const { updateAddress, handleDeleteAddress } = useAddressCard({
    setReloadAddress,
    reloadAddress,
  })
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      padding={8}
      backgroundColor={!isFaturamento ? 'white' : 'gray.200'}
      boxShadow="0px 7px 13px -5px rgba(0,0,0,0.75)"
      maxWidth={600}
      minWidth={300}
      minHeight={350}
      cursor={!isFaturamento ? 'pointer' : 'not-allowed'}
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

      <Text minHeight={16}>Endereço: {address}</Text>
      <Text minHeight={8}>Bairro: {bairro}</Text>
      <Text minHeight={8}>Número: {number}</Text>
      <Text minHeight={8}>Complemento: {complement ? complement : '-'}</Text>
      <Text minHeight={8}>Cidade: {city}</Text>
      <Text minHeight={8}>UF: {uf}</Text>

      {!isFaturamento && !isSelectedMode && (
        <Flex gap={8} marginTop={8}>
          <Button
            colorScheme={'yellow'}
            isDisabled={isDefault}
            onClick={() => updateAddress(id)}
          >
            Padrão
          </Button>
          <Button
            isDisabled={isDefault}
            colorScheme="red"
            onClick={() => handleDeleteAddress(id)}
          >
            Excluir
          </Button>
        </Flex>
      )}

      {isSelectedMode && (
        <Button
          colorScheme={'teal'}
          isDisabled={selectedAddress === id}
          onClick={() => setSelectedAddress(id)}
          marginTop={8}
        >
          Selecionar
        </Button>
      )}
    </Flex>
  )
}

export default AddressCard

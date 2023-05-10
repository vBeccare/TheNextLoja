import {
  Flex,
  Button,
  Input,
  Text,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormErrorMessage,
  ModalFooter,
} from '@chakra-ui/react'

import InputMask from 'react-input-mask'

import HeaderSimple from '../../components/HeaderSimple'

import useEndereco from './hooks/useEndereco'
import useEnderecoData from './hooks/useEnderecoData'
import AddressCard from '../../components/AddressCard'
import useModal from './hooks/useModal'

const Carrinho = ({ setReload, reload, setReloadAddress, reloadAddress }) => {
  const { initialChangeRef, finalChangeRef, isEditOpen, onClose, openModal } =
    useModal()
  const {
    handlePaymentMethod,
    addressList,
    selectedAddress,
    setSelectedAddress,
    getAddressList,
  } = useEndereco({ setReloadAddress, reloadAddress })

  const {
    handleNewAddress,

    errorCepE,
    enderecoEn,
    setCepE,
    cepE,
    setLogradouroE,
    setBairroE,
    setCityE,
    setUfE,
    setNumberE,
    setComplementE,
    logradouroE,
    numberE,
    complementE,
    bairroE,
    cityE,
    ufE,
  } = useEnderecoData({ onClose, getAddressList })

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
            <Flex justifyContent="space-between">
              <Text fontSize={24}>Selecione o endereço de entrega</Text>
              <Button colorScheme="teal" onClick={openModal}>Adicionar novo</Button>
            </Flex>
            <Flex gap={8} overflowX="scroll" maxWidth="80vw" padding={4}>
              {addressList.map((address) => {
                return (
                  <AddressCard
                    bairro={address.bairro}
                    cep={address.cep}
                    address={address.endereco}
                    number={address.numero}
                    complement={address.complemento}
                    city={address.cidade}
                    uf={address.uf}
                    isDefault={address.padrao}
                    tipo={address.tipo}
                    id={address.id}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    setReloadAddress={setReloadAddress}
                    reloadAddress={reloadAddress}
                  />
                )
              })}
            </Flex>
            <Modal
              initialFocusRef={initialChangeRef}
              finalFocusRef={finalChangeRef}
              isOpen={isEditOpen}
              size="xl"
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Novo endereço</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Flex>
                    <FormControl isInvalid={false}>
                      <FormLabel>CEP</FormLabel>
                      <Input
                        as={InputMask}
                        mask="*****-***"
                        onChange={(e) => setCepE(e.target.value)}
                      />
                      <FormErrorMessage>
                        Digite seu nome completo
                      </FormErrorMessage>
                    </FormControl>
                  </Flex>

                  <Flex gap={8} marginTop={4}>
                    <FormControl isInvalid={false}>
                      <FormLabel>Endereço</FormLabel>
                      <Input
                        value={logradouroE}
                        onChange={(e) => setLogradouroE(e.target.value)}
                        isReadOnly={!errorCepE}
                        backgroundColor={cepE && !errorCepE && 'gray.100'}
                      />
                    </FormControl>

                    <FormControl isInvalid={false}>
                      <FormLabel>Bairro</FormLabel>
                      <Input
                        value={bairroE}
                        onChange={(e) => setBairroE(e.target.value)}
                        isReadOnly={!errorCepE}
                        backgroundColor={cepE && !errorCepE && 'gray.100'}
                      />
                    </FormControl>
                  </Flex>

                  <Flex gap={8} marginTop={4}>
                    <FormControl isInvalid={false}>
                      <FormLabel>Numero</FormLabel>
                      <Input
                        value={numberE}
                        onChange={(e) => setNumberE(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isInvalid={false}>
                      <FormLabel>Complemento</FormLabel>
                      <Input
                        value={complementE}
                        onChange={(e) => setComplementE(e.target.value)}
                      />
                    </FormControl>
                  </Flex>

                  <Flex gap={8} marginTop={4}>
                    <FormControl isInvalid={false}>
                      <FormLabel>Cidade</FormLabel>
                      <Input
                        value={cityE}
                        onChange={(e) => setCityE(e.target.value)}
                        isReadOnly={!errorCepE}
                        backgroundColor={cepE && !errorCepE && 'gray.100'}
                      />
                    </FormControl>

                    <FormControl isInvalid={false}>
                      <FormLabel>UF</FormLabel>
                      <Input
                        value={ufE}
                        onChange={(e) => setUfE(e.target.value)}
                        isReadOnly={!errorCepE}
                        backgroundColor={cepE && !errorCepE && 'gray.100'}
                      />
                    </FormControl>
                  </Flex>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={handleNewAddress}>
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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

import {
  Flex,
  Text,
  Input,
  Select,
  FormControl,
  Switch,
  FormLabel,
  FormErrorMessage,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react'
import InputMask from 'react-input-mask'
import HeaderSimple from '../../components/HeaderSimple'
import AddressCard from '../../components/AddressCard'

import useCadastro from './hooks/useCadastro'
import useEndereco from './hooks/useEndereco'
import useModal from './hooks/useModal'

const SignUp = ({ setReload, setReloadAddress, reloadAddress }) => {
  console.log({setReloadAddress})
  const { initialChangeRef, finalChangeRef, isEditOpen, onClose, openModal } =
    useModal()

  const {
    setName,
    setBirthDate,
    setGender,
    setPassword,
    setConfirmPassword,
    gender,
    name,
    birthDate,
    handleSignUp,
    addressList = [],
    getAddressList,
  } = useCadastro({
    setReload,
    reloadAddress,
  })

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
  } = useEndereco({ onClose, getAddressList })

  return (
    <Flex flexDirection="column" marginBottom="100px">
      <HeaderSimple />
      <Flex marginX={32} marginTop={16} flexDirection="column">
        <Text
          fontSize={32}
          fontWeight="bold"
          color="teal.400"
          textAlign="center"
        >
          Alterar cadastro
        </Text>
        <Flex gap={8} marginTop={8} marginX={16}>
          <FormControl isInvalid={false}>
            <FormLabel>Nome completo</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <FormErrorMessage>Digite seu nome completo</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={false}>
            <FormLabel>Data Nascimento</FormLabel>
            <Input
              value={birthDate}
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex gap={8} marginTop={8} marginX={16} maxWidth="250px">
          <FormControl isInvalid={false}>
            <FormLabel>Gênero</FormLabel>
            <Select
              placeholder="Selecione..."
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex gap={8} marginTop={8} marginX={16}>
          <FormControl isInvalid={false}>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="********"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormErrorMessage>As senhas não são iguais</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={false}>
            <FormLabel>Confirmar senha</FormLabel>
            <Input
              placeholder="********"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
            <FormErrorMessage>As senhas não são iguais</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flexDirection="column" gap={8} marginTop={16} marginX={16}>
          <Flex flexDirection="column" gap={8} marginTop={16}>
            <Text fontWeight="bold">Endereços</Text>

            <Flex alignItems="center">
              <Flex gap={8} maxWidth={900} padding={8} overflowX="scroll">
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
                      setReloadAddress={setReloadAddress}
                      reloadAddress={reloadAddress}
                    />
                  )
                })}
              </Flex>
              <Button marginLeft={8} onClick={openModal} colorScheme="green">
                Adicionar novo
              </Button>
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
        </Flex>

        <Flex justifyContent="center" marginTop={12}>
          <Button onClick={handleSignUp} colorScheme="teal">
            Salvar alterações
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignUp

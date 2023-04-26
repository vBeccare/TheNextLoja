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
} from '@chakra-ui/react'
import InputMask from 'react-input-mask'
import HeaderSimple from '../../components/HeaderSimple'

import useCadastro from './hooks/useCadastro'
import useEndereco from './hooks/useEndereco'

const SignUp = () => {
  const {
    isSameAddress,
    setIsSameAddress,

    setCep,
    cep,
    errorCep,
    errorCepE,

    setLogradouro,
    setBairro,
    setCity,
    setUf,
    logradouro,
    bairro,
    city,
    uf,

    setNumber,
    setComplement,

    enderecoFa,
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
  } = useEndereco()

  const {
    isCpfValid,
    cpfValid,
    cpf,
    setCpf,
    setName,
    setBirthDate,
    setGender,
    setEmail,
    setPassword,
    setConfirmPassword,
    gender,
    handleSignUp,
    goToLogin,
    name,
    emailValidator,
    email,

    hasSamePasswords,
    isButtonDisabled,
    nameValidator
  } = useCadastro({
    enderecoFa,
    enderecoEn,
  })

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
          Cadastro
        </Text>
        <Flex gap={8} marginTop={8} marginX={16}>
          <FormControl isInvalid={name && !nameValidator}>
            <FormLabel>Nome completo</FormLabel>
            <Input placeholder='Nome completo' onChange={(e) => setName(e.target.value)} />
            <FormErrorMessage>Digite seu nome completo</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={cpf && !cpfValid}>
            <FormLabel>CPF</FormLabel>
            <Input
              as={InputMask}
              mask="***.***.***-**"
              placeholder="CPF"
              onChange={(e) => {
                isCpfValid(e.target.value)
                setCpf(e.target.value)
              }}
            />
            <FormErrorMessage>CPF inválido</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex gap={8} marginTop={8} marginX={16}>
          <FormControl isInvalid={false}>
            <FormLabel>Data Nascimento</FormLabel>
            <Input type="date" onChange={(e) => setBirthDate(e.target.value)} />
          </FormControl>
          <FormControl isInvalid={email && !emailValidator}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormErrorMessage>Digite um email válido</FormErrorMessage>
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
          <FormControl isInvalid={!hasSamePasswords}>
            <FormLabel>Senha</FormLabel>
            <Input
              placeholder="********"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormErrorMessage>As senhas não são iguais</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!hasSamePasswords}>
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
          <Text fontWeight="bold">Endereço de faturamento</Text>
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

          <Flex gap={8}>
            <FormControl isInvalid={false}>
              <FormLabel>Endereço</FormLabel>
              <Input
                value={logradouro}
                isReadOnly={!errorCep}
                onChange={(e) => setLogradouro(e.target.value)}
                backgroundColor={cep && !errorCep && 'gray.100'}
              />
            </FormControl>

            <FormControl isInvalid={false}>
              <FormLabel>Bairro</FormLabel>
              <Input
                value={bairro}
                isReadOnly={!errorCep}
                onChange={(e) => setBairro(e.target.value)}
                backgroundColor={cep && !errorCep && 'gray.100'}
              />
            </FormControl>
          </Flex>

          <Flex gap={8}>
            <FormControl isInvalid={false}>
              <FormLabel>Numero</FormLabel>
              <Input onChange={(e) => setNumber(e.target.value)} />
            </FormControl>

            <FormControl isInvalid={false}>
              <FormLabel>Complemento</FormLabel>
              <Input onChange={(e) => setComplement(e.target.value)} />
            </FormControl>
          </Flex>

          <Flex gap={8}>
            <FormControl isInvalid={false} maxWidth="calc(50% - 16px)">
              <FormLabel>Cidade</FormLabel>
              <Input
                value={city}
                isReadOnly={!errorCep}
                onChange={(e) => setCity(e.target.value)}
                backgroundColor={cep && !errorCep && 'gray.100'}
              />
            </FormControl>

            <FormControl isInvalid={false} maxWidth="100px">
              <FormLabel>UF</FormLabel>
              <Input
                value={uf}
                isReadOnly={!errorCep}
                onChange={(e) => setUf(e.target.value)}
                backgroundColor={cep && !errorCep && 'gray.100'}
              />
            </FormControl>
          </Flex>

          <Flex>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="same-address" mb="0">
                Endereço de entrega é o mesmo de faturamento?
              </FormLabel>
              <Switch
                id="same-address"
                isChecked={isSameAddress}
                onChange={() => setIsSameAddress(!isSameAddress)}
              />
            </FormControl>
          </Flex>

          {!isSameAddress && (
            <Flex flexDirection="column" gap={8} marginTop={16}>
              <Text fontWeight="bold">Endereço de entrega</Text>
              <Flex maxWidth="250px">
                <FormControl isInvalid={false}>
                  <FormLabel>CEP</FormLabel>
                  <Input
                    as={InputMask}
                    mask="*****-***"
                    onChange={(e) => setCepE(e.target.value)}
                  />
                  <FormErrorMessage>Digite seu nome completo</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex gap={8}>
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

              <Flex gap={8}>
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

              <Flex gap={8}>
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
            </Flex>
          )}
        </Flex>

        <Flex justifyContent="center" marginTop={12}>
          <Button isDisabled={isButtonDisabled} onClick={handleSignUp} colorScheme="teal">
            Criar seu cadastro
          </Button>
        </Flex>

        <Flex justifyContent="center" marginTop={12}>
          <Text>Já possui cadastro? </Text>
          <Text
            marginLeft={2}
            display="inline"
            color="teal.400"
            textDecoration="underline"
            cursor="pointer"
            fontWeight="bold"
            onClick={goToLogin}
          >
            Entrar
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignUp

import { useEffect, useState } from 'react'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import Router from 'next/router'
import { clientSignUp } from '../../../services/cliente'
import { postAddress } from '../../../services/address'

const useCadastro = ({ enderecoFa, enderecoEn }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [birthDate, setBirthDate] = useState()
  const [gender, setGender] = useState()

  const [cpf, setCpf] = useState()
  const [cpfValid, setCpfValid] = useState()

  const addressList = [enderecoFa, enderecoEn]

  const isCpfValid = (value) => {
    const cpfNumbers = value.replaceAll('.', '').replace('-', '')
    setCpfValid(cpfValidator.isValid(cpfNumbers))
  }

  const hasSamePasswords = password === confirmPassword

  const passwordValidator = !password || !confirmPassword || !hasSamePasswords

  const formattedName = name?.split(' ')

  const nameValidator =
    formattedName?.length > 1 &&
    formattedName[0]?.length > 2 &&
    formattedName[1]?.length > 2

  const emailValidator = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i.test(email)

  const isButtonDisabled =
    passwordValidator || !cpfValid || !nameValidator || !emailValidator

  const handleSignUp = () => {
    const payload = {
      name,
      password,
      email,
      cpf,
      genero: gender,
      dataNascimento: birthDate,
    }

    //rota para enviar os dados de cadastro
    clientSignUp(payload)
      .then((res) => {
        const clientId = res?.data.id

        addressList.map((address) => {
          const payload = { ...address, cliente: { id: clientId } }
          postAddress(payload).then(() => {
            Router.push('/')
          })
        })
      })
      .finally(() => {
        alert('Cadastro realizado com sucesso')
      })
  }

  const goToLogin = () => {
    Router.push('/login')
  }

  return {
    handleSignUp,
    goToLogin,

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
    name,
    emailValidator,
    email,

    hasSamePasswords,
    isButtonDisabled,
    nameValidator,
  }
}

export default useCadastro

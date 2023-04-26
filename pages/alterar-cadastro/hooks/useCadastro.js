import { useEffect, useState } from 'react'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import Router from 'next/router'

const useCadastro = ({ enderecoEn }) => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [birthDate, setBirthDate] = useState()
  const [gender, setGender] = useState()

  const handleSignUp = () => {
    const payload = {
      enderecoEn,
      name,
      birthDate,
      password,
      confirmPassword,
      gender,
    }

    //rota para enviar os dados de cadastro
    console.log({ payload })

    Router.push('/')
  }

  const goToLogin = () => {
    Router.push('/login')
  }

  return {
    handleSignUp,
    goToLogin,

    setName,
    setBirthDate,
    setGender,
    setPassword,
    setConfirmPassword,
    gender,
  }
}

export default useCadastro

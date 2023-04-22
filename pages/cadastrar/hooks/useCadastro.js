import { useEffect, useState } from 'react'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import Router from "next/router";

const useCadastro = ({ enderecoFa, enderecoEn }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [birthDate, setBirthDate] = useState()
  const [gender, setGender] = useState()

  const [cpf, setCpf] = useState()
  const [cpfValid, setCpfValid] = useState()

  const isCpfValid = (value) => {
    const cpfNumbers = value.replaceAll('.', '').replace('-', '')
    setCpfValid(cpfValidator.isValid(cpfNumbers))
  }

  const handleSignUp = () => {
    const payload = {
      enderecoEn,
      enderecoFa,
      name,
      birthDate,
      cpf,
      gender,
    }

    //rota para enviar os dados de cadastro
    console.log({ payload })

    Router.push('/')
  }

  return {
    handleSignUp,

    isCpfValid,
    cpfValid,
    cpf,
    setCpf,

    setName,
    setBirthDate,
    setGender,
    setEmail,
    gender,
  }
}

export default useCadastro

import { useEffect, useState } from 'react'
import Router from 'next/router'
import { getAllclients, clientUpdate } from '../../../services/cliente'

const useCadastro = ({ setReload, reloadAddress }) => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [birthDate, setBirthDate] = useState()
  const [gender, setGender] = useState()
  const [addressList, setAddressList] = useState()

  const handleSignUp = () => {
    const payload = {
      name,
      dataNascimento: birthDate,
      password,
      confirmPassword,
      genero: gender,
      email: localStorage.getItem('email'),
    }

    //rota para enviar os dados de cadastro
    clientUpdate(payload).then(() => {
      alert('Cadastro atualizado com sucesso')
      localStorage.setItem('nome', name)
      localStorage.setItem('genero', gender)
      localStorage.setItem('dataNascimento', birthDate)
      setReload(true)
    })

    Router.push('/')
  }

  const goToLogin = () => {
    Router.push('/login')
  }

  const getAddressList = () => {
    getAllclients().then((res) => {
      const clientList = res?.data

      const client = clientList.find((client) => {
        return client.id === Number(localStorage.getItem('id'))
      })

      const clientAddresses = client.endereco.filter((address) => address.ativo)

      setAddressList(clientAddresses)
    })
  }

  useEffect(() => {
    setName(localStorage.getItem('nome'))
    setBirthDate(localStorage.getItem('dataNascimento'))
    setGender(localStorage.getItem('genero'))

    getAddressList()
  }, [reloadAddress])

  return {
    handleSignUp,
    goToLogin,

    setName,
    setBirthDate,
    setGender,
    setPassword,
    setConfirmPassword,
    gender,
    name,
    birthDate,
    addressList,
    getAddressList,
  }
}

export default useCadastro

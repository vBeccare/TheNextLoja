import { useEffect, useState } from 'react'
import { getCepData } from '../../../services/cep'
import { postAddress } from '../../../services/address'

const useCadastro = ({ onClose, getAddressList }) => {
  const [enderecoEn, setEnderecoEn] = useState({})
  const [errorCepE, setErrorCepE] = useState(false)

  const [cepE, setCepE] = useState()
  const [logradouroE, setLogradouroE] = useState()
  const [numberE, setNumberE] = useState()
  const [complementE, setComplementE] = useState()
  const [bairroE, setBairroE] = useState()
  const [cityE, setCityE] = useState()
  const [ufE, setUfE] = useState()
  const [clientId, setClientId] = useState()

  const formattedCepE = cepE?.replace('_', '')

  const isCepEValid = formattedCepE?.length === 9

  const handleGetAddress = () => {
    isCepEValid &&
      getCepData({ cepNumber: formattedCepE })
        .then((res) => {
          const data = res?.data

          const isError = data.erro

          if (isError) {
            setErrorCepE(true)
            return
          }

          if (!isError) {
            setErrorCepE(false)
          }

          setLogradouroE(data?.logradouro)
          setBairroE(data?.bairro)
          setCityE(data?.localidade)
          setUfE(data?.uf)
        })
        .catch(() => {})
  }

  const payload = {
    endereco: logradouroE,
    cep: cepE,
    numero: numberE,
    complemento: complementE,
    bairro: bairroE,
    cidade: cityE,
    uf: ufE,
    tipo: 'E',
    cliente: {
      id: clientId,
    },
  }

  const handleNewAddress = () => {
    postAddress(payload).then(() => {
      alert('Endereço cadastrado com sucesso!')
      getAddressList()
      onClose()
    })
  }

  useEffect(() => {
    handleGetAddress()

    if (!isCepEValid) {
      setLogradouroE('')
      setBairroE('')
      setCityE('')
      setUfE('')
    }
  }, [cepE])

  useEffect(() => {
    setClientId(localStorage.getItem('id'))
  }, [])

  useEffect(() => {
    const endereco = {
      cepE,
      logradouroE,
      numberE,
      complementE,
      bairroE,
      cityE,
      ufE,
    }
    setEnderecoEn(endereco)
  }, [cepE, logradouroE, numberE, complementE, bairroE, cityE, ufE])

  return {
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
    cepE,
    logradouroE,
    numberE,
    complementE,
    bairroE,
    cityE,
    ufE,
  }
}

export default useCadastro

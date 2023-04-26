import { useEffect, useState } from 'react'
import { getCepData } from '../../../services/cep'

const useCadastro = () => {
  const [enderecoEn, setEnderecoEn] = useState({})
  const [errorCepE, setErrorCepE] = useState(false)

  const [cepE, setCepE] = useState()
  const [logradouroE, setLogradouroE] = useState()
  const [numberE, setNumberE] = useState()
  const [complementE, setComplementE] = useState()
  const [bairroE, setBairroE] = useState()
  const [cityE, setCityE] = useState()
  const [ufE, setUfE] = useState()

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

  const handleNewAddress = () => null

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

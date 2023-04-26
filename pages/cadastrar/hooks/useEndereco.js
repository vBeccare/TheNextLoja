import { useEffect, useState } from 'react'
import { getCepData } from '../../../services/cep'

const useCadastro = () => {
  const [cep, setCep] = useState()
  const [logradouro, setLogradouro] = useState()
  const [number, setNumber] = useState()
  const [complement, setComplement] = useState()
  const [bairro, setBairro] = useState()
  const [city, setCity] = useState()
  const [uf, setUf] = useState()

  const [enderecoEn, setEnderecoEn] = useState({})
  const [enderecoFa, setEnderecoFa] = useState({})
  const [errorCep, setErrorCep] = useState(false)
  const [errorCepE, setErrorCepE] = useState(false)

  const [isSameAddress, setIsSameAddress] = useState(true)

  const [cepE, setCepE] = useState()
  const [logradouroE, setLogradouroE] = useState()
  const [numberE, setNumberE] = useState()
  const [complementE, setComplementE] = useState()
  const [bairroE, setBairroE] = useState()
  const [cityE, setCityE] = useState()
  const [ufE, setUfE] = useState()

  const formattedCep = cep?.replace('_', '')
  const formattedCepE = cepE?.replace('_', '')

  const isCepValid = formattedCep?.length === 9
  const isCepEValid = formattedCepE?.length === 9

  const handleGetAddress = (cepType) => {
    const isBillingCep = cepType === 'cep'

    const hasCepValid = isCepValid || isCepEValid

    hasCepValid &&
      getCepData({ cepNumber: isBillingCep ? formattedCep : formattedCepE })
        .then((res) => {
          const data = res?.data

          const isError = data.erro

          if (isError) {
            isBillingCep ? setErrorCep(true) : setErrorCepE(true)
            return
          }

          if (!isError) {
            isBillingCep ? setErrorCep(false) : setErrorCepE(false)
          }

          isBillingCep
            ? setLogradouro(data?.logradouro)
            : setLogradouroE(data?.logradouro)
          isBillingCep ? setBairro(data?.bairro) : setBairroE(data?.bairro)
          isBillingCep ? setCity(data?.localidade) : setCityE(data?.localidade)
          isBillingCep ? setUf(data?.uf) : setUfE(data?.uf)
        })
        .catch(() => {})
  }

  const handleSameAddress = () => {
    setCepE(cep)
    setLogradouroE(logradouro)
    setNumberE(number)
    setComplementE(complement)
    setBairroE(bairro)
    setCityE(city)
    setUfE(uf)
  }

  const handleNotSameAddress = () => {
    setCepE('')
    setLogradouroE('')
    setNumberE('')
    setComplementE('')
    setBairroE('')
    setCityE('')
    setUfE('')
  }

  useEffect(() => {
    handleGetAddress('cep')

    if (!isCepValid) {
      setLogradouro('')
      setBairro('')
      setCity('')
      setUf('')
    }
  }, [cep])

  useEffect(() => {
    handleGetAddress('cepE')

    if (!isCepEValid) {
      setLogradouroE('')
      setBairroE('')
      setCityE('')
      setUfE('')
    }
  }, [cepE])

  useEffect(() => {
    const endereco = {
      cep,
      endereco: logradouro,
      numero: number,
      complemento: complement,
      bairro,
      cidade: city,
      uf,
      tipo: 'F',
    }
    setEnderecoEn(endereco)
  }, [cep, logradouro, number, complement, bairro, city, uf])

  useEffect(() => {
    const endereco = {
      cep: cepE,
      endereco: logradouroE,
      numero: numberE,
      complemento: complementE,
      bairro: bairroE,
      cidade: cityE,
      uf: ufE,
      tipo: 'E',
      padrao: true,
    }
    setEnderecoFa(endereco)
  }, [cepE, logradouroE, numberE, complementE, bairroE, cityE, ufE])

  useEffect(() => {
    isSameAddress ? handleSameAddress() : handleNotSameAddress()
  }, [isSameAddress, cep, logradouro, number, complement, bairro, city, uf])
  return {
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

    enderecoEn,
    enderecoFa,

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

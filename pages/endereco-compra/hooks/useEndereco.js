import Router from 'next/router'
import { useEffect, useState } from 'react'
import { getAllclients } from '../../../services/cliente'
const useEndereco = ({ reloadAddress, setReloadAddress }) => {
  const [addressList, setAddressList] = useState([])
  const [selectedAddress, setSelectedAddress] = useState()

  const handlePaymentMethod = () => {
    Router.push('/forma-pagamento')
  }

  const getAddressList = () => {
    getAllclients().then((res) => {
      const clientList = res?.data

      const client = clientList.find((client) => {
        return client.id === Number(localStorage.getItem('id'))
      })

      const clientAddresses = client.endereco.filter((address) => address.ativo)

      const clientFilteredAddressList = clientAddresses.filter(
        (address) => address.tipo === 'E',
      )

      setAddressList(clientFilteredAddressList)

      setSelectedAddress(clientFilteredAddressList[0].id)
    })
  }

  useEffect(() => {
    getAddressList()
  }, [reloadAddress])

  useEffect(() => {
    localStorage.setItem('enderecoSelecionado', selectedAddress)
  }, [selectedAddress])

  return {
    handlePaymentMethod,
    addressList,
    selectedAddress,
    setReloadAddress,
    setSelectedAddress,
    reloadAddress,
    getAddressList,
  }
}

export default useEndereco

import Router from 'next/router'
import { useEffect, useState } from 'react'
import {
  addressUpdate,
  addressUpdateStatus,
  getAllclients,
} from '../../../services/address'

const useAddressCard = ({ setReloadAddress, reloadAddress }) => {
  const [addressDefaultId, setAddressDefaultId] = useState()

  const updateAddress = (id) => {
    addressUpdate({ id: addressDefaultId, padrao: false }).then(() => {
      addressUpdate({ id, padrao: true }).then(() => {
        setReloadAddress(true)
      })
    })
  }

  const handleDeleteAddress = (id) => {
    addressUpdateStatus({ id }).then(() => {
      setReloadAddress(true)
    })
  }

  useEffect(() => {
    getAllclients().then((res) => {
      const addressClientList = res?.data.filter(
        (address) => address.cliente.id === Number(localStorage.getItem('id')),
      )
      const addressDefaultId = addressClientList.find(
        (address) => address.padrao === true,
      )?.id

      setAddressDefaultId(addressDefaultId)
      setReloadAddress(false)
    })
  }, [reloadAddress])
  return {
    updateAddress,
    handleDeleteAddress,
  }
}

export default useAddressCard

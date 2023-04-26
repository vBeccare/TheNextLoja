import { useEffect, useState } from 'react'
import { getAllProduct } from '../../services/product'

const useIndex = () => {
  const [productList, setProductList] = useState([])
  const [reload, setReload] = useState(false)
  const [reloadAddress, setReloadAddress] = useState(false)

  useEffect(() => {
    getAllProduct({ page: 1 }).then((response) => {
      setProductList(response.data.content)
    })
  }, [])

  return {
    formattedProductList: productList
      .slice(0, 20)
      .filter((produto) => produto.ativo),
      setReload,
      reload,
      setReloadAddress,
      reloadAddress
  }
}

export default useIndex

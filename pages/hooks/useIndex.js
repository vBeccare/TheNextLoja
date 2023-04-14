import { useEffect, useState } from 'react'
import { getAllProduct } from '../../services/product'

const useIndex = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getAllProduct({ page: 1 }).then((response) => {
      setProductList(response.data.content)
    })
  }, [])

  return {
    formattedProductList: productList
      .slice(0, 20)
      .filter((produto) => produto.ativo),
  }
}

export default useIndex

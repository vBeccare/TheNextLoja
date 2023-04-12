import Router from 'next/router'

const useProductItem = () => {
  const handleProductDetails = (id) => {
    Router.push(`/visualizar-produto/?produto=${id}`)
  }
  return {
    handleProductDetails,
  }
}

export default useProductItem

import { Button, Flex, Image, Text, Box } from '@chakra-ui/react'

import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import useIndex from './hooks/useIndex'
import { getMoneyMask } from '../utils/formatters'

const HomePage = () => {
  const { formattedProductList } = useIndex()
  return (
    <Flex
      height="100vh"
      backgroundColor="#f3f3f3"
      flexDirection="column"
      alignItems="center"
    >
      <Header />
      <Flex width="100vw">
        <Flex
          marginTop={24}
          width="100%"
          flexDirection="column"
          paddingX="64px"
        >
          <Text fontSize={24} fontWeight="bold" marginBottom={4}>
            Veja nossos produtos
          </Text>
          <Flex padding={4} overflowX="scroll" gap={6}>
            {formattedProductList.map((product) => {
              const imgProduct = product.imagem.find(
                (image) => image.id === product?.imgPrincipal,
              )?.file
              return (
                <ProductItem
                  name={product.name}
                  key={product.id}
                  id={product.id}
                  price={getMoneyMask(product.preco, 'R$ ', 2)}
                  image={imgProduct ? imgProduct : '/image-not-found.png'}
                />
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomePage

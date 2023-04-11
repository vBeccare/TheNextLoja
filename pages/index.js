import { Button, Flex, Image, Input } from '@chakra-ui/react'
import ProductItem from '../components/ProductItem'

import Header from '../components/Header'

const HomePage = () => {
  return (
    <Flex
      height="100vh"
      backgroundColor="#f3f3f3"
      flexDirection="column"
      alignItems="center"
    >
      <Header />
      <Flex>
        <ProductItem name="Samsung S23" />
        <ProductItem />
      </Flex>
    </Flex>
  )
}

export default HomePage
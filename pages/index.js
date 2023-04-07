import { Button, Flex, Image, Input } from '@chakra-ui/react'

import Header from '../components/Header'

const HomePage = () => {
  return (
    <Flex height="100vh" flexDirection="column" alignItems="center">
      <Header />
      <Flex>body</Flex>
    </Flex>
  )
}

export default HomePage

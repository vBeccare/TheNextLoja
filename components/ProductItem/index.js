import { Flex, Image, Text } from '@chakra-ui/react'
import useProductItem from './hooks/useProductItem'

const ProductItem = ({
  name = 'iPhone 14 ultima geracao bla bla bla bla bla ablablalbalbalblablal',
  price = 'R$ 15.000,00',
  id = 1,
}) => {
  const { handleProductDetails } = useProductItem
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      alignItems="center"
      backgroundColor="white"
      boxShadow="0px 7px 13px -5px rgba(0,0,0,0.75)"
      maxWidth={200}
			minWidth={200}
      onClick={handleProductDetails}
    >
      <Image boxSize="120px" src="/avatar.png" />
      <Text
        fontSize="20px"
        whiteSpace="nowrap"
        maxWidth={200}
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {name}
      </Text>
      <Text fontSize="16px">{price}</Text>
    </Flex>
  )
}

export default ProductItem

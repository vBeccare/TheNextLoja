import { Flex, Image, Text } from '@chakra-ui/react'
import useProductItem from './hooks/useProductItem'

const ProductItem = ({ name, price, image = '', id }) => {
  const { handleProductDetails } = useProductItem()
  return (
    <Flex
      flexDirection="column"
      borderRadius="8px"
      alignItems="center"
      backgroundColor="white"
      boxShadow="0px 7px 13px -5px rgba(0,0,0,0.75)"
      maxWidth={200}
      minWidth={200}
      onClick={() => handleProductDetails(id)}
      paddingY={10}
      cursor="pointer"
    >
      <Image boxSize="140px" objectFit="contain" src={image} alt="produto" />
      <Text
        fontSize="20px"
        whiteSpace="nowrap"
        maxWidth={180}
        marginY={4}
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

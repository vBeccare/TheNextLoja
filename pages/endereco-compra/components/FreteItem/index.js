import { Flex, Radio, Text } from '@chakra-ui/react'

const FreteItem = ({ idx, name, value }) => {
  return (
    <Radio value={idx}>
      <Flex minWidth={150} justifyContent="space-between">
        <Text>{name}</Text>
        <Text>{value}</Text>
      </Flex>
    </Radio>
  )
}

export default FreteItem

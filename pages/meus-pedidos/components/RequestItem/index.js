import { Flex, Text, Button } from '@chakra-ui/react'
import { getMoneyMask } from '../../../../utils/formatters'
import useRequestItem from './hooks/useRequestItem'

const RequestItem = ({ number, status, date, totalValue }) => {
  const {handleRequestDetails} = useRequestItem()
  return (
    <Flex
      borderWidth={2}
      borderRadius={8}
      padding={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>#{number}</Text>
      <Text>{date}</Text>
      <Text>{getMoneyMask(totalValue, 'R$', 2)}</Text>
      <Text>{status}</Text>

      <Button colorScheme="blue" onClick={() =>handleRequestDetails(number)}>Detalhes</Button>
    </Flex>
  )
}

export default RequestItem

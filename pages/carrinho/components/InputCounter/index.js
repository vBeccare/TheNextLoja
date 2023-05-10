import { Button, Flex, HStack, Input, useNumberInput } from '@chakra-ui/react'

const InputCounter = ({ defaultValue, handleUpdateQtd, id, handleRemoveItem }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: defaultValue,
      min: 1,
      max: 10,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const inputValue = input?.value

  return (
    <Flex flexDirection="column">
      <HStack maxW="150px">
        <Button {...dec} onClick={() => handleUpdateQtd(inputValue, id)}>
          -
        </Button>
        <Input variant="filled" {...input} />
        <Button {...inc} onClick={() => handleUpdateQtd(inputValue, id)}>
          +
        </Button>
      </HStack>
      <Button marginTop={4} onClick={() => handleRemoveItem(id)}>Remover</Button>
    </Flex>
  )
}

export default InputCounter

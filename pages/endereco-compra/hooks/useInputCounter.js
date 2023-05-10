import { useNumberInput } from '@chakra-ui/react'

const useInputCounter = () => {
  const cartItems = [
    { name: 'S20', value: 3000, qtd: 2 },
    { name: 'S23', value: 7000, qtd: 3 },
  ]

  const inputsArray = cartItems.map((item, idx) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: item.qtd,
        min: 1,
        max: 10,
        precision: 0,
      })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return { inc, dec, input }
  })

  const cartArray = cartItems.map((item, idx) => {
    return { ...item, ...inputsArray[idx] }
  })

  return {
    cartArray,
  }
}

export default useInputCounter

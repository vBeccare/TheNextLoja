import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>The Next</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App

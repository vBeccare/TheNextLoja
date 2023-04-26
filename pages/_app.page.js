import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import useIndex from './hooks/useIndex'

const App = ({ Component, pageProps }) => {
  const { setReload, reload, setReloadAddress, reloadAddress } = useIndex()
  return (
    <ChakraProvider>
      <Head>
        <title>The Next</title>
      </Head>
      <Component
        {...pageProps}
        reload={reload}
        setReload={setReload}
        setReloadAddress={setReloadAddress}
        reloadAddress={reloadAddress}
      />
    </ChakraProvider>
  )
}

export default App

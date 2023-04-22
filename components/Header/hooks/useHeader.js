import Router from 'next/router'
import { useRouter } from 'next/router'

const useHeader = () => {
  const handleHome = () => {
    Router.push('/')
  }

  const handleSignUp = () => {
    Router.push('/cadastrar')
  }

  return {
    handleHome,
    handleSignUp
  }
}

export default useHeader

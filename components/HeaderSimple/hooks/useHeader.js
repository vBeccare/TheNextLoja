import Router from 'next/router'
import { useRouter } from 'next/router'

const useHeader = () => {
  const handleHome = () => {
    Router.push('/')
  }

  return {
    handleHome,
  }
}

export default useHeader

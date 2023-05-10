import Router from 'next/router'
const useEndereco = () => {

const handlePaymentMethod = () => {
	Router.push('/forma-pagamento')
}
	return {
		handlePaymentMethod
	}
}

export default useEndereco
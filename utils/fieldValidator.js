export const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

export const isCepValid = (value = '') => {
	const match = value.match(/\d+/gi),
		result = match ? match.join('') : null

	const isValid = value
		.split('')
		.every((item, index) => item.match(cepMask[index]))

	if (result && !/^(.)\1+$/.test(value.replace(/[\D]/, ''))) {
		return result.length === 8 ? isValid : false
	}

	return false
}
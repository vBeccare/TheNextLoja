import axios from 'axios'

export const getCepData = ({ cepNumber }) => {
  return axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`)
}

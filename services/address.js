import axios from 'axios'
import { TOKEN } from '../constants/token'

export const postAddress = (payload) => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.post('http://localhost:8080/enderecos/cadastrar', payload, config)
}

export const addressUpdate = (payload) => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.put('http://localhost:8080/enderecos/atualizar', payload, config)
}

export const addressUpdateStatus = (payload) => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.put(
    'http://localhost:8080/enderecos/atualizar-status',
    payload,
    config,
  )
}

export const getAllclients = () => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }

  return axios.get('http://localhost:8080/enderecos/all', config)
}

import axios from 'axios'
import { TOKEN } from '../constants/token'

export const clientLogin = (payload) => {
  return axios.post('http://localhost:8080/clientes/logar', payload)
}

export const clientSignUp = (payload) => {
  return axios.post('http://localhost:8080/clientes/cadastrar', payload)
}

export const clientUpdate = (payload) => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.put('http://localhost:8080/clientes/atualizar', payload, config)
}

export const clientUpdateStatus = (payload) => {
  const token = localStorage.getItem('token')
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.put(
    'http://localhost:8080/clientes/atualizar-status',
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

  return axios.get('http://localhost:8080/clientes/all', config)
}

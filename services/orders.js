import axios from 'axios'
import { TOKEN } from '../constants/token'

export const getAllRequests = () => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }

  return axios.get(`http://localhost:8080/carrinhos/all`, config)
}

export const getAllItems = () => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }

  return axios.get(`http://localhost:8080/carrinhos/itens`, config)
}

export const postItemCart = (payload) => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.post(
    'http://localhost:8080/carrinhos/adicionar/item',
    payload,
    config,
  )
}


export const postCart = (payload) => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }
  return axios.post(
    'http://localhost:8080/carrinhos/cadastrar',
    payload,
    config,
  )
}

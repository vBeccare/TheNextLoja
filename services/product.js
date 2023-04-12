import axios from 'axios'
import { TOKEN } from '../constants/token'

export const getAllProduct = ({ page }) => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }

  return axios.get(
    `http://localhost:8080/produtos/all?size=1000&page=${page - 1}`,
    config,
  )
}

export const getProductByUuid = ({ id }) => {
  let config = {
    headers: {
      Authorization: TOKEN,
    },
  }

  return axios.get(`http://localhost:8080/produtos/produto/${id}`, config)
}

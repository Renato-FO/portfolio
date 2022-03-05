import axios from 'axios'

const apiWithoutToken = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL)
})

export default apiWithoutToken

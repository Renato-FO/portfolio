import axios from 'axios'
import qs from 'qs'

import getAuthorizationToken from '@/utils/getAuthorizationToken'

const api = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL)
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorizationToken()

  config.paramsSerializer = (params) => {
    return qs.stringify(params, { indices: false })
  }

  return config
})

export default api

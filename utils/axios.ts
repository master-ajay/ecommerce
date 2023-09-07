import axios from 'axios'
import { STRAPI_API_TOKEN } from './urls'

const axiosServices = axios.create()

axiosServices.defaults.headers.common.Authorization = `Bearer ${STRAPI_API_TOKEN}`

export default axiosServices
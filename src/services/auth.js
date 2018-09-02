import axios from 'axios'

const AuthApi = axios.create({
  baseURL: process.env.AUTH_URL,
  withCredentials: true,
})

export default AuthApi

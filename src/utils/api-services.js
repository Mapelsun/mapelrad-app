import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sandbox.api.maplerad.com/v1/auth',
})

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const loginUser = async (data) => {
  const response = await api.post('/login', data)
  return response.data
}

const verifyOtp = async (data) => {
  const response = await api.post('/verify-otp', data)
  return response.data
}

// const getAll = async () => {
//   const config = {
//     headers: { Authorization: token },
//   }
//   const response = await api.post('/all', config)
//   return response.data
// }

export default {setToken, loginUser, verifyOtp}

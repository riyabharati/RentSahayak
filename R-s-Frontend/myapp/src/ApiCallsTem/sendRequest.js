import axios, { AxiosInstance, AxiosResponse } from 'axios'

export const tokenAssembler = () => {
  
    return `${localStorage.getItem("TOKEN_1")}.${localStorage.getItem("TOKEN_2")}.${localStorage.getItem("TOKEN_3")}`
    
}

const getRootUrl = ()=> {
  const port = 8000
  const dev = true
  return 'https://rentsahayak-backend.herokuapp.com/'
}

const sendRequest = async (
  method,
  path,
  secured = true,
  body,
) => {
  const getApi = axios.create({
    baseURL: getRootUrl(),
    headers: secured
      ?
      {
        post: { 'Content-Type': 'application/json' },
        'x-access-token': tokenAssembler() || '',
      }
      :
      {
        post: { 'Content-Type': 'application/json' },
      },
  })

  return getApi.request({
    method: method,
    url: path,
    ...((method === 'POST' || method === 'PUT') && { data: body, }),
    timeout: 5000,
  })
}

export default sendRequest

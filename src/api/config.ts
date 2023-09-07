import Axios from "axios"
import { getToken, removeToken } from "./token"

<<<<<<< HEAD
export const BaseUrl = "https://murphyteam.ir/api/";
export const imageUrl = "https://murphyteam.ir";
export const apiAgent = Axios.create({ baseURL: BaseUrl });

apiAgent.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token && config.headers && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
=======
export const BaseUrl = "https://murphyteam.ir/api/"
export const apiAgent = Axios.create({ baseURL: BaseUrl })

apiAgent.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token && config.headers && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiAgent.interceptors.response.use(
  (config) => config,

  (error) => {
    if (error.response.status === 401) {
      removeToken()
    }

    return Promise.reject(error)
  }
)

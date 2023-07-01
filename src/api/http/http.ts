import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { router } from '~/modules/router'

// import { getTokenStore } from '../utils/storage/token'
// import { setIsLogInAction, userLogout } from '../store/actions/login'

interface Axios extends AxiosInstance {
  request<T = unknown, R = T, D = any>(config: AxiosRequestConfig<D>): Promise<R>
  get<T = unknown, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  delete<T = unknown, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  head<T = unknown, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  options<T = unknown, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  post<T = unknown, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  put<T = unknown, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  patch<T = unknown, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    /** 不提示和跳转到登录页 */
    silent?: boolean
    /** 返回原始响应 */
    returnOrigin?: boolean
  }
}

const http: Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getTokenStorage()
    if (token)
      config.headers.Authorization = token

    return config
  },
  (error) => {
  // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    if (response.config.returnOrigin)
      return response

    const data = response.data

    if (data.code !== 200 || response.status !== 200) {
      if (!response.config.silent) {
        if (data.code === 401)
          router.push('/login')

        message.error(data.msg || '网络错误，请稍后重试')
      }
      return Promise.reject(data)
    }
    return data
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export { http }

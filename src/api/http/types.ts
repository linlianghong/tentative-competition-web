export interface BaseResponse<T = any> {
  code: number
  data: T
  msg: string
  success: boolean
}

export interface PageRequest {
  pageNumber: number
  pageSize: number
}

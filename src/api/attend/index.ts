import type { BaseResponse } from '../http'

export function getAttendInfo(id: string) {
  return http.get<BaseResponse>(`/service/attend/${id}`)
}
export function addOrEditAttendInfo(params: any) {
  return http.post<BaseResponse>('/service/attend/add-edit', params)
}
// export function getAttendInfo(id: string) {
//   return http.get<BaseResponse>(`/service/attend/${id}`)
// }

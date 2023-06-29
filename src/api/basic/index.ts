import type { BaseResponse } from '../http'

export function getBasicsInfoInfo() {
  return http.get<BaseResponse<BasicInfo>>('/client/home-page/basics-info')
}
export interface BasicInfo {
  scheduleId: number
  scheduleTitle: string
  scheduleLogoUrl: string
  letterUrl?: any
  letterFileId?: any
}

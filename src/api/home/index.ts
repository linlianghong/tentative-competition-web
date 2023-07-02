import type { BaseResponse } from '../http'

export function getHomeHistoryWorks() {
  return http.get<BaseResponse<PreviousWorkItem[]>>('/client/home-page/previous-works')
}

export function getHomeIntro(scheduleId: string) {
  return http.get<BaseResponse>(`/client/home-page/intro/${scheduleId}`)
}
export interface WorksImgVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface PreviousWorkItem {
  imgUrl?: any
  imgFileId?: any
  worksId: number
  worksImg: string
  worksImgVo: WorksImgVo[]
  worksName: string
  content: string
}

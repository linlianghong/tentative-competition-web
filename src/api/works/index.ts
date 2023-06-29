import type { BaseResponse } from '../http'

export function getSchedules(scheduleId: string) {
  return http.get<BaseResponse<any>>(`/client/previous/schedule-pullDown/${scheduleId}`)
}

export function getPreviousWorks(scheduleId: string, worksName: string) {
  return http.get<BaseResponse<any>>('/client/previous/schedule-works', { params: { worksName, scheduleId } })
}

export interface WorksImgList {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorksImgMainVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface PromiseVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorksVideoVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorkInfo {
  id: number
  scheduleId: number
  userId: number
  worksName: string
  isGroupImg: number
  worksIntro: string
  worksOriginality: string
  studyContent: string
  worksImg: string
  worksImgList: WorksImgList[]
  worksImgMain: number
  worksImgMainVo: WorksImgMainVo
  promise: number
  promiseVo: PromiseVo
  worksVideo: number
  worksVideoVo: WorksVideoVo
  delFlag: number
  worksStatus: string
  operateType?: any
  createBy: number
  createTime: string
  awardConfigId: number
  score: string
  finallyScore: number
}
export function getWorkById(id: string) {
  return http.get<BaseResponse<WorkInfo>>(`/client/works/${id}`)
}

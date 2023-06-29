import type { BaseResponse } from '../http'

export interface ScheduleItem {
  key: string
  val: string
}
export function getSchedules(scheduleId: string) {
  return http.get<BaseResponse<ScheduleItem[]>>(`/client/previous/schedule-pullDown/${scheduleId}`)
}
export interface PreviousWork {
  scheduleLabel: string
  awardName: string
  worksId: number
  worksName: string
  worksImgMain: number
  worksImgMainUrl: string
  worksImgCount: number
  worksImg: string
  authorName?: any
  userId: number
  worksOriginality: string
  description: string
}
export function getPreviousWorks(params: { scheduleId: string; worksName?: string }) {
  return http.get<BaseResponse<PreviousWork[]>>('/client/previous/schedule-works', { params })
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
